const examples = [
  {
    id: "school-desk",
    title: "School Desk",
    referenceImage: "static/images/school-desk.png",
    summary: "School Desk combines two VR geometry versions with a separate two-drawing condition. The 2D path recenters the seat, then explicitly selects the edited front and left views for reconstruction.",
    badges: ["3D + 2D inputs", "2 VR geometry versions", "2D image + view edit"],
    specification: {
      description: "",
      parts: [
        ["Desktop", "light gray"],
        ["book basket", "thin silver metal, wire storage basket"],
        ["frame", "gray metal frame supports and connects the desk and seats."],
        ["seat", "dark red, curved plastic, has a cutout in the middle"]
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
          note: "This edit remains in the history; the preferred final below comes from a separate reconstruction.",
          references: [
            { src: "static/images/school-desk/vr-edit-right-reference.png", label: "level 1(2) · Right view" }
          ]
        },
        reconstruction: {
          input: "static/images/school-desk/hunyuan-input.png",
          inputTitle: "Hunyuan input",
          inputMeta: "preferred 3D run",
          inputNote: "front only · selected for the preferred final result",
          model: "static/models/school-desk/final.glb",
          modelTitle: "Preferred final output"
        }
      },
      {
        type: "2d",
        kicker: "2D input branch",
        title: "Two-drawing condition",
        description: "A separate run starts from left-side and front-left perspective drawings, then revises the generated seat placement before view composition.",
        versions: [
          {
            title: "2D Input",
            meta: "2 authored views",
            drawings: [
              { src: "static/images/school-desk/2d-drawing-left.png", label: "Left-side view" },
              { src: "static/images/school-desk/2d-drawing-perspective.png", label: "Front-left perspective" }
            ]
          }
        ],
        transitions: [],
        imageEdit: {
          before: "static/images/school-desk/2d-edit-before.png",
          after: "static/images/school-desk/2d-edit-after.png",
          instruction: "The seat should more be in the center",
          note: "The revised candidate was then used for the final view composition.",
          references: [
            { src: "static/images/school-desk/2d-drawing-left.png", label: "Left-side drawing" },
            { src: "static/images/school-desk/2d-drawing-perspective.png", label: "Front-left drawing" }
          ]
        },
        viewEdits: [
          {
            kind: "selection",
            before: "static/images/school-desk/2d-edit-after.png",
            after: "static/images/school-desk/2d-hunyuan-input.png",
            beforeTitle: "Edited candidate",
            beforeMeta: "level 1 edit",
            afterTitle: "Assembled input",
            afterMeta: "2 selected views",
            instruction: "Selected front + left from the edited candidate.",
            note: "The final view mapping—not the last browsed thumbnail—determines the actual Hunyuan input.",
            references: [
              { src: "static/images/school-desk/2d-selected-front.png", label: "Front" },
              { src: "static/images/school-desk/2d-selected-left.png", label: "Left" }
            ]
          }
        ],
        reconstruction: {
          input: "static/images/school-desk/2d-hunyuan-input.png",
          inputTitle: "Hunyuan input",
          inputMeta: "edited view selection",
          inputNote: "front + left",
          model: "static/models/school-desk/final-2d.glb",
          modelTitle: "Final output · 2D input"
        }
      }
    ]
  },
  {
    id: "table-1",
    title: "Table 1",
    referenceImage: "static/images/table1.jpeg",
    summary: "The coffee table appears in parallel VR and 2D paths. The 2D run alternates between one- and two-drawing conditions, then maps a selected candidate's front and right views into the final reconstruction input.",
    badges: ["3D + 2D inputs", "No VR geometry edit", "2D input + view edits"],
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
      },
      {
        type: "2d",
        kicker: "2D input branch",
        title: "Drawing-set revisions",
        description: "Four saved input revisions alternate between a single perspective drawing and the same two-view set. The final revision restores the authored Front view.",
        versions: [
          {
            title: "2D Input v1",
            meta: "perspective only",
            drawings: [
              { src: "static/images/table-1/2d-drawing-perspective.png", label: "Front-left perspective" }
            ]
          },
          {
            title: "2D Input v2",
            meta: "2 authored views",
            drawings: [
              { src: "static/images/table-1/2d-drawing-perspective.png", label: "Front-left perspective" },
              { src: "static/images/table-1/2d-drawing-front.png", label: "Front view" }
            ]
          },
          {
            title: "2D Input v3",
            meta: "perspective only",
            drawings: [
              { src: "static/images/table-1/2d-drawing-perspective.png", label: "Front-left perspective" }
            ]
          },
          {
            title: "2D Input v4",
            meta: "final · 2 views",
            drawings: [
              { src: "static/images/table-1/2d-drawing-perspective.png", label: "Front-left perspective" },
              { src: "static/images/table-1/2d-drawing-front.png", label: "Front view" }
            ]
          }
        ],
        transitions: [
          "Added Front view",
          "Removed Front view",
          "Re-added the same Front view"
        ],
        imageEdit: null,
        viewEdits: [
          {
            kind: "selection",
            before: "static/images/table-1/2d-selected-candidate.png",
            after: "static/images/table-1/2d-hunyuan-input.png",
            beforeTitle: "Selected candidate",
            beforeMeta: "Description-first #2",
            afterTitle: "Assembled input",
            afterMeta: "2 selected views",
            instruction: "Selected front as front and remapped the candidate's right view as back.",
            note: "Only the composed front + back views were sent to Hunyuan.",
            references: [
              { src: "static/images/table-1/2d-selected-front.png", label: "Front" },
              { src: "static/images/table-1/2d-selected-back.png", label: "Back · from right" }
            ]
          }
        ],
        reconstruction: {
          input: "static/images/table-1/2d-hunyuan-input.png",
          inputTitle: "Hunyuan input",
          inputMeta: "final drawing revision",
          inputNote: "front + back (sourced from right)",
          model: "static/models/table-1/final-2d.glb",
          modelTitle: "Final output · 2D input"
        }
      }
    ]
  },
  {
    id: "table-2",
    title: "Table 2",
    referenceImage: "static/images/table2.jpeg",
    summary: "The VR geometry stays fixed, while the 2D path replaces one authored perspective drawing, performs a text-guided correction, and finally swaps the selected back view while preserving the front.",
    badges: ["3D + 2D inputs", "No VR geometry edit", "2D drawing + image + view edits"],
    specification: {
      description: "",
      parts: [
        ["tabletop", "a round black tabletop"],
        ["wooden box", "a rectangular deep brown wooden box under the tabletop"],
        ["drawer", "a small light brown wooden drawer and a small black curved handle"],
        ["wooden leg 1", "white wooden board connecting the box and ground"],
        ["pole", "a vertical dark blue metal pole supporting the tabletop"],
        ["wooden leg 2", "red wooden board connecting the pole and ground, crossing with white wooden leg and support the table."]
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
          instruction: "Here the front and back view is correct but in the left and right view, the red wooden leg should stick to the ground.",
          note: "This later edit remains in the history; the preferred final below is the earlier front + back reconstruction."
        },
        reconstruction: {
          input: "static/images/table-2/hunyuan-input.png",
          inputTitle: "Hunyuan input",
          inputMeta: "preferred 3D run",
          inputNote: "front + back · pre-edit candidate",
          model: "static/models/table-2/final.glb",
          modelTitle: "Preferred final output"
        }
      },
      {
        type: "2d",
        kicker: "2D input branch",
        title: "Revised two-drawing condition",
        description: "The Front drawing is retained between revisions; the front-left perspective drawing is replaced before multiview synthesis.",
        versions: [
          {
            title: "2D Input v1",
            meta: "2 authored views",
            drawings: [
              { src: "static/images/table-2/2d-v1-perspective.png", label: "Elevated front-left" },
              { src: "static/images/table-2/2d-drawing-front.png", label: "Front view" }
            ]
          },
          {
            title: "2D Input v2",
            meta: "final · 2 views",
            drawings: [
              { src: "static/images/table-2/2d-drawing-front.png", label: "Front view · retained" },
              { src: "static/images/table-2/2d-v2-perspective.png", label: "Front-left perspective · revised" }
            ]
          }
        ],
        transitions: ["Retained Front view · Replaced perspective drawing"],
        imageEdit: {
          before: "static/images/table-2/2d-edit-before.png",
          after: "static/images/table-2/2d-edit-after.png",
          instruction: "The white wooden leg has twoside to go through the white one, the front view is correct.",
          note: "The edit used the revised drawing and the Drawing-first #1 Front view as references.",
          references: [
            { src: "static/images/table-2/2d-v2-perspective.png", label: "Revised perspective drawing" },
            { src: "static/images/table-2/2d-edit-ref-front.png", label: "Drawing-first #1 · Front" }
          ]
        },
        viewEdits: [
          {
            kind: "selection",
            before: "static/images/table-2/2d-selection-v1.png",
            after: "static/images/table-2/2d-hunyuan-input.png",
            beforeTitle: "View selection v1",
            beforeMeta: "front + back",
            afterTitle: "View selection v2",
            afterMeta: "final · front + back",
            instruction: "Kept the same selected front and replaced only the back with the edited candidate.",
            note: "Final front: Drawing-first #2 · Final back: Drawing-first · Edit",
            references: [
              { src: "static/images/table-2/2d-selected-front.png", label: "Front · retained" },
              { src: "static/images/table-2/2d-previous-back.png", label: "Previous back" },
              { src: "static/images/table-2/2d-selected-back.png", label: "Back · replaced" }
            ]
          }
        ],
        reconstruction: {
          input: "static/images/table-2/2d-hunyuan-input.png",
          inputTitle: "Hunyuan input",
          inputMeta: "final view selection",
          inputNote: "front + edited back",
          model: "static/models/table-2/final-2d.glb",
          modelTitle: "Final output · 2D input"
        }
      }
    ]
  },
  {
    id: "table-3",
    title: "Table 3",
    referenceImage: "static/images/table3.jpeg",
    summary: "The unchanged VR geometry receives one appearance revision. A separate three-drawing path reviews a square-support edit, then completes a front + back + right reconstruction assembled from two other candidates.",
    badges: ["3D + 2D inputs", "No VR geometry edit", "Updated 2D final model"],
    specification: {
      description: "A thick light-gray vertical concrete slab supporting the right side.",
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
      },
      {
        type: "2d",
        kicker: "2D input branch",
        title: "Three-drawing condition",
        description: "Front, right-side, and front-right perspective drawings guide the 2D path. The latest reconstruction replaces the earlier front and back, moves the prior left image to the right slot, and omits left.",
        versions: [
          {
            title: "2D Input",
            meta: "3 authored views",
            drawings: [
              { src: "static/images/table-3/2d-drawing-front.png", label: "Front view" },
              { src: "static/images/table-3/2d-drawing-right.png", label: "Right-side view" },
              { src: "static/images/table-3/2d-drawing-perspective.png", label: "Front-right perspective" }
            ]
          }
        ],
        transitions: [],
        imageEdit: {
          before: "static/images/table-3/2d-edit-before.png",
          after: "static/images/table-3/2d-edit-after.png",
          instruction: "The side gray concrete support should be square.",
          note: "This adjusted candidate was reviewed but was not used in the final Hunyuan composition.",
          references: [
            { src: "static/images/table-3/2d-drawing-front.png", label: "Front drawing" },
            { src: "static/images/table-3/2d-drawing-right.png", label: "Right-side drawing" },
            { src: "static/images/table-3/2d-drawing-perspective.png", label: "Front-right drawing" }
          ]
        },
        viewEdits: [
          {
            kind: "selection",
            before: "static/images/table-3/2d-front-back-source.png",
            after: "static/images/table-3/2d-left-source.png",
            beforeTitle: "Front + back source",
            beforeMeta: "Description-first #1",
            afterTitle: "Right source",
            afterMeta: "Drawing-first #2",
            instruction: "Combined front + back from one candidate with its right view sourced from another candidate's left view.",
            note: "The latest final omits left and uses front + back + right.",
            references: [
              { src: "static/images/table-3/2d-selected-front.png", label: "Front" },
              { src: "static/images/table-3/2d-selected-back.png", label: "Back" },
              { src: "static/images/table-3/2d-selected-right.png", label: "Right · from left" }
            ]
          }
        ],
        reconstruction: {
          input: "static/images/table-3/2d-hunyuan-input.png",
          inputTitle: "Hunyuan input",
          inputMeta: "latest view selection",
          inputNote: "front + back + right (right sourced from left)",
          model: "static/models/table-3/final-2d.glb",
          modelTitle: "Final output · 2D input"
        }
      }
    ]
  },
  {
    id: "chicken-desk",
    title: "Chicken Desk",
    referenceImage: "static/images/chicken-desk.png",
    summary: "The two VR runs reuse one CSV, while the independent two-drawing path performs a real selection edit: every reconstruction view—including front—is replaced with a different multiview candidate.",
    badges: ["3D + 2D inputs", "Same VR CSV across runs", "2D front selection edit"],
    specification: {
      description: "resembles a chicken pecking at the ground",
      parts: [
        ["Table top", "a thick wooden tabletop with an irregular rounded shape, also a small dark circular spot on the surface make it like the eye of the chicken"],
        ["wooden leg", "a tapered deep brown wooden leg supporting one side"],
        ["metal legs", "two thin black metal legs supporting one side and with chicken-feet-shape at the end of the table leg"]
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
      },
      {
        type: "2d",
        kicker: "2D input branch",
        title: "Two-drawing condition",
        description: "An elevated front drawing and a left-side drawing generate two successive Hunyuan inputs. No text prompt edit is recorded; the meaningful edit is the candidate/view replacement.",
        versions: [
          {
            title: "2D Input",
            meta: "2 authored views",
            drawings: [
              { src: "static/images/chicken-desk/2d-drawing-front.png", label: "Elevated front view" },
              { src: "static/images/chicken-desk/2d-drawing-left.png", label: "Left-side view" }
            ]
          }
        ],
        transitions: [],
        imageEdit: null,
        viewEdits: [
          {
            kind: "selection",
            before: "static/images/chicken-desk/2d-selection-before.png",
            after: "static/images/chicken-desk/2d-selection-after.png",
            beforeTitle: "View selection v1",
            beforeMeta: "Description-first #2",
            afterTitle: "View selection v2",
            afterMeta: "Drawing-first #1 · final",
            instruction: "Replaced all four selected views, including front, with a different candidate.",
            note: "front · left · back · right all changed between the two reconstruction attempts.",
            references: [
              { src: "static/images/chicken-desk/2d-previous-front.png", label: "Previous front" },
              { src: "static/images/chicken-desk/2d-selected-front.png", label: "Replacement front" }
            ]
          }
        ],
        reconstruction: {
          input: "static/images/chicken-desk/2d-hunyuan-input.png",
          inputTitle: "Hunyuan input",
          inputMeta: "final candidate selection",
          inputNote: "front · left · back · right",
          model: "static/models/chicken-desk/final-2d.glb",
          modelTitle: "Final output · 2D input"
        }
      }
    ]
  },
  {
    id: "towel-rack",
    title: "Towel Rack",
    referenceImage: "static/images/towelRack1.jpeg",
    summary: "This case exposes two parallel authoring paths: two retained VR geometry versions and a single-drawing 2D condition with an image correction followed by explicit front + back selection.",
    badges: ["3D + 2D inputs", "2 retained VR versions", "2D image + view edit"],
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
        description: "The accidental 12,280-point intermediate recording is omitted. The later 11,968-point geometry is shown directly as v2.",
        versions: [
          {
            title: "VR Input v1",
            meta: "8,412 points",
            model: "static/models/towel-rack/vr-v1.glb",
            guide: "static/images/towel-rack/vr-v1-guide.png"
          },
          {
            title: "VR Input v2",
            meta: "11,968 points",
            model: "static/models/towel-rack/vr-v3.glb",
            guide: "static/images/towel-rack/vr-v3-guide.png"
          }
        ],
        transitions: ["Redrew rack part 1 · Added the finalized rack part 2"],
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
        description: "A separate 2D condition starts from one front-view drawing; it is not a third VR geometry version.",
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
          instruction: "The front and back view are correct but in the left and right view, the horizontal rack part should have distance to the back vertical part.",
          references: [
            { src: "static/images/towel-rack/2d-drawing.png", label: "Original front drawing" }
          ]
        },
        viewEdits: [
          {
            kind: "selection",
            before: "static/images/towel-rack/2d-edit-before.png",
            after: "static/images/towel-rack/2d-hunyuan-input.png",
            beforeTitle: "Selected candidate",
            beforeMeta: "Description-first #2",
            afterTitle: "Assembled input",
            afterMeta: "2 selected views",
            instruction: "Selected front + back; both were retained from before the left/right edit.",
            note: "The reviewed edit above was not used in the final reconstruction input.",
            references: [
              { src: "static/images/towel-rack/2d-selected-front.png", label: "Front" },
              { src: "static/images/towel-rack/2d-selected-back.png", label: "Back" }
            ]
          }
        ],
        reconstruction: {
          input: "static/images/towel-rack/2d-hunyuan-input.png",
          inputTitle: "Hunyuan input",
          inputMeta: "recorded view selection",
          inputNote: "front + back · Description-first #2",
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
  const drawings = version.drawings || (version.drawing
    ? [{ src: version.drawing, label: "User drawing" }]
    : []);
  const isDrawing = drawings.length > 0;
  const media = isDrawing
    ? `
      <div class="version-media is-drawing drawing-count-${drawings.length}">
        ${drawings.map((drawing) => `
          <div class="mini-media">
            ${imageButton(drawing.src, `${exampleTitle} ${drawing.label}`, `${version.title} · ${drawing.label}`)}
            <span class="mini-media-label">${escapeHtml(drawing.label)}</span>
          </div>`).join("")}
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
    <article class="version-card ${isDrawing ? `is-drawing drawing-count-${drawings.length}` : ""}">
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
  const isSelection = edit.kind === "selection";
  const beforeTitle = edit.beforeTitle || "Before image";
  const beforeMeta = edit.beforeMeta || "selected candidate";
  const afterTitle = edit.afterTitle || "After image";
  const afterMeta = edit.afterMeta || "revised candidate";
  const references = edit.references || [];
  const referenceLabel = edit.referenceLabel || (isSelection ? "Final selected views" : "Edit references");
  const referenceGrid = references.length
    ? `
          <div class="edit-references">
            <p class="edit-reference-heading">${escapeHtml(referenceLabel)}</p>
            <div class="edit-reference-grid reference-count-${references.length}">
              ${references.map((reference) => `
                <div class="edit-reference">
                  ${imageButton(
                    reference.src,
                    `${exampleTitle} ${reference.label}`,
                    `${referenceLabel} · ${reference.label}`
                  )}
                  <span class="edit-reference-label">${escapeHtml(reference.label)}</span>
                </div>`).join("")}
            </div>
          </div>`
    : "";
  return `
    <div class="edit-flow ${isSelection ? "is-selection" : "is-instruction"}">
      ${mediaCard({
        title: beforeTitle,
        meta: beforeMeta,
        image: edit.before,
        alt: `${exampleTitle} ${beforeTitle}`
      })}
      <article class="instruction-card">
        <div>
          <p class="card-kicker">${isSelection ? "View selection edit" : "User edit instruction"}</p>
          ${isSelection
            ? `<p class="selection-copy">${escapeHtml(edit.instruction)}</p>`
            : `<blockquote>“${escapeHtml(edit.instruction)}”</blockquote>`}
          ${edit.note ? `<p class="edit-note">${escapeHtml(edit.note)}</p>` : ""}
          ${referenceGrid}
        </div>
      </article>
      ${mediaCard({
        title: afterTitle,
        meta: afterMeta,
        image: edit.after,
        alt: `${exampleTitle} ${afterTitle}`
      })}
    </div>`;
}

function revisionFlows(branch, exampleTitle) {
  const edits = [
    ...(branch.imageEdit ? [branch.imageEdit] : []),
    ...(branch.viewEdits || [])
  ];
  if (!edits.length) {
    return `
      <div class="no-edit-card">
        <span class="no-edit-icon" aria-hidden="true">✓</span>
        <span>No prompt-based or selected-view edit was recorded for this branch.</span>
      </div>`;
  }
  return `<div class="revision-stack">${edits.map((edit) => editFlow(edit, exampleTitle)).join("")}</div>`;
}

function reconstructionFlow(reconstruction, exampleTitle) {
  const output = reconstruction.model
    ? `
      <article class="model-card">
        <div class="model-header">
          <h5>${escapeHtml(reconstruction.modelTitle || "Final output")}</h5>
          <span class="media-meta">interactive 3D</span>
        </div>
        ${modelViewer(reconstruction.model, `${exampleTitle} final reconstructed 3D model`)}
        <p class="model-help">Drag to rotate · scroll or pinch to zoom</p>
      </article>`
    : `
      <article class="missing-output-card">
        <span class="missing-output-icon" aria-hidden="true">—</span>
        <div>
          <h5>${escapeHtml(reconstruction.modelTitle || "Final output unavailable")}</h5>
          <p>${escapeHtml(reconstruction.modelNote || "No completed model asset was recorded for this run.")}</p>
        </div>
      </article>`;
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
      ${output}
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
        <h4>Image &amp; view revisions</h4>
      </div>
      ${revisionFlows(branch, exampleTitle)}

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

function referenceMarkup(example) {
  return `
    <figure class="reference-card">
      <figcaption>
        <span class="reference-kicker">Reference image</span>
        <span class="reference-label">Original inspiration</span>
      </figcaption>
      ${imageButton(
        example.referenceImage,
        `${example.title} reference image`,
        `${example.title} · Reference image`
      )}
    </figure>`;
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
      <img class="tab-thumb" src="${escapeHtml(example.referenceImage)}" alt="" loading="lazy">
      <span class="tab-label">${escapeHtml(example.title)}</span>
    </button>`).join("");
}

function renderExample(id, { updateHash = true } = {}) {
  const example = examples.find((item) => item.id === id) || examples[0];
  renderTabs(example.id);
  detailElement.innerHTML = `
    <div class="example-intro">
      <article class="intro-card">
        <div class="intro-copy">
          <p class="example-index">Case ${String(examples.indexOf(example) + 1).padStart(2, "0")}</p>
          <h2>${escapeHtml(example.title)}</h2>
          <p class="example-summary">${escapeHtml(example.summary)}</p>
          <div class="badges">
            ${example.badges.map((badge) => `<span class="badge">${escapeHtml(badge)}</span>`).join("")}
          </div>
        </div>
        ${referenceMarkup(example)}
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
