const participants = Array.isArray(window.USER_STUDY_PARTICIPANTS)
  ? window.USER_STUDY_PARTICIPANTS
  : [];

const tabsElement = document.querySelector("#participant-tabs");
const detailElement = document.querySelector("#participant-detail");
const dialog = document.querySelector("#image-dialog");
const dialogImage = document.querySelector("#dialog-image");
const dialogCaption = document.querySelector("#dialog-caption");
const dialogClose = dialog?.querySelector(".dialog-close");

const viewOrder = ["front", "left", "back", "right"];

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function titleCase(value) {
  const text = String(value || "");
  return text ? text[0].toUpperCase() + text.slice(1) : "";
}

function imageButton(src, alt, caption = alt, className = "") {
  return `
    <button class="image-button ${escapeHtml(className)}" type="button"
      data-image-src="${escapeHtml(src)}"
      data-image-alt="${escapeHtml(alt)}"
      data-image-caption="${escapeHtml(caption)}"
      aria-label="Expand ${escapeHtml(alt)}">
      <img src="${escapeHtml(src)}" alt="${escapeHtml(alt)}" loading="lazy" decoding="async">
    </button>`;
}

function modelViewer(src, alt, className = "") {
  return `
    <model-viewer
      class="${escapeHtml(className)}"
      src="${escapeHtml(src)}"
      alt="${escapeHtml(alt)}"
      camera-controls
      auto-rotate
      auto-rotate-delay="1200"
      rotation-per-second="10deg"
      interaction-prompt="none"
      touch-action="pan-y"
      shadow-intensity="0.35"
      exposure="1.05"
      loading="lazy">
    </model-viewer>`;
}

function metricBadges(method) {
  const metrics = method.metrics;
  const refinements = method.type === "2d" ? metrics.imageEdits : metrics.frontEdits + metrics.imageEdits;
  return `
    <div class="method-metrics" aria-label="${escapeHtml(method.title)} summary">
      <span><strong>${metrics.generationRounds}</strong> generation ${metrics.generationRounds === 1 ? "round" : "rounds"}</span>
      <span><strong>${metrics.candidateCount}</strong> candidates</span>
      <span><strong>${refinements}</strong> recorded ${refinements === 1 ? "revision" : "revisions"}</span>
      <span><strong>${metrics.reconstructions}</strong> reconstruction ${metrics.reconstructions === 1 ? "attempt" : "attempts"}</span>
    </div>`;
}

function specificationDetails(specification) {
  const description = specification.description
    ? `<p class="shape-description">${escapeHtml(specification.description)}</p>`
    : `<p class="shape-description is-empty">No separate shape description was entered.</p>`;
  const parts = specification.parts.map((part) => `
    <li>
      <span class="part-name">
        ${part.color ? `<i class="part-swatch" style="--part-color:${escapeHtml(part.color)}" aria-hidden="true"></i>` : ""}
        ${escapeHtml(part.name)}
      </span>
      <span class="part-description">${escapeHtml(part.description || part.colorName || "No description entered")}</span>
    </li>`).join("");
  return `
    <details class="specification-details">
      <summary>Participant-authored description</summary>
      <div class="specification-body">
        <h5>${escapeHtml(specification.name)}</h5>
        ${description}
        <ul class="part-list">${parts}</ul>
      </div>
    </details>`;
}

function drawingInput(input, participantLabel) {
  const cards = input.drawings.map((drawing, index) => `
    <article class="input-media-card">
      <div class="media-heading">
        <h5>Drawing ${index + 1}</h5>
        <span>${escapeHtml(drawing.view)}</span>
      </div>
      ${imageButton(
        drawing.image,
        `${participantLabel} 2D input drawing ${index + 1}`,
        `2D drawing ${index + 1} · ${drawing.view}`
      )}
    </article>`).join("");
  return `<div class="drawing-grid drawing-count-${input.drawings.length}">${cards}</div>`;
}

function spatialInput(input, participantLabel) {
  const orientationCards = input.orientations.map((orientation, index) => `
    <article class="orientation-card ${orientation.isFinal ? "is-final" : ""}">
      ${imageButton(
        orientation.image,
        `${participantLabel} 3D guide orientation ${index + 1}`,
        orientation.label
      )}
      <span>${escapeHtml(orientation.label)}${orientation.isFinal ? " · used for generation" : ""}</span>
    </article>`).join("");
  const orientationNote = input.frontEdits.length
    ? `${input.frontEdits.length} front-orientation ${input.frontEdits.length === 1 ? "edit" : "edits"}; geometry remained unchanged.`
    : "No front-orientation edit; geometry remained unchanged.";
  return `
    <div class="spatial-input-grid">
      <article class="input-media-card spatial-model-card">
        <div class="media-heading"><h5>Part-labeled spatial sketch</h5><span>${input.geometryVersions} geometry version</span></div>
        ${modelViewer(input.model, `${participantLabel} part-labeled 3D spatial input`, "input-model")}
        <p class="model-help">Drag to rotate · scroll or pinch to zoom</p>
      </article>
      <div class="orientation-panel">
        <div class="media-heading"><h5>Front-orientation history</h5><span>${escapeHtml(orientationNote)}</span></div>
        <div class="orientation-grid orientation-count-${input.orientations.length}">${orientationCards}</div>
      </div>
    </div>`;
}

function referenceStrip(references, label) {
  if (!references.length) return "";
  return `
    <div class="reference-strip" aria-label="${escapeHtml(label)} references">
      ${references.map((reference, index) => `
        <div class="reference-thumb">
          ${imageButton(reference.image, `${label} reference ${index + 1}`, `${label} · reference ${index + 1}`)}
          <span>${escapeHtml(reference.label)}</span>
        </div>`).join("")}
    </div>`;
}

function editFlow(edit, participantLabel) {
  const usage = edit.usedViews.length
    ? `Used in final: ${edit.usedViews.map(titleCase).join(" · ")}`
    : "Reviewed during the session; not used in the final reconstruction.";
  return `
    <article class="edit-block">
      <div class="edit-flow">
        <div class="media-card">
          <div class="media-heading"><h5>Before</h5><span>edit source</span></div>
          ${imageButton(edit.before, `${participantLabel} ${edit.label} before`, `${edit.label} · before`)}
        </div>
        <div class="instruction-card">
          <div>
            <p class="card-kicker">${escapeHtml(edit.label)}</p>
            <blockquote>${escapeHtml(edit.instruction)}</blockquote>
            <p class="edit-usage">${escapeHtml(usage)}</p>
            ${referenceStrip(edit.references, edit.label)}
          </div>
        </div>
        <div class="media-card">
          <div class="media-heading"><h5>After</h5><span>revised candidate</span></div>
          ${imageButton(edit.after, `${participantLabel} ${edit.label} after`, `${edit.label} · after`)}
        </div>
      </div>
    </article>`;
}

function editSection(method, participantLabel) {
  if (!method.edits.length) {
    const message = method.type === "3d" && method.metrics.frontEdits
      ? "No text-based image edit was recorded; the authored revision occurred through front-orientation selection."
      : "No text-based image edit was recorded for this workflow.";
    return `<div class="no-edit-card"><span aria-hidden="true">✓</span><p>${escapeHtml(message)}</p></div>`;
  }
  return `<div class="edit-list">${method.edits.map((edit) => editFlow(edit, participantLabel)).join("")}</div>`;
}

function changeSummary(attempt, index) {
  if (index === 0) return "Initial reconstruction selection";
  if (!attempt.changes.length) return "Selection unchanged; reconstruction rerun";
  const grouped = attempt.changes.map((change) => `${titleCase(change.kind)} ${change.view}`);
  return grouped.join(" · ");
}

function selectionRows(attempt) {
  return viewOrder.map((view) => {
    const selection = attempt.selection[view];
    if (!selection) {
      return `<div class="selection-cell is-omitted"><strong>${titleCase(view)}</strong><span>Omitted</span></div>`;
    }
    const sourceView = selection.sourceView && selection.sourceView !== view
      ? ` · source ${selection.sourceView}`
      : "";
    return `
      <div class="selection-cell">
        <strong>${titleCase(view)}</strong>
        <span>${escapeHtml(selection.candidate)}${escapeHtml(sourceView)}</span>
      </div>`;
  }).join("");
}

function attemptHistory(reconstruction, participantLabel) {
  return `
    <div class="attempt-history attempt-count-${reconstruction.attempts.length}">
      ${reconstruction.attempts.map((attempt, index) => `
        <article class="attempt-card ${index === reconstruction.attempts.length - 1 ? "is-final" : ""}">
          <div class="media-heading">
            <h5>${escapeHtml(attempt.label)}</h5>
            <span>${attempt.viewsUsed.length}-view input${index === reconstruction.attempts.length - 1 ? " · final" : ""}</span>
          </div>
          ${imageButton(
            attempt.image,
            `${participantLabel} ${attempt.label}`,
            `${attempt.label} · ${attempt.viewsUsed.join(" + ")}`
          )}
          <p class="change-summary">${escapeHtml(changeSummary(attempt, index))}</p>
          <div class="selection-grid">${selectionRows(attempt)}</div>
        </article>`).join("")}
    </div>`;
}

function finalViewStrip(reconstruction, participantLabel) {
  return `
    <div class="final-view-strip" aria-label="Final selected views">
      ${viewOrder.map((view) => {
        const image = reconstruction.finalViews[view];
        if (!image) {
          return `<div class="view-thumb is-missing"><div>Not used</div><span>${titleCase(view)}</span></div>`;
        }
        return `
          <div class="view-thumb">
            ${imageButton(image, `${participantLabel} final ${view} view`, `Final selected ${view} view`)}
            <span>${titleCase(view)}</span>
          </div>`;
      }).join("")}
    </div>`;
}

function finalOutput(method, participantLabel) {
  const reconstruction = method.reconstruction;
  return `
    <div class="final-output-grid">
      <article class="media-card final-input-card">
        <div class="media-heading">
          <h5>Final Hunyuan input</h5>
          <span>${reconstruction.viewsUsed.length} views · ${reconstruction.viewsUsed.join(" + ")}</span>
        </div>
        ${imageButton(reconstruction.finalInput, `${participantLabel} ${method.type.toUpperCase()} final Hunyuan input`, "Final Hunyuan input")}
        ${finalViewStrip(reconstruction, participantLabel)}
      </article>
      <div class="final-arrow" aria-hidden="true"><span></span><i></i></div>
      <article class="model-card">
        <div class="media-heading"><h5>Final reconstructed output</h5><span>interactive GLB</span></div>
        ${modelViewer(reconstruction.finalModel, `${participantLabel} ${method.type.toUpperCase()} final reconstructed model`, "output-model")}
        <p class="model-help">Drag to rotate · scroll or pinch to zoom</p>
      </article>
    </div>`;
}

function stage(number, title, content, className = "") {
  return `
    <section class="method-stage ${escapeHtml(className)}">
      <div class="stage-heading"><span>${number}</span><h4>${escapeHtml(title)}</h4></div>
      ${content}
    </section>`;
}

function methodCard(method, participantLabel) {
  const inputContent = method.type === "2d"
    ? drawingInput(method.input, participantLabel)
    : spatialInput(method.input, participantLabel);
  const postFinalNote = method.metrics.postFinalGenerations
    ? `<p class="method-note">${method.metrics.postFinalGenerations} later generation round was recorded after the final reconstruction and is not used below.</p>`
    : "";
  return `
    <article class="method-card method-${escapeHtml(method.type)}">
      <header class="method-header">
        <div>
          <p class="method-kicker">${method.type === "2d" ? "Drawing condition" : "Spatial condition"}</p>
          <h3>${escapeHtml(method.title)}</h3>
        </div>
        <span class="method-chip">${method.type.toUpperCase()}</span>
      </header>
      ${metricBadges(method)}
      ${postFinalNote}
      ${stage("01", "Authored input", `${inputContent}${specificationDetails(method.specification)}`, "input-stage")}
      ${stage("02", "Image and orientation revisions", editSection(method, participantLabel), "edit-stage")}
      ${stage("03", "View selection history", attemptHistory(method.reconstruction, participantLabel), "selection-stage")}
      ${stage("04", "Final reconstruction", finalOutput(method, participantLabel), "output-stage")}
    </article>`;
}

function participantMarkup(participant) {
  const twoD = participant.methods.find((method) => method.type === "2d");
  const threeD = participant.methods.find((method) => method.type === "3d");
  return `
    <div class="participant-intro">
      <div class="participant-copy">
        <p class="participant-index">Paired session · ${String(participant.number).padStart(2, "0")}</p>
        <h2>${escapeHtml(participant.label)}</h2>
        <p>
          The two columns preserve this participant's recorded workflow: authored input, generated candidates,
          user revisions, selected multiview condition, and final reconstructed mesh.
        </p>
        ${participant.note ? `<div class="data-note"><strong>Data note</strong><span>${escapeHtml(participant.note)}</span></div>` : ""}
      </div>
      <article class="reference-card">
        <div class="media-heading"><h5>Shared target reference</h5><span>same object in both conditions</span></div>
        ${imageButton(participant.referenceImage, "School chair with folding desk target reference", "Shared target reference")}
      </article>
    </div>
    <div class="comparison-labels" aria-hidden="true">
      <span>2D drawing condition</span><i>paired comparison</i><span>3D spatial condition</span>
    </div>
    <div class="method-comparison">
      ${methodCard(twoD, participant.label)}
      ${methodCard(threeD, participant.label)}
    </div>`;
}

function renderTabs(activeId) {
  tabsElement.innerHTML = participants.map((participant) => `
    <button class="participant-tab" type="button" role="tab"
      id="tab-${escapeHtml(participant.id)}"
      aria-selected="${participant.id === activeId}"
      aria-controls="participant-detail"
      tabindex="${participant.id === activeId ? "0" : "-1"}"
      data-participant-id="${escapeHtml(participant.id)}">
      <span class="paired-thumb" aria-hidden="true">
        <img src="${escapeHtml(participant.thumbnail2d)}" alt="" loading="lazy" decoding="async">
        <img src="${escapeHtml(participant.thumbnail3d)}" alt="" loading="lazy" decoding="async">
      </span>
      <span class="tab-label">P${String(participant.number).padStart(2, "0")}</span>
    </button>`).join("");
}

function renderParticipant(id, { updateHash = true } = {}) {
  const participant = participants.find((item) => item.id === id) || participants[0];
  if (!participant) {
    detailElement.innerHTML = `<p class="noscript">No user-study data is available.</p>`;
    return;
  }
  renderTabs(participant.id);
  detailElement.innerHTML = participantMarkup(participant);
  if (updateHash) history.pushState(null, "", `#${participant.id}`);
}

tabsElement?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-participant-id]");
  if (!button) return;
  renderParticipant(button.dataset.participantId);
  button.focus();
});

tabsElement?.addEventListener("keydown", (event) => {
  const tabs = [...tabsElement.querySelectorAll("[role='tab']")];
  const index = tabs.indexOf(document.activeElement);
  if (index < 0) return;
  let nextIndex = index;
  if (event.key === "ArrowRight") nextIndex = (index + 1) % tabs.length;
  else if (event.key === "ArrowLeft") nextIndex = (index - 1 + tabs.length) % tabs.length;
  else if (event.key === "Home") nextIndex = 0;
  else if (event.key === "End") nextIndex = tabs.length - 1;
  else return;
  event.preventDefault();
  const next = tabs[nextIndex];
  renderParticipant(next.dataset.participantId);
  tabsElement.querySelector(`[data-participant-id='${next.dataset.participantId}']`)?.focus();
});

detailElement?.addEventListener("click", (event) => {
  const button = event.target.closest(".image-button");
  if (!button) return;
  const src = button.dataset.imageSrc;
  const alt = button.dataset.imageAlt || "Expanded study image";
  const caption = button.dataset.imageCaption || alt;
  if (typeof dialog?.showModal !== "function") {
    window.open(src, "_blank", "noopener");
    return;
  }
  dialogImage.src = src;
  dialogImage.alt = alt;
  dialogCaption.textContent = caption;
  dialog.showModal();
});

dialogClose?.addEventListener("click", () => dialog.close());
dialog?.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});

window.addEventListener("hashchange", () => {
  const id = location.hash.replace(/^#/, "");
  if (participants.some((item) => item.id === id)) renderParticipant(id, { updateHash: false });
});

const initialId = location.hash.replace(/^#/, "");
renderParticipant(participants.some((item) => item.id === initialId) ? initialId : participants[0]?.id, { updateHash: false });
