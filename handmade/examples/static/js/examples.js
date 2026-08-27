const examples = [
  {
    id: "school-desk",
    title: "School Desk",
    thumbnail: "static/images/school-desk/hunyuan-input.png",
    summary: "The user revised the desktop and seat geometry in VR, then assembled a final four-view condition using a corrected right-view synthesis.",
    badges: ["3D VR input", "2 geometry versions", "1 final image edit"],
    specification: {
      description: "",
      parts: [
        ["Desktop", "light gray"],
        ["Frame", "gray metal frame supports and connects the desk and seats"],
        ["Seat", "dark red, curved plastic, has a cutout in the middle"],
        ["Book basket", "thin silver metal, wire storage basket"]
      ]
    },
    branches: [
      {
        type: "vr",
        kicker: "3D input branch",
        title: "VR geometry edit",
        description: "Only distinct CSV geometry is counted as a VR edit; reruns with the same CSV are omitted.",
        versions: [
          {
            title: "VR Input v1",
            meta: "original geometry",
            model: "static/models/school-desk/vr-v1.glb",
            guide: "static/images/school-desk/vr-v1-guide.png"
          },
          {
            title: "VR Input v2",
            meta: "final geometry",
            model: "static/models/school-desk/vr-v2.glb",
            guide: "static/images/school-desk/vr-v2-guide.png"
          }
        ],
        transitions: ["Edited parts: Desktop, seat"],
        imageEdit: {
          before: "static/images/school-desk/edit-before.png",
          after: "static/images/school-desk/edit-after.png",
          instruction: "This is correct，please generate multiview based on this right view",
          note: "The edited result supplied the front view in the final composite."
        },
        reconstruction: {
          input: "static/images/school-desk/hunyuan-input.png",
          inputTitle: "Hunyuan input",
          inputMeta: "final composite",
          inputNote: "Front from the edit; left/right and back from selected alternatives",
          model: "static/models/school-desk/final.glb",
          modelTitle: "Final output"
        }
      }
    ]
  },
  {
    id: "table-1",
    title: "Table 1",
    thumbnail: "static/images/table-1/hunyuan-input.png",
    summary: "A single VR sketch established the coffee table geometry; one image edit enlarged the blue base where it rises over the tabletop on the left side.",
    badges: ["3D VR input", "No geometry edit", "1 image edit"],
    specification: {
      description: "A coffee table with abstract base",
      parts: [
        ["tabletop", "rectangular white glass top"],
        ["Base", "blue continuous base with a smooth wave-like shape."]
      ]
    },
    branches: [
      {
        type: "vr",
        kicker: "3D input branch",
        title: "Single VR geometry",
        description: "All runs reuse the same CSV geometry; view and prompt reruns are not counted as VR edits.",
        versions: [
          {
            title: "VR Input",
            meta: "single geometry version",
            model: "static/models/table-1/input.glb",
            guide: "static/images/table-1/guide.png"
          }
        ],
        transitions: [],
        imageEdit: {
          before: "static/images/table-1/edit-before.png",
          after: "static/images/table-1/edit-after.png",
          instruction: "Almost correct. On left side, the blue part over the table top is larger."
        },
        reconstruction: {
          input: "static/images/table-1/hunyuan-input.png",
          inputTitle: "Hunyuan input",
          inputMeta: "four selected views",
          inputNote: "front · left · back · right",
          model: "static/models/table-1/final.glb",
          modelTitle: "Final output"
        }
      }
    ]
  },
  {
    id: "table-2",
    title: "Table 2",
    thumbnail: "static/images/table-2/hunyuan-input.png",
    summary: "The spatial input stayed fixed while an image edit corrected the side views so the red wooden leg reached the ground.",
    badges: ["3D VR input", "No geometry edit", "1 image edit"],
    specification: {
      description: "",
      parts: [
        ["tabletop", "a round black tabletop"],
        ["wooden box", "a rectangular deep brown wooden box under the tabletop"],
        ["drawer", "a small light brown wooden drawer and a small curved handle"],
        ["pole", "a vertical dark blue metal pole supporting the tabletop"],
        ["wooden leg", "white wooden board connecting the box and ground"],
        ["wooden legs", "red wooden board connecting the pole and ground, crossing with white wooden leg and support the table."]
      ]
    },
    branches: [
      {
        type: "vr",
        kicker: "3D input branch",
        title: "Single VR geometry",
        description: "The CSV geometry did not change; the targeted correction happened in the generated multiview image.",
        versions: [
          {
            title: "VR Input",
            meta: "single geometry version",
            model: "static/models/table-2/input.glb",
            guide: "static/images/table-2/guide.png"
          }
        ],
        transitions: [],
        imageEdit: {
          before: "static/images/table-2/edit-before.png",
          after: "static/images/table-2/edit-after.png",
          instruction: "Here the front and back view is correct but in the left and right view, the red wooden leg should stick to the ground."
        },
        reconstruction: {
          input: "static/images/table-2/hunyuan-input.png",
          inputTitle: "Hunyuan input",
          inputMeta: "four selected views",
          inputNote: "front · left · back · right",
          model: "static/models/table-2/final.glb",
          modelTitle: "Final output"
        }
      }
    ]
  },
  {
    id: "table-3",
    title: "Table 3",
    thumbnail: "static/images/table-3/hunyuan-input.png",
    summary: "One generated-image revision lengthened the bamboo support while preserving the original part-labeled VR geometry.",
    badges: ["3D VR input", "No geometry edit", "1 image edit"],
    specification: {
      description: "",
      parts: [
        ["side support", "A thick light-gray vertical concrete slab supporting the right side."],
        ["top", "a thick black rectangular top"],
        ["pole support", "light brown bamboo leg supporting the tabletop, and leaves a hole on the tabletop"],
        ["branches", "irregular branches rasing from the bamboo"]
      ]
    },
    branches: [
      {
        type: "vr",
        kicker: "3D input branch",
        title: "Single VR geometry",
        description: "The authored geometry remained unchanged; only the generated appearance was revised.",
        versions: [
          {
            title: "VR Input",
            meta: "single geometry version",
            model: "static/models/table-3/input.glb",
            guide: "static/images/table-3/guide.png"
          }
        ],
        transitions: [],
        imageEdit: {
          before: "static/images/table-3/edit-before.png",
          after: "static/images/table-3/edit-after.png",
          instruction: "the bamboo support should be longer"
        },
        reconstruction: {
          input: "static/images/table-3/hunyuan-input.png",
          inputTitle: "Hunyuan input",
          inputMeta: "four selected views",
          inputNote: "front · left · back · right",
          model: "static/models/table-3/final.glb",
          modelTitle: "Final output"
        }
      }
    ]
  },
  {
    id: "chicken-desk",
    title: "Chicken Desk",
    thumbnail: "static/images/chicken-desk/hunyuan-input.png",
    summary: "Two runs reuse the exact same VR CSV. The later run updates presentation settings, but contains no geometry or image edit.",
    badges: ["3D VR input", "Same CSV across runs", "No image edit"],
    specification: {
      description: "resembles a chicken pecking at the ground",
      parts: [
        ["Table top", "a thick wooden tabletop with an irregular rounded shape, also a small dark circular spot on the surface make it like the eye of the chicken."],
        ["metal legs", "two thin black metal legs supporting one side and with chicken-feet-shape at the end of the table leg."],
        ["wooden leg", "a tapered deep brown wooden leg supporting one side and it"]
      ]
    },
    branches: [
      {
        type: "vr",
        kicker: "3D input branch",
        title: "Single VR geometry",
        description: "Folder timestamps differ, but the CSV hash is identical; this is a rerun rather than a VR edit.",
        versions: [
          {
            title: "VR Input",
            meta: "same CSV in both runs",
            model: "static/models/chicken-desk/input.glb",
            guide: "static/images/chicken-desk/guide.png"
          }
        ],
        transitions: [],
        imageEdit: null,
        reconstruction: {
          input: "static/images/chicken-desk/hunyuan-input.png",
          inputTitle: "Hunyuan input",
          inputMeta: "four selected views",
          inputNote: "front · left · back · right",
          model: "static/models/chicken-desk/final.glb",
          modelTitle: "Final output"
        }
      }
    ]
  },
  {
    id: "towel-rack",
    title: "Towel Rack",
    thumbnail: "static/images/towel-rack/2d-hunyuan-input.png",
    summary: "This case exposes two parallel authoring paths: three true VR geometry versions and a new single-drawing 2D condition with one image revision.",
    badges: ["3D + 2D inputs", "3 VR geometry versions", "1 image edit"],
    specification: {
      description: "made from a single thick, smooth, dark-wood tubular form.",
      parts: [
        ["rack part 1", "dark-brown color"],
        ["connector", "silver connector to attach the wood stick to the wall"],
        ["rack part 2", "It is the same color with rack part 1, and they are different segments of one continuous bent wooden tube. The green part and the rare vertical pasts have  distance so leave the space to hang the towel on rack 2."]
      ]
    },
    branches: [
      {
        type: "vr",
        kicker: "3D input branch",
        title: "VR geometry edit",
        description: "Three distinct CSV hashes capture two user-authored geometry edits. The latest presentation run reuses v3.",
        versions: [
          {
            title: "VR Input v1",
            meta: "8,412 points",
            model: "static/models/towel-rack/vr-v1.glb",
            guide: "static/images/towel-rack/vr-v1-guide.png"
          },
          {
            title: "VR Input v2",
            meta: "12,280 points",
            model: "static/models/towel-rack/vr-v2.glb",
            guide: "static/images/towel-rack/vr-v2-guide.png"
          },
          {
            title: "VR Input v3",
            meta: "11,968 points",
            model: "static/models/towel-rack/vr-v3.glb",
            guide: "static/images/towel-rack/vr-v3-guide.png"
          }
        ],
        transitions: [
          "Added rack part 2 · Redrew rack part 1",
          "Refined rack part 2 · Removed the lower extension"
        ],
        imageEdit: null,
        reconstruction: {
          input: "static/images/towel-rack/vr-hunyuan-input.png",
          inputTitle: "Hunyuan input",
          inputMeta: "two selected views",
          inputNote: "front + right",
          model: "static/models/towel-rack/final-vr.glb",
          modelTitle: "Final output · VR input"
        }
      },
      {
        type: "2d",
        kicker: "2D input branch",
        title: "Single-drawing condition",
        description: "A separate 2D condition starts from one front-view drawing; it is not a fourth VR geometry version.",
        versions: [
          {
            title: "2D Input",
            meta: "Front view",
            drawing: "static/images/towel-rack/2d-drawing.png"
          }
        ],
        transitions: [],
        imageEdit: {
          before: "static/images/towel-rack/2d-edit-before.png",
          after: "static/images/towel-rack/2d-edit-after.png",
          instruction: "The front and back view are correct but in the left and right view, the horizontal rack part should have distance to the back vertical part."
        },
        reconstruction: {
          input: "static/images/towel-rack/2d-hunyuan-input.png",
          inputTitle: "Hunyuan input",
          inputMeta: "corrected views",
          inputNote: "front + back",
          model: "static/models/towel-rack/final-2d.glb",
          modelTitle: "Final output · 2D input"
        }
      }
    ]
  }
];

const tabsElement = document.querySelector("#example-tabs");
const detailElement = document.querySelector("#example-detail");
const dialog = document.querySelector("#image-dialog");
const dialogImage = document.querySelector("#dialog-image");
const dialogCaption = document.querySelector("#dialog-caption");
const dialogClose = dialog?.querySelector(".dialog-close");

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function imageButton(src, alt, caption = alt) {
  return `
    <button class="image-button" type="button" data-image-src="${escapeHtml(src)}" data-image-alt="${escapeHtml(alt)}" data-image-caption="${escapeHtml(caption)}" aria-label="Expand ${escapeHtml(alt)}">
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
      rotation-per-second="12deg"
      interaction-prompt="none"
      touch-action="pan-y"
      shadow-intensity="0.25"
      exposure="1.05"
      loading="lazy">
    </model-viewer>`;
}

function versionCard(version, exampleTitle) {
  const isDrawing = Boolean(version.drawing);
  const media = isDrawing
    ? `
      <div class="version-media is-drawing">
        <div class="mini-media">
          ${imageButton(version.drawing, `${exampleTitle} user-authored 2D drawing`, `${version.title} · ${version.meta}`)}
          <span class="mini-media-label">User drawing</span>
        </div>
      </div>`
    : `
      <div class="version-media">
        <div class="mini-media">
          ${modelViewer(version.model, `${exampleTitle} ${version.title} spatial input`)}
          <span class="mini-media-label">3D input</span>
        </div>
        <div class="mini-media">
          ${imageButton(version.guide, `${exampleTitle} ${version.title} multiview guide`, `${version.title} · 2D guide`)}
          <span class="mini-media-label">2D guide</span>
        </div>
      </div>`;
  return `
    <article class="version-card ${isDrawing ? "is-drawing" : ""}">
      <div class="version-header">
        <h5>${escapeHtml(version.title)}</h5>
        <span class="version-meta">${escapeHtml(version.meta)}</span>
      </div>
      ${media}
    </article>`;
}

function connector(label = "") {
  return `
    <div class="flow-connector" aria-label="${escapeHtml(label || "Next stage")}">
      <div class="connector-inner">
        <div class="connector-arrow" aria-hidden="true"></div>
        ${label ? `<span class="connector-label">${escapeHtml(label)}</span>` : ""}
      </div>
    </div>`;
}

function versionFlow(branch, exampleTitle) {
  const count = branch.versions.length;
  const cells = [];
  branch.versions.forEach((version, index) => {
    cells.push(versionCard(version, exampleTitle));
    if (index < count - 1) {
      cells.push(connector(branch.transitions?.[index] || "Geometry revised"));
    }
  });
  return `<div class="version-flow version-count-${count}">${cells.join("")}</div>`;
}

function mediaCard({ title, meta = "", image, alt, note = "" }) {
  return `
    <article class="media-card">
      <div class="media-header">
        <h5>${escapeHtml(title)}</h5>
        ${meta ? `<span class="media-meta">${escapeHtml(meta)}</span>` : ""}
      </div>
      ${imageButton(image, alt, title)}
      ${note ? `<span class="view-note">${escapeHtml(note)}</span>` : ""}
    </article>`;
}

function editFlow(edit, exampleTitle) {
  if (!edit) {
    return `
      <div class="no-edit-card">
        <span class="no-edit-icon" aria-hidden="true">✓</span>
        <span>No image edit was recorded for this branch.</span>
      </div>`;
  }
  return `
    <div class="edit-flow">
      ${mediaCard({
        title: "Before image",
        meta: "selected candidate",
        image: edit.before,
        alt: `${exampleTitle} before the image edit`
      })}
      <article class="instruction-card">
        <div>
          <p class="card-kicker">User edit instruction</p>
          <blockquote>“${escapeHtml(edit.instruction)}”</blockquote>
          ${edit.note ? `<p class="edit-note">${escapeHtml(edit.note)}</p>` : ""}
        </div>
      </article>
      ${mediaCard({
        title: "After image",
        meta: "revised candidate",
        image: edit.after,
        alt: `${exampleTitle} after the image edit`
      })}
    </div>`;
}

function reconstructionFlow(reconstruction, exampleTitle) {
  return `
    <div class="reconstruction-flow">
      ${mediaCard({
        title: reconstruction.inputTitle || "Hunyuan input",
        meta: reconstruction.inputMeta || "selected views",
        image: reconstruction.input,
        alt: `${exampleTitle} reconstruction input`,
        note: reconstruction.inputNote || ""
      })}
      ${connector()}
      <article class="model-card">
        <div class="model-header">
          <h5>${escapeHtml(reconstruction.modelTitle || "Final output")}</h5>
          <span class="media-meta">interactive 3D</span>
        </div>
        ${modelViewer(reconstruction.model, `${exampleTitle} final reconstructed 3D model`)}
        <p class="model-help">Drag to rotate · scroll or pinch to zoom</p>
      </article>
    </div>`;
}

function branchMarkup(branch, exampleTitle, branchIndex) {
  const is2d = branch.type === "2d";
  return `
    <section class="branch-card ${is2d ? "branch-2d" : "branch-vr"}" aria-labelledby="branch-${branchIndex}-title">
      <div class="branch-title">
        <div>
          <p class="branch-kicker">${escapeHtml(branch.kicker)}</p>
          <h3 id="branch-${branchIndex}-title">${escapeHtml(branch.title)}</h3>
        </div>
        <p>${escapeHtml(branch.description)}</p>
      </div>

      <div class="subsection-heading">
        <span class="subsection-number">01</span>
        <h4>${is2d ? "Authored drawing" : "Geometry versions and guides"}</h4>
      </div>
      ${versionFlow(branch, exampleTitle)}

      <div class="subsection-heading">
        <span class="subsection-number">02</span>
        <h4>Image revision</h4>
      </div>
      ${editFlow(branch.imageEdit, exampleTitle)}

      <div class="subsection-heading">
        <span class="subsection-number">03</span>
        <h4>3D reconstruction</h4>
      </div>
      ${reconstructionFlow(branch.reconstruction, exampleTitle)}
    </section>`;
}

function specificationMarkup(specification) {
  const description = specification.description?.trim();
  return `
    <aside class="spec-card" aria-labelledby="spec-title">
      <p class="section-kicker">Latest user input</p>
      <h3 id="spec-title">Shape &amp; parts</h3>
      <p class="shape-description ${description ? "" : "is-empty"}">${description ? escapeHtml(description) : "No separate shape description was entered."}</p>
      <ul class="part-list">
        ${specification.parts.map(([name, partDescription]) => `
          <li>
            <span class="part-name">${escapeHtml(name)}</span>
            <span class="part-description">${escapeHtml(partDescription)}</span>
          </li>`).join("")}
      </ul>
    </aside>`;
}

function renderTabs(activeId) {
  tabsElement.innerHTML = examples.map((example) => `
    <button
      class="example-tab"
      id="tab-${escapeHtml(example.id)}"
      type="button"
      role="tab"
      aria-selected="${example.id === activeId}"
      aria-controls="example-detail"
      tabindex="${example.id === activeId ? "0" : "-1"}"
      data-example-id="${escapeHtml(example.id)}">
      <img class="tab-thumb" src="${escapeHtml(example.thumbnail)}" alt="" loading="lazy">
      <span class="tab-label">${escapeHtml(example.title)}</span>
    </button>`).join("");
}

function renderExample(id, { updateHash = true } = {}) {
  const example = examples.find((item) => item.id === id) || examples[0];
  renderTabs(example.id);
  detailElement.innerHTML = `
    <div class="example-intro">
      <article class="intro-card">
        <p class="example-index">Case ${String(examples.indexOf(example) + 1).padStart(2, "0")}</p>
        <h2>${escapeHtml(example.title)}</h2>
        <p class="example-summary">${escapeHtml(example.summary)}</p>
        <div class="badges">
          ${example.badges.map((badge) => `<span class="badge">${escapeHtml(badge)}</span>`).join("")}
        </div>
      </article>
      ${specificationMarkup(example.specification)}
    </div>
    ${example.branches.map((branch, index) => branchMarkup(branch, example.title, index)).join("")}`;

  if (updateHash) {
    history.replaceState(null, "", `#${example.id}`);
  }
  document.title = `${example.title} · HandMade Examples`;
}

tabsElement.addEventListener("click", (event) => {
  const tab = event.target.closest("[data-example-id]");
  if (!tab) return;
  renderExample(tab.dataset.exampleId);
});

tabsElement.addEventListener("keydown", (event) => {
  if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
  const tabs = Array.from(tabsElement.querySelectorAll("[role='tab']"));
  const currentIndex = tabs.indexOf(document.activeElement);
  if (currentIndex < 0) return;
  event.preventDefault();
  let nextIndex = currentIndex;
  if (event.key === "ArrowLeft") nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
  if (event.key === "ArrowRight") nextIndex = (currentIndex + 1) % tabs.length;
  if (event.key === "Home") nextIndex = 0;
  if (event.key === "End") nextIndex = tabs.length - 1;
  tabs[nextIndex].focus();
  renderExample(tabs[nextIndex].dataset.exampleId);
});

detailElement.addEventListener("click", (event) => {
  const button = event.target.closest("[data-image-src]");
  if (!button) return;
  const src = button.dataset.imageSrc;
  const alt = button.dataset.imageAlt || "Expanded example image";
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

const initialId = location.hash.replace(/^#/, "");
renderExample(examples.some((item) => item.id === initialId) ? initialId : examples[0].id, { updateHash: false });
