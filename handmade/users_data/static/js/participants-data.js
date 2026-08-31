window.USER_STUDY_PARTICIPANTS = [
  {
    "id": "participant-01",
    "number": 1,
    "label": "Participant 01",
    "referenceImage": "static/assets/reference-school-chair.png",
    "note": "The participant-supplied 2D metadata omits the desk part that appears in the paired 3D metadata.",
    "methods": [
      {
        "type": "2d",
        "title": "2D drawing workflow",
        "specification": {
          "name": "School Studying Chair with Folding Desk",
          "description": "",
          "parts": [
            {
              "name": "chair",
              "description": "plastic sitting chair",
              "color": "#457cf6",
              "colorName": ""
            },
            {
              "name": "leg",
              "description": "steel color metal chair legs",
              "color": "#535252",
              "colorName": ""
            },
            {
              "name": "Book Basket",
              "description": "siilver steel color under chair basket to hold books",
              "color": "#d0d0d0",
              "colorName": ""
            },
            {
              "name": "frame",
              "description": "desktop supporting frames",
              "color": "#000000",
              "colorName": ""
            }
          ]
        },
        "input": {
          "kind": "2d",
          "drawings": [
            {
              "image": "static/assets/p01/2d/input/drawing-1.png",
              "view": "Left-side view"
            },
            {
              "image": "static/assets/p01/2d/input/drawing-2.png",
              "view": "Front view"
            }
          ]
        },
        "metrics": {
          "generationRounds": 1,
          "candidateCount": 6,
          "imageEdits": 0,
          "frontEdits": 0,
          "compositions": 0,
          "reconstructions": 1,
          "postFinalGenerations": 0
        },
        "edits": [],
        "reconstruction": {
          "attempts": [
            {
              "label": "Hunyuan input",
              "image": "static/assets/p01/2d/reconstruction/attempt-1.png",
              "viewsUsed": [
                "front",
                "left",
                "back",
                "right"
              ],
              "selection": {
                "front": {
                  "sourceView": "front",
                  "candidate": "Trial 2 · Candidate 1",
                  "candidateKey": "trial2__1.png"
                },
                "left": {
                  "sourceView": "left",
                  "candidate": "Trial 2 · Candidate 1",
                  "candidateKey": "trial2__1.png"
                },
                "back": {
                  "sourceView": "back",
                  "candidate": "Trial 2 · Candidate 1",
                  "candidateKey": "trial2__1.png"
                },
                "right": {
                  "sourceView": "right",
                  "candidate": "Trial 2 · Candidate 1",
                  "candidateKey": "trial2__1.png"
                }
              },
              "changes": []
            }
          ],
          "finalModel": "static/assets/p01/2d/reconstruction/final.glb",
          "finalInput": "static/assets/p01/2d/reconstruction/attempt-1.png",
          "finalViews": {
            "front": "static/assets/p01/2d/reconstruction/views/front.png",
            "left": "static/assets/p01/2d/reconstruction/views/left.png",
            "back": "static/assets/p01/2d/reconstruction/views/back.png",
            "right": "static/assets/p01/2d/reconstruction/views/right.png"
          },
          "viewsUsed": [
            "front",
            "left",
            "back",
            "right"
          ],
          "finalSelection": {
            "front": {
              "sourceView": "front",
              "candidate": "Trial 2 · Candidate 1",
              "candidateKey": "trial2__1.png"
            },
            "left": {
              "sourceView": "left",
              "candidate": "Trial 2 · Candidate 1",
              "candidateKey": "trial2__1.png"
            },
            "back": {
              "sourceView": "back",
              "candidate": "Trial 2 · Candidate 1",
              "candidateKey": "trial2__1.png"
            },
            "right": {
              "sourceView": "right",
              "candidate": "Trial 2 · Candidate 1",
              "candidateKey": "trial2__1.png"
            }
          }
        }
      },
      {
        "type": "3d",
        "title": "3D spatial workflow",
        "specification": {
          "name": "School Studying Chair with Folding Desk",
          "description": "",
          "parts": [
            {
              "name": "Book Basket",
              "description": "siilver steel color under chair basket to hold books",
              "color": "#6619e0",
              "colorName": "violet"
            },
            {
              "name": "desk",
              "description": "wooden folding desktop",
              "color": "#b78900",
              "colorName": "gold"
            },
            {
              "name": "chair",
              "description": "plastic sitting chair",
              "color": "#0072d1",
              "colorName": "dark cyan"
            },
            {
              "name": "frame",
              "description": "desktop supporting frames",
              "color": "#111966",
              "colorName": "navy"
            },
            {
              "name": "leg",
              "description": "steel color metal chair legs",
              "color": "#8c8c8c",
              "colorName": "silver"
            }
          ]
        },
        "input": {
          "kind": "3d",
          "model": "static/assets/p01/3d/input/strokes.glb",
          "orientations": [
            {
              "label": "Initial orientation",
              "image": "static/assets/p01/3d/input/orientation-1.png",
              "isFinal": false
            },
            {
              "label": "Front yaw 0.3°",
              "image": "static/assets/p01/3d/input/orientation-2.png",
              "isFinal": false
            },
            {
              "label": "Front yaw 14.5°",
              "image": "static/assets/p01/3d/input/orientation-3.png",
              "isFinal": false
            },
            {
              "label": "Front yaw 101.2°",
              "image": "static/assets/p01/3d/input/orientation-4.png",
              "isFinal": true
            }
          ],
          "frontEdits": [
            0.3,
            14.5,
            101.2
          ],
          "geometryVersions": 1
        },
        "metrics": {
          "generationRounds": 1,
          "candidateCount": 6,
          "imageEdits": 0,
          "frontEdits": 3,
          "compositions": 0,
          "reconstructions": 1,
          "postFinalGenerations": 0
        },
        "edits": [],
        "reconstruction": {
          "attempts": [
            {
              "label": "Hunyuan input",
              "image": "static/assets/p01/3d/reconstruction/attempt-1.png",
              "viewsUsed": [
                "front",
                "left",
                "back",
                "right"
              ],
              "selection": {
                "front": {
                  "sourceView": "front",
                  "candidate": "Trial 1 · Candidate 1",
                  "candidateKey": "trial1__1.png"
                },
                "left": {
                  "sourceView": "left",
                  "candidate": "Trial 1 · Candidate 1",
                  "candidateKey": "trial1__1.png"
                },
                "back": {
                  "sourceView": "back",
                  "candidate": "Trial 1 · Candidate 1",
                  "candidateKey": "trial1__1.png"
                },
                "right": {
                  "sourceView": "right",
                  "candidate": "Trial 1 · Candidate 1",
                  "candidateKey": "trial1__1.png"
                }
              },
              "changes": []
            }
          ],
          "finalModel": "static/assets/p01/3d/reconstruction/final.glb",
          "finalInput": "static/assets/p01/3d/reconstruction/attempt-1.png",
          "finalViews": {
            "front": "static/assets/p01/3d/reconstruction/views/front.png",
            "left": "static/assets/p01/3d/reconstruction/views/left.png",
            "back": "static/assets/p01/3d/reconstruction/views/back.png",
            "right": "static/assets/p01/3d/reconstruction/views/right.png"
          },
          "viewsUsed": [
            "front",
            "left",
            "back",
            "right"
          ],
          "finalSelection": {
            "front": {
              "sourceView": "front",
              "candidate": "Trial 1 · Candidate 1",
              "candidateKey": "trial1__1.png"
            },
            "left": {
              "sourceView": "left",
              "candidate": "Trial 1 · Candidate 1",
              "candidateKey": "trial1__1.png"
            },
            "back": {
              "sourceView": "back",
              "candidate": "Trial 1 · Candidate 1",
              "candidateKey": "trial1__1.png"
            },
            "right": {
              "sourceView": "right",
              "candidate": "Trial 1 · Candidate 1",
              "candidateKey": "trial1__1.png"
            }
          }
        }
      }
    ],
    "thumbnail2d": "static/assets/p01/2d/reconstruction/attempt-1.png",
    "thumbnail3d": "static/assets/p01/3d/reconstruction/attempt-1.png"
  },
  {
    "id": "participant-02",
    "number": 2,
    "label": "Participant 02",
    "referenceImage": "static/assets/reference-school-chair.png",
    "note": "",
    "methods": [
      {
        "type": "2d",
        "title": "2D drawing workflow",
        "specification": {
          "name": "school chair",
          "description": "this is a school chair with a table top and basket underneath",
          "parts": [
            {
              "name": "chair back",
              "description": "Blue plastic chair back with two cutouts in the middle",
              "color": "#457cf7",
              "colorName": ""
            },
            {
              "name": "chair legs",
              "description": "4 silver stainless desk legs",
              "color": "#636363",
              "colorName": ""
            },
            {
              "name": "basket",
              "description": "silver stainless basket underneath the chair",
              "color": "#d2d3d3",
              "colorName": ""
            },
            {
              "name": "table top",
              "description": "table top in wood color, connected to the chair back by stainless rod",
              "color": "#e49c40",
              "colorName": ""
            }
          ]
        },
        "input": {
          "kind": "2d",
          "drawings": [
            {
              "image": "static/assets/p02/2d/input/drawing-1.png",
              "view": "Perspective view from front left"
            }
          ]
        },
        "metrics": {
          "generationRounds": 2,
          "candidateCount": 12,
          "imageEdits": 1,
          "frontEdits": 0,
          "compositions": 1,
          "reconstructions": 2,
          "postFinalGenerations": 0
        },
        "edits": [
          {
            "label": "Image edit 1",
            "instruction": "table top should have the same width as the chair back",
            "before": "static/assets/p02/2d/edits/edit-1-before.png",
            "after": "static/assets/p02/2d/edits/edit-1-after.png",
            "references": [
              {
                "image": "static/assets/p02/2d/edits/edit-1-reference-1.png",
                "label": "Reference 1"
              }
            ],
            "usedViews": []
          }
        ],
        "reconstruction": {
          "attempts": [
            {
              "label": "Hunyuan input v1",
              "image": "static/assets/p02/2d/reconstruction/attempt-1.png",
              "viewsUsed": [
                "front",
                "left",
                "back",
                "right"
              ],
              "selection": {
                "front": {
                  "sourceView": "front",
                  "candidate": "Trial 1 · Candidate 1",
                  "candidateKey": "trial1__1.png"
                },
                "left": {
                  "sourceView": "left",
                  "candidate": "Trial 1 · Candidate 1",
                  "candidateKey": "trial1__1.png"
                },
                "back": {
                  "sourceView": "back",
                  "candidate": "Trial 1 · Candidate 1",
                  "candidateKey": "trial1__1.png"
                },
                "right": {
                  "sourceView": "right",
                  "candidate": "Trial 1 · Candidate 1",
                  "candidateKey": "trial1__1.png"
                }
              },
              "changes": []
            },
            {
              "label": "Hunyuan input v2",
              "image": "static/assets/p02/2d/reconstruction/attempt-2.png",
              "viewsUsed": [
                "front",
                "left",
                "back",
                "right"
              ],
              "selection": {
                "front": {
                  "sourceView": "front",
                  "candidate": "Trial 1 · Candidate 2",
                  "candidateKey": "trial1__2.png"
                },
                "left": {
                  "sourceView": "left",
                  "candidate": "Trial 1 · Candidate 1",
                  "candidateKey": "trial1__1.png"
                },
                "back": {
                  "sourceView": "back",
                  "candidate": "Trial 1 · Candidate 1",
                  "candidateKey": "trial1__1.png"
                },
                "right": {
                  "sourceView": "right",
                  "candidate": "Trial 1 · Candidate 1",
                  "candidateKey": "trial1__1.png"
                }
              },
              "changes": [
                {
                  "view": "front",
                  "kind": "changed"
                }
              ]
            }
          ],
          "finalModel": "static/assets/p02/2d/reconstruction/final.glb",
          "finalInput": "static/assets/p02/2d/reconstruction/attempt-2.png",
          "finalViews": {
            "front": "static/assets/p02/2d/reconstruction/views/front.png",
            "left": "static/assets/p02/2d/reconstruction/views/left.png",
            "back": "static/assets/p02/2d/reconstruction/views/back.png",
            "right": "static/assets/p02/2d/reconstruction/views/right.png"
          },
          "viewsUsed": [
            "front",
            "left",
            "back",
            "right"
          ],
          "finalSelection": {
            "front": {
              "sourceView": "front",
              "candidate": "Trial 1 · Candidate 2",
              "candidateKey": "trial1__2.png"
            },
            "left": {
              "sourceView": "left",
              "candidate": "Trial 1 · Candidate 1",
              "candidateKey": "trial1__1.png"
            },
            "back": {
              "sourceView": "back",
              "candidate": "Trial 1 · Candidate 1",
              "candidateKey": "trial1__1.png"
            },
            "right": {
              "sourceView": "right",
              "candidate": "Trial 1 · Candidate 1",
              "candidateKey": "trial1__1.png"
            }
          }
        }
      },
      {
        "type": "3d",
        "title": "3D spatial workflow",
        "specification": {
          "name": "school chair",
          "description": "this is a school chair with a table top and basket underneath",
          "parts": [
            {
              "name": "chair legs",
              "description": "4 silver stainless desk legs",
              "color": "#ff4c38",
              "colorName": "coral"
            },
            {
              "name": "basket",
              "description": "silver stainless basket underneath the chair",
              "color": "#6619e0",
              "colorName": "violet"
            },
            {
              "name": "chair back",
              "description": "Blue plastic chair back with two cutouts in the middle",
              "color": "#0072d1",
              "colorName": "dark cyan"
            },
            {
              "name": "table top",
              "description": "table top in wood color, connected to the chair back by stainless rod",
              "color": "#ffc199",
              "colorName": "peach"
            }
          ]
        },
        "input": {
          "kind": "3d",
          "model": "static/assets/p02/3d/input/strokes.glb",
          "orientations": [
            {
              "label": "Initial orientation",
              "image": "static/assets/p02/3d/input/orientation-1.png",
              "isFinal": true
            }
          ],
          "frontEdits": [],
          "geometryVersions": 1
        },
        "metrics": {
          "generationRounds": 1,
          "candidateCount": 6,
          "imageEdits": 0,
          "frontEdits": 0,
          "compositions": 0,
          "reconstructions": 1,
          "postFinalGenerations": 0
        },
        "edits": [],
        "reconstruction": {
          "attempts": [
            {
              "label": "Hunyuan input",
              "image": "static/assets/p02/3d/reconstruction/attempt-1.png",
              "viewsUsed": [
                "front",
                "left",
                "back",
                "right"
              ],
              "selection": {
                "front": {
                  "sourceView": "front",
                  "candidate": "Trial 2 · Candidate 1",
                  "candidateKey": "trial2__1.png"
                },
                "left": {
                  "sourceView": "left",
                  "candidate": "Trial 2 · Candidate 1",
                  "candidateKey": "trial2__1.png"
                },
                "back": {
                  "sourceView": "back",
                  "candidate": "Trial 2 · Candidate 1",
                  "candidateKey": "trial2__1.png"
                },
                "right": {
                  "sourceView": "right",
                  "candidate": "Trial 2 · Candidate 1",
                  "candidateKey": "trial2__1.png"
                }
              },
              "changes": []
            }
          ],
          "finalModel": "static/assets/p02/3d/reconstruction/final.glb",
          "finalInput": "static/assets/p02/3d/reconstruction/attempt-1.png",
          "finalViews": {
            "front": "static/assets/p02/3d/reconstruction/views/front.png",
            "left": "static/assets/p02/3d/reconstruction/views/left.png",
            "back": "static/assets/p02/3d/reconstruction/views/back.png",
            "right": "static/assets/p02/3d/reconstruction/views/right.png"
          },
          "viewsUsed": [
            "front",
            "left",
            "back",
            "right"
          ],
          "finalSelection": {
            "front": {
              "sourceView": "front",
              "candidate": "Trial 2 · Candidate 1",
              "candidateKey": "trial2__1.png"
            },
            "left": {
              "sourceView": "left",
              "candidate": "Trial 2 · Candidate 1",
              "candidateKey": "trial2__1.png"
            },
            "back": {
              "sourceView": "back",
              "candidate": "Trial 2 · Candidate 1",
              "candidateKey": "trial2__1.png"
            },
            "right": {
              "sourceView": "right",
              "candidate": "Trial 2 · Candidate 1",
              "candidateKey": "trial2__1.png"
            }
          }
        }
      }
    ],
    "thumbnail2d": "static/assets/p02/2d/reconstruction/attempt-2.png",
    "thumbnail3d": "static/assets/p02/3d/reconstruction/attempt-1.png"
  },
  {
    "id": "participant-03",
    "number": 3,
    "label": "Participant 03",
    "referenceImage": "static/assets/reference-school-chair.png",
    "note": "",
    "methods": [
      {
        "type": "2d",
        "title": "2D drawing workflow",
        "specification": {
          "name": "school chair",
          "description": "school chair with bottom basket and upper-left table top",
          "parts": [
            {
              "name": "metal frame",
              "description": "silver metal frame for connecting whole chair",
              "color": "#3a0f0e",
              "colorName": ""
            },
            {
              "name": "chair",
              "description": "blue chair back and cushion",
              "color": "#457cf6",
              "colorName": ""
            },
            {
              "name": "table top",
              "description": "yellow table top on the upper left holding by metal frame",
              "color": "#e49c40",
              "colorName": ""
            },
            {
              "name": "basket",
              "description": "red basket under chair by metal frame",
              "color": "#b85853",
              "colorName": ""
            }
          ]
        },
        "input": {
          "kind": "2d",
          "drawings": [
            {
              "image": "static/assets/p03/2d/input/drawing-1.png",
              "view": "Perspective view from front left"
            },
            {
              "image": "static/assets/p03/2d/input/drawing-2.png",
              "view": "elevated left view"
            },
            {
              "image": "static/assets/p03/2d/input/drawing-3.png",
              "view": "Perspective view from rear right"
            }
          ]
        },
        "metrics": {
          "generationRounds": 1,
          "candidateCount": 6,
          "imageEdits": 1,
          "frontEdits": 0,
          "compositions": 0,
          "reconstructions": 1,
          "postFinalGenerations": 0
        },
        "edits": [
          {
            "label": "Image edit 1",
            "instruction": "chair back lack the round metal frame as shown on the third image",
            "before": "static/assets/p03/2d/edits/edit-1-before.png",
            "after": "static/assets/p03/2d/edits/edit-1-after.png",
            "references": [
              {
                "image": "static/assets/p03/2d/edits/edit-1-reference-1.png",
                "label": "Reference 1"
              },
              {
                "image": "static/assets/p03/2d/edits/edit-1-reference-2.png",
                "label": "Reference 2"
              },
              {
                "image": "static/assets/p03/2d/edits/edit-1-reference-3.png",
                "label": "Reference 3"
              }
            ],
            "usedViews": [
              "front",
              "left",
              "back",
              "right"
            ]
          }
        ],
        "reconstruction": {
          "attempts": [
            {
              "label": "Hunyuan input",
              "image": "static/assets/p03/2d/reconstruction/attempt-1.png",
              "viewsUsed": [
                "front",
                "left",
                "back",
                "right"
              ],
              "selection": {
                "front": {
                  "sourceView": "front",
                  "candidate": "Edit 4",
                  "candidateKey": "trial4__adjust.png"
                },
                "left": {
                  "sourceView": "left",
                  "candidate": "Edit 4",
                  "candidateKey": "trial4__adjust.png"
                },
                "back": {
                  "sourceView": "back",
                  "candidate": "Edit 4",
                  "candidateKey": "trial4__adjust.png"
                },
                "right": {
                  "sourceView": "right",
                  "candidate": "Edit 4",
                  "candidateKey": "trial4__adjust.png"
                }
              },
              "changes": []
            }
          ],
          "finalModel": "static/assets/p03/2d/reconstruction/final.glb",
          "finalInput": "static/assets/p03/2d/reconstruction/attempt-1.png",
          "finalViews": {
            "front": "static/assets/p03/2d/reconstruction/views/front.png",
            "left": "static/assets/p03/2d/reconstruction/views/left.png",
            "back": "static/assets/p03/2d/reconstruction/views/back.png",
            "right": "static/assets/p03/2d/reconstruction/views/right.png"
          },
          "viewsUsed": [
            "front",
            "left",
            "back",
            "right"
          ],
          "finalSelection": {
            "front": {
              "sourceView": "front",
              "candidate": "Edit 4",
              "candidateKey": "trial4__adjust.png"
            },
            "left": {
              "sourceView": "left",
              "candidate": "Edit 4",
              "candidateKey": "trial4__adjust.png"
            },
            "back": {
              "sourceView": "back",
              "candidate": "Edit 4",
              "candidateKey": "trial4__adjust.png"
            },
            "right": {
              "sourceView": "right",
              "candidate": "Edit 4",
              "candidateKey": "trial4__adjust.png"
            }
          }
        }
      },
      {
        "type": "3d",
        "title": "3D spatial workflow",
        "specification": {
          "name": "school chair",
          "description": "school chair with bottom basket and upper-left table top",
          "parts": [
            {
              "name": "basket",
              "description": "red basket under chair by metal frame",
              "color": "#ff4c38",
              "colorName": "coral"
            },
            {
              "name": "metal frame",
              "description": "silver metal frame for connecting whole chair",
              "color": "#6619e0",
              "colorName": "violet"
            },
            {
              "name": "chair",
              "description": "blue chair back and cushion",
              "color": "#0072d1",
              "colorName": "dark cyan"
            },
            {
              "name": "table top",
              "description": "yellow table top on the upper left holding by metal frame",
              "color": "#ffed00",
              "colorName": "yellow"
            }
          ]
        },
        "input": {
          "kind": "3d",
          "model": "static/assets/p03/3d/input/strokes.glb",
          "orientations": [
            {
              "label": "Initial orientation",
              "image": "static/assets/p03/3d/input/orientation-1.png",
              "isFinal": false
            },
            {
              "label": "Front yaw 29.5°",
              "image": "static/assets/p03/3d/input/orientation-2.png",
              "isFinal": false
            },
            {
              "label": "Front yaw 328.6°",
              "image": "static/assets/p03/3d/input/orientation-3.png",
              "isFinal": false
            },
            {
              "label": "Front yaw 307.4°",
              "image": "static/assets/p03/3d/input/orientation-4.png",
              "isFinal": true
            }
          ],
          "frontEdits": [
            29.5,
            328.6,
            307.4
          ],
          "geometryVersions": 1
        },
        "metrics": {
          "generationRounds": 1,
          "candidateCount": 6,
          "imageEdits": 0,
          "frontEdits": 3,
          "compositions": 0,
          "reconstructions": 1,
          "postFinalGenerations": 0
        },
        "edits": [],
        "reconstruction": {
          "attempts": [
            {
              "label": "Hunyuan input",
              "image": "static/assets/p03/3d/reconstruction/attempt-1.png",
              "viewsUsed": [
                "front",
                "left",
                "back",
                "right"
              ],
              "selection": {
                "front": {
                  "sourceView": "front",
                  "candidate": "Trial 1 · Candidate 2",
                  "candidateKey": "trial1__2.png"
                },
                "left": {
                  "sourceView": "left",
                  "candidate": "Trial 1 · Candidate 2",
                  "candidateKey": "trial1__2.png"
                },
                "back": {
                  "sourceView": "back",
                  "candidate": "Trial 1 · Candidate 2",
                  "candidateKey": "trial1__2.png"
                },
                "right": {
                  "sourceView": "right",
                  "candidate": "Trial 1 · Candidate 2",
                  "candidateKey": "trial1__2.png"
                }
              },
              "changes": []
            }
          ],
          "finalModel": "static/assets/p03/3d/reconstruction/final.glb",
          "finalInput": "static/assets/p03/3d/reconstruction/attempt-1.png",
          "finalViews": {
            "front": "static/assets/p03/3d/reconstruction/views/front.png",
            "left": "static/assets/p03/3d/reconstruction/views/left.png",
            "back": "static/assets/p03/3d/reconstruction/views/back.png",
            "right": "static/assets/p03/3d/reconstruction/views/right.png"
          },
          "viewsUsed": [
            "front",
            "left",
            "back",
            "right"
          ],
          "finalSelection": {
            "front": {
              "sourceView": "front",
              "candidate": "Trial 1 · Candidate 2",
              "candidateKey": "trial1__2.png"
            },
            "left": {
              "sourceView": "left",
              "candidate": "Trial 1 · Candidate 2",
              "candidateKey": "trial1__2.png"
            },
            "back": {
              "sourceView": "back",
              "candidate": "Trial 1 · Candidate 2",
              "candidateKey": "trial1__2.png"
            },
            "right": {
              "sourceView": "right",
              "candidate": "Trial 1 · Candidate 2",
              "candidateKey": "trial1__2.png"
            }
          }
        }
      }
    ],
    "thumbnail2d": "static/assets/p03/2d/reconstruction/attempt-1.png",
    "thumbnail3d": "static/assets/p03/3d/reconstruction/attempt-1.png"
  },
  {
    "id": "participant-04",
    "number": 4,
    "label": "Participant 04",
    "referenceImage": "static/assets/reference-school-chair.png",
    "note": "",
    "methods": [
      {
        "type": "2d",
        "title": "2D drawing workflow",
        "specification": {
          "name": "a school chair with folding desk top and metal basket",
          "description": "a school chair with blue plastic seat back and seat pan.\nconnected with a wood folding destk top in the metal frame with a book basket frame between four chair feet.",
          "parts": [
            {
              "name": "chair main part",
              "description": "seat back and seat pan, blue plastic",
              "color": "#457cf7",
              "colorName": ""
            },
            {
              "name": "chair frame",
              "description": "metal frame with a book basket frame between four chair feet",
              "color": "#636363",
              "colorName": ""
            },
            {
              "name": "foldable desk top",
              "description": "wood desktop connected with the medel chair frame",
              "color": "#e49c40",
              "colorName": ""
            }
          ]
        },
        "input": {
          "kind": "2d",
          "drawings": [
            {
              "image": "static/assets/p04/2d/input/drawing-1.png",
              "view": "Front view"
            },
            {
              "image": "static/assets/p04/2d/input/drawing-2.png",
              "view": "Right-side view"
            },
            {
              "image": "static/assets/p04/2d/input/drawing-3.png",
              "view": "Top view"
            }
          ]
        },
        "metrics": {
          "generationRounds": 1,
          "candidateCount": 6,
          "imageEdits": 1,
          "frontEdits": 0,
          "compositions": 4,
          "reconstructions": 2,
          "postFinalGenerations": 0
        },
        "edits": [
          {
            "label": "Image edit 1",
            "instruction": "1. the desk top is not square. it should be a shape as the image shows with round radius.\n2. the book basket should be open on the top",
            "before": "static/assets/p04/2d/edits/edit-1-before.png",
            "after": "static/assets/p04/2d/edits/edit-1-after.png",
            "references": [
              {
                "image": "static/assets/p04/2d/edits/edit-1-reference-1.png",
                "label": "Reference 1"
              },
              {
                "image": "static/assets/p04/2d/edits/edit-1-reference-2.png",
                "label": "Reference 2"
              }
            ],
            "usedViews": [
              "front",
              "back",
              "right"
            ]
          }
        ],
        "reconstruction": {
          "attempts": [
            {
              "label": "Hunyuan input v1",
              "image": "static/assets/p04/2d/reconstruction/attempt-1.png",
              "viewsUsed": [
                "front",
                "left",
                "back",
                "right"
              ],
              "selection": {
                "front": {
                  "sourceView": "front",
                  "candidate": "Trial 1 · Candidate 1",
                  "candidateKey": "trial1__1.png"
                },
                "left": {
                  "sourceView": "left",
                  "candidate": "Trial 1 · Candidate 2",
                  "candidateKey": "trial1__2.png"
                },
                "back": {
                  "sourceView": "back",
                  "candidate": "Trial 1 · Candidate 2",
                  "candidateKey": "trial1__2.png"
                },
                "right": {
                  "sourceView": "right",
                  "candidate": "Trial 1 · Candidate 2",
                  "candidateKey": "trial1__2.png"
                }
              },
              "changes": []
            },
            {
              "label": "Hunyuan input v2",
              "image": "static/assets/p04/2d/reconstruction/attempt-2.png",
              "viewsUsed": [
                "front",
                "left",
                "back",
                "right"
              ],
              "selection": {
                "front": {
                  "sourceView": "front",
                  "candidate": "Edit 4",
                  "candidateKey": "trial4__adjust.png"
                },
                "left": {
                  "sourceView": "left",
                  "candidate": "Trial 1 · Candidate 2",
                  "candidateKey": "trial1__2.png"
                },
                "back": {
                  "sourceView": "back",
                  "candidate": "Edit 4",
                  "candidateKey": "trial4__adjust.png"
                },
                "right": {
                  "sourceView": "right",
                  "candidate": "Edit 4",
                  "candidateKey": "trial4__adjust.png"
                }
              },
              "changes": [
                {
                  "view": "front",
                  "kind": "changed"
                },
                {
                  "view": "back",
                  "kind": "changed"
                },
                {
                  "view": "right",
                  "kind": "changed"
                }
              ]
            }
          ],
          "finalModel": "static/assets/p04/2d/reconstruction/final.glb",
          "finalInput": "static/assets/p04/2d/reconstruction/attempt-2.png",
          "finalViews": {
            "front": "static/assets/p04/2d/reconstruction/views/front.png",
            "left": "static/assets/p04/2d/reconstruction/views/left.png",
            "back": "static/assets/p04/2d/reconstruction/views/back.png",
            "right": "static/assets/p04/2d/reconstruction/views/right.png"
          },
          "viewsUsed": [
            "front",
            "left",
            "back",
            "right"
          ],
          "finalSelection": {
            "front": {
              "sourceView": "front",
              "candidate": "Edit 4",
              "candidateKey": "trial4__adjust.png"
            },
            "left": {
              "sourceView": "left",
              "candidate": "Trial 1 · Candidate 2",
              "candidateKey": "trial1__2.png"
            },
            "back": {
              "sourceView": "back",
              "candidate": "Edit 4",
              "candidateKey": "trial4__adjust.png"
            },
            "right": {
              "sourceView": "right",
              "candidate": "Edit 4",
              "candidateKey": "trial4__adjust.png"
            }
          }
        }
      },
      {
        "type": "3d",
        "title": "3D spatial workflow",
        "specification": {
          "name": "a school chair with folding desk top and metal basket",
          "description": "a school chair with blue plastic seat back and seat pan.\nconnected with a wood folding destk top in the metal frame with a book basket frame between four chair feet.",
          "parts": [
            {
              "name": "chair main part",
              "description": "seat back and seat pan, blue plastic",
              "color": "#ff4c38",
              "colorName": "coral"
            },
            {
              "name": "foldable desk top",
              "description": "wood desktop connected with the medel chair frame",
              "color": "#6619e0",
              "colorName": "violet"
            },
            {
              "name": "chair frame",
              "description": "metal frame with a book basket frame between four chair feet",
              "color": "#8ee500",
              "colorName": "lime"
            }
          ]
        },
        "input": {
          "kind": "3d",
          "model": "static/assets/p04/3d/input/strokes.glb",
          "orientations": [
            {
              "label": "Initial orientation",
              "image": "static/assets/p04/3d/input/orientation-1.png",
              "isFinal": false
            },
            {
              "label": "Front yaw 118.8°",
              "image": "static/assets/p04/3d/input/orientation-2.png",
              "isFinal": true
            }
          ],
          "frontEdits": [
            118.8
          ],
          "geometryVersions": 1
        },
        "metrics": {
          "generationRounds": 1,
          "candidateCount": 6,
          "imageEdits": 0,
          "frontEdits": 1,
          "compositions": 0,
          "reconstructions": 1,
          "postFinalGenerations": 0
        },
        "edits": [],
        "reconstruction": {
          "attempts": [
            {
              "label": "Hunyuan input",
              "image": "static/assets/p04/3d/reconstruction/attempt-1.png",
              "viewsUsed": [
                "front",
                "left",
                "back",
                "right"
              ],
              "selection": {
                "front": {
                  "sourceView": "front",
                  "candidate": "Trial 2 · Candidate 1",
                  "candidateKey": "trial2__1.png"
                },
                "left": {
                  "sourceView": "left",
                  "candidate": "Trial 2 · Candidate 1",
                  "candidateKey": "trial2__1.png"
                },
                "back": {
                  "sourceView": "back",
                  "candidate": "Trial 2 · Candidate 1",
                  "candidateKey": "trial2__1.png"
                },
                "right": {
                  "sourceView": "right",
                  "candidate": "Trial 2 · Candidate 1",
                  "candidateKey": "trial2__1.png"
                }
              },
              "changes": []
            }
          ],
          "finalModel": "static/assets/p04/3d/reconstruction/final.glb",
          "finalInput": "static/assets/p04/3d/reconstruction/attempt-1.png",
          "finalViews": {
            "front": "static/assets/p04/3d/reconstruction/views/front.png",
            "left": "static/assets/p04/3d/reconstruction/views/left.png",
            "back": "static/assets/p04/3d/reconstruction/views/back.png",
            "right": "static/assets/p04/3d/reconstruction/views/right.png"
          },
          "viewsUsed": [
            "front",
            "left",
            "back",
            "right"
          ],
          "finalSelection": {
            "front": {
              "sourceView": "front",
              "candidate": "Trial 2 · Candidate 1",
              "candidateKey": "trial2__1.png"
            },
            "left": {
              "sourceView": "left",
              "candidate": "Trial 2 · Candidate 1",
              "candidateKey": "trial2__1.png"
            },
            "back": {
              "sourceView": "back",
              "candidate": "Trial 2 · Candidate 1",
              "candidateKey": "trial2__1.png"
            },
            "right": {
              "sourceView": "right",
              "candidate": "Trial 2 · Candidate 1",
              "candidateKey": "trial2__1.png"
            }
          }
        }
      }
    ],
    "thumbnail2d": "static/assets/p04/2d/reconstruction/attempt-2.png",
    "thumbnail3d": "static/assets/p04/3d/reconstruction/attempt-1.png"
  },
  {
    "id": "participant-05",
    "number": 5,
    "label": "Participant 05",
    "referenceImage": "static/assets/reference-school-chair.png",
    "note": "",
    "methods": [
      {
        "type": "2d",
        "title": "2D drawing workflow",
        "specification": {
          "name": "School Chair",
          "description": "This is a school chair commonly used in classrooms for students. It consists of a chair body, a folding desk, a desk support, four chair legs, a book basket, and four little chair leg caps attached to the chair legs.",
          "parts": [
            {
              "name": "Chair legs",
              "description": "Four chair legs of the school chair. Shinning silver steel.",
              "color": "#000000",
              "colorName": ""
            },
            {
              "name": "Chair body",
              "description": "Plastic blue chair body of the whole chair. with three vertical holes at the back.",
              "color": "#457cf7",
              "colorName": ""
            },
            {
              "name": "Book basket",
              "description": "Book basket attached to the four chair legs. Shinning silver steel.",
              "color": "#b81e18",
              "colorName": ""
            },
            {
              "name": "Folding desk",
              "description": "Dark brown wooden folding desk attached to the desk support. With wooden pattern on the top.",
              "color": "#e39b40",
              "colorName": ""
            },
            {
              "name": "Desk support",
              "description": "Shinning silver steel desk support connecting the chair legs and the folding desk.",
              "color": "#7d4792",
              "colorName": ""
            },
            {
              "name": "Chair leg caps",
              "description": "Four chair leg caps attached to the four chair legs. There are little gapes between the chair legs and the caps. Also shinning silver steel.",
              "color": "#497159",
              "colorName": ""
            }
          ]
        },
        "input": {
          "kind": "2d",
          "drawings": [
            {
              "image": "static/assets/p05/2d/input/drawing-1.png",
              "view": "Front view"
            },
            {
              "image": "static/assets/p05/2d/input/drawing-2.png",
              "view": "Left-side view"
            }
          ]
        },
        "metrics": {
          "generationRounds": 1,
          "candidateCount": 6,
          "imageEdits": 0,
          "frontEdits": 0,
          "compositions": 0,
          "reconstructions": 1,
          "postFinalGenerations": 0
        },
        "edits": [],
        "reconstruction": {
          "attempts": [
            {
              "label": "Hunyuan input",
              "image": "static/assets/p05/2d/reconstruction/attempt-1.png",
              "viewsUsed": [
                "front",
                "left",
                "back",
                "right"
              ],
              "selection": {
                "front": {
                  "sourceView": "front",
                  "candidate": "Trial 1 · Candidate 2",
                  "candidateKey": "trial1__2.png"
                },
                "left": {
                  "sourceView": "left",
                  "candidate": "Trial 1 · Candidate 2",
                  "candidateKey": "trial1__2.png"
                },
                "back": {
                  "sourceView": "back",
                  "candidate": "Trial 1 · Candidate 2",
                  "candidateKey": "trial1__2.png"
                },
                "right": {
                  "sourceView": "right",
                  "candidate": "Trial 1 · Candidate 2",
                  "candidateKey": "trial1__2.png"
                }
              },
              "changes": []
            }
          ],
          "finalModel": "static/assets/p05/2d/reconstruction/final.glb",
          "finalInput": "static/assets/p05/2d/reconstruction/attempt-1.png",
          "finalViews": {
            "front": "static/assets/p05/2d/reconstruction/views/front.png",
            "left": "static/assets/p05/2d/reconstruction/views/left.png",
            "back": "static/assets/p05/2d/reconstruction/views/back.png",
            "right": "static/assets/p05/2d/reconstruction/views/right.png"
          },
          "viewsUsed": [
            "front",
            "left",
            "back",
            "right"
          ],
          "finalSelection": {
            "front": {
              "sourceView": "front",
              "candidate": "Trial 1 · Candidate 2",
              "candidateKey": "trial1__2.png"
            },
            "left": {
              "sourceView": "left",
              "candidate": "Trial 1 · Candidate 2",
              "candidateKey": "trial1__2.png"
            },
            "back": {
              "sourceView": "back",
              "candidate": "Trial 1 · Candidate 2",
              "candidateKey": "trial1__2.png"
            },
            "right": {
              "sourceView": "right",
              "candidate": "Trial 1 · Candidate 2",
              "candidateKey": "trial1__2.png"
            }
          }
        }
      },
      {
        "type": "3d",
        "title": "3D spatial workflow",
        "specification": {
          "name": "School Chair",
          "description": "This is a school chair commonly used in classrooms for students. It consists of a chair body, a folding desk, a desk support, four chair legs, a book basket, and four little chair leg caps attached to the chair legs.",
          "parts": [
            {
              "name": "Desk support",
              "description": "Shinning silver steel desk support connecting the chair legs and the folding desk.",
              "color": "#ff4c38",
              "colorName": "coral"
            },
            {
              "name": "Chair leg caps",
              "description": "Four chair leg caps attached to the four chair legs. There are little gapes between the chair legs and the caps. Also shinning silver steel.",
              "color": "#8ee500",
              "colorName": "lime"
            },
            {
              "name": "Folding desk",
              "description": "Dark brown wooden folding desk attached to the desk support. With wooden pattern on the top.",
              "color": "#b78900",
              "colorName": "gold"
            },
            {
              "name": "Chair body",
              "description": "Plastic blue chair body of the whole chair. with three vertical holes at the back.",
              "color": "#0072d1",
              "colorName": "dark cyan"
            },
            {
              "name": "Chair legs",
              "description": "Four chair legs of the school chair. Shinning silver steel.",
              "color": "#ffed00",
              "colorName": "yellow"
            },
            {
              "name": "Book basket",
              "description": "Book basket attached to the four chair legs. Shinning silver steel.",
              "color": "#934c14",
              "colorName": "sienna"
            }
          ]
        },
        "input": {
          "kind": "3d",
          "model": "static/assets/p05/3d/input/strokes.glb",
          "orientations": [
            {
              "label": "Initial orientation",
              "image": "static/assets/p05/3d/input/orientation-1.png",
              "isFinal": false
            },
            {
              "label": "Front yaw 34.4°",
              "image": "static/assets/p05/3d/input/orientation-2.png",
              "isFinal": false
            },
            {
              "label": "Front yaw 344.4°",
              "image": "static/assets/p05/3d/input/orientation-3.png",
              "isFinal": true
            }
          ],
          "frontEdits": [
            34.4,
            344.4
          ],
          "geometryVersions": 1
        },
        "metrics": {
          "generationRounds": 2,
          "candidateCount": 12,
          "imageEdits": 2,
          "frontEdits": 2,
          "compositions": 4,
          "reconstructions": 3,
          "postFinalGenerations": 0
        },
        "edits": [
          {
            "label": "Image edit 1",
            "instruction": "Can you clear the vertical bar in the book basket? There should be four horizontal bars but no vertical bars. also the basket left and right view is a bit unreal.",
            "before": "static/assets/p05/3d/edits/edit-1-before.png",
            "after": "static/assets/p05/3d/edits/edit-1-after.png",
            "references": [
              {
                "image": "static/assets/p05/3d/edits/edit-1-reference-1.png",
                "label": "Reference 1"
              },
              {
                "image": "static/assets/p05/3d/edits/edit-1-reference-2.png",
                "label": "Reference 2"
              },
              {
                "image": "static/assets/p05/3d/edits/edit-1-reference-3.png",
                "label": "Reference 3"
              },
              {
                "image": "static/assets/p05/3d/edits/edit-1-reference-4.png",
                "label": "Reference 4"
              }
            ],
            "usedViews": []
          },
          {
            "label": "Image edit 2",
            "instruction": "For the basket, can you edit left and right to match front and rear views? For the desk support, there should also be a curved support on the back of the chair body, can you add it? also there should be only one tilted vertical bar connected to the support at the bottom of the chair body, and another horizontal bar connected to the back support.",
            "before": "static/assets/p05/3d/edits/edit-2-before.png",
            "after": "static/assets/p05/3d/edits/edit-2-after.png",
            "references": [],
            "usedViews": [
              "front",
              "back"
            ]
          }
        ],
        "reconstruction": {
          "attempts": [
            {
              "label": "Hunyuan input v1",
              "image": "static/assets/p05/3d/reconstruction/attempt-1.png",
              "viewsUsed": [
                "front",
                "left",
                "back",
                "right"
              ],
              "selection": {
                "front": {
                  "sourceView": "front",
                  "candidate": "Trial 3 · Candidate 1",
                  "candidateKey": "trial3__1.png"
                },
                "left": {
                  "sourceView": "left",
                  "candidate": "Trial 3 · Candidate 1",
                  "candidateKey": "trial3__1.png"
                },
                "back": {
                  "sourceView": "back",
                  "candidate": "Trial 3 · Candidate 1",
                  "candidateKey": "trial3__1.png"
                },
                "right": {
                  "sourceView": "right",
                  "candidate": "Trial 3 · Candidate 1",
                  "candidateKey": "trial3__1.png"
                }
              },
              "changes": []
            },
            {
              "label": "Hunyuan input v2",
              "image": "static/assets/p05/3d/reconstruction/attempt-2.png",
              "viewsUsed": [
                "front",
                "left",
                "back",
                "right"
              ],
              "selection": {
                "front": {
                  "sourceView": "front",
                  "candidate": "Trial 5 · Candidate 1",
                  "candidateKey": "trial5__1.png"
                },
                "left": {
                  "sourceView": "left",
                  "candidate": "Trial 4 · Candidate 1",
                  "candidateKey": "trial4__1.png"
                },
                "back": {
                  "sourceView": "back",
                  "candidate": "Trial 4 · Candidate 1",
                  "candidateKey": "trial4__1.png"
                },
                "right": {
                  "sourceView": "right",
                  "candidate": "Trial 4 · Candidate 1",
                  "candidateKey": "trial4__1.png"
                }
              },
              "changes": [
                {
                  "view": "front",
                  "kind": "changed"
                },
                {
                  "view": "left",
                  "kind": "changed"
                },
                {
                  "view": "back",
                  "kind": "changed"
                },
                {
                  "view": "right",
                  "kind": "changed"
                }
              ]
            },
            {
              "label": "Hunyuan input v3",
              "image": "static/assets/p05/3d/reconstruction/attempt-3.png",
              "viewsUsed": [
                "front",
                "left",
                "back",
                "right"
              ],
              "selection": {
                "front": {
                  "sourceView": "front",
                  "candidate": "Edit 8",
                  "candidateKey": "trial8__adjust.png"
                },
                "left": {
                  "sourceView": "left",
                  "candidate": "Trial 6 · Candidate 1",
                  "candidateKey": "trial6__1.png"
                },
                "back": {
                  "sourceView": "back",
                  "candidate": "Edit 8",
                  "candidateKey": "trial8__adjust.png"
                },
                "right": {
                  "sourceView": "right",
                  "candidate": "Trial 6 · Candidate 1",
                  "candidateKey": "trial6__1.png"
                }
              },
              "changes": [
                {
                  "view": "front",
                  "kind": "changed"
                },
                {
                  "view": "left",
                  "kind": "changed"
                },
                {
                  "view": "back",
                  "kind": "changed"
                },
                {
                  "view": "right",
                  "kind": "changed"
                }
              ]
            }
          ],
          "finalModel": "static/assets/p05/3d/reconstruction/final.glb",
          "finalInput": "static/assets/p05/3d/reconstruction/attempt-3.png",
          "finalViews": {
            "front": "static/assets/p05/3d/reconstruction/views/front.png",
            "left": "static/assets/p05/3d/reconstruction/views/left.png",
            "back": "static/assets/p05/3d/reconstruction/views/back.png",
            "right": "static/assets/p05/3d/reconstruction/views/right.png"
          },
          "viewsUsed": [
            "front",
            "left",
            "back",
            "right"
          ],
          "finalSelection": {
            "front": {
              "sourceView": "front",
              "candidate": "Edit 8",
              "candidateKey": "trial8__adjust.png"
            },
            "left": {
              "sourceView": "left",
              "candidate": "Trial 6 · Candidate 1",
              "candidateKey": "trial6__1.png"
            },
            "back": {
              "sourceView": "back",
              "candidate": "Edit 8",
              "candidateKey": "trial8__adjust.png"
            },
            "right": {
              "sourceView": "right",
              "candidate": "Trial 6 · Candidate 1",
              "candidateKey": "trial6__1.png"
            }
          }
        }
      }
    ],
    "thumbnail2d": "static/assets/p05/2d/reconstruction/attempt-1.png",
    "thumbnail3d": "static/assets/p05/3d/reconstruction/attempt-3.png"
  },
  {
    "id": "participant-06",
    "number": 6,
    "label": "Participant 06",
    "referenceImage": "static/assets/reference-school-chair.png",
    "note": "The participant-supplied basket description differs slightly between conditions; the final 2D front also comes from an earlier saved input revision.",
    "methods": [
      {
        "type": "2d",
        "title": "2D drawing workflow",
        "specification": {
          "name": "a school chair",
          "description": "",
          "parts": [
            {
              "name": "tabletop",
              "description": "a tabletop for writting for the school chair. wood texture",
              "color": "#000000",
              "colorName": ""
            },
            {
              "name": "chair",
              "description": "The chair that provides for human body and connects all the major components of the chair. dark blue color",
              "color": "#ba1e18",
              "colorName": ""
            },
            {
              "name": "basket",
              "description": "a basket for storage underneath the chair with metallic/silver color",
              "color": "#457bf5",
              "colorName": ""
            },
            {
              "name": "legs/frame",
              "description": "Chair legs with metallic/silver color and its frames taht connect chair itself, the tabletop and the basket",
              "color": "#497159",
              "colorName": ""
            }
          ]
        },
        "input": {
          "kind": "2d",
          "drawings": [
            {
              "image": "static/assets/p06/2d/input/drawing-1.png",
              "view": "Perspective view from front right"
            },
            {
              "image": "static/assets/p06/2d/input/drawing-2.png",
              "view": "Top view"
            },
            {
              "image": "static/assets/p06/2d/input/drawing-3.png",
              "view": "Perspective view from rear right"
            }
          ]
        },
        "metrics": {
          "generationRounds": 2,
          "candidateCount": 12,
          "imageEdits": 0,
          "frontEdits": 0,
          "compositions": 1,
          "reconstructions": 2,
          "postFinalGenerations": 0
        },
        "edits": [],
        "reconstruction": {
          "attempts": [
            {
              "label": "Hunyuan input v1",
              "image": "static/assets/p06/2d/reconstruction/attempt-1.png",
              "viewsUsed": [
                "front",
                "left",
                "back",
                "right"
              ],
              "selection": {
                "front": {
                  "sourceView": "front",
                  "candidate": "Trial 5 · Candidate 1",
                  "candidateKey": "trial5__1.png"
                },
                "left": {
                  "sourceView": "left",
                  "candidate": "Trial 5 · Candidate 1",
                  "candidateKey": "trial5__1.png"
                },
                "back": {
                  "sourceView": "back",
                  "candidate": "Trial 5 · Candidate 1",
                  "candidateKey": "trial5__1.png"
                },
                "right": {
                  "sourceView": "right",
                  "candidate": "Trial 5 · Candidate 1",
                  "candidateKey": "trial5__1.png"
                }
              },
              "changes": []
            },
            {
              "label": "Hunyuan input v2",
              "image": "static/assets/p06/2d/reconstruction/attempt-2.png",
              "viewsUsed": [
                "front",
                "left",
                "back",
                "right"
              ],
              "selection": {
                "front": {
                  "sourceView": "front",
                  "candidate": "Trial 1 · Candidate 1",
                  "candidateKey": "trial1__1.png"
                },
                "left": {
                  "sourceView": "left",
                  "candidate": "Trial 5 · Candidate 1",
                  "candidateKey": "trial5__1.png"
                },
                "back": {
                  "sourceView": "back",
                  "candidate": "Trial 5 · Candidate 1",
                  "candidateKey": "trial5__1.png"
                },
                "right": {
                  "sourceView": "right",
                  "candidate": "Trial 5 · Candidate 1",
                  "candidateKey": "trial5__1.png"
                }
              },
              "changes": [
                {
                  "view": "front",
                  "kind": "changed"
                }
              ]
            }
          ],
          "finalModel": "static/assets/p06/2d/reconstruction/final.glb",
          "finalInput": "static/assets/p06/2d/reconstruction/attempt-2.png",
          "finalViews": {
            "front": "static/assets/p06/2d/reconstruction/views/front.png",
            "left": "static/assets/p06/2d/reconstruction/views/left.png",
            "back": "static/assets/p06/2d/reconstruction/views/back.png",
            "right": "static/assets/p06/2d/reconstruction/views/right.png"
          },
          "viewsUsed": [
            "front",
            "left",
            "back",
            "right"
          ],
          "finalSelection": {
            "front": {
              "sourceView": "front",
              "candidate": "Trial 1 · Candidate 1",
              "candidateKey": "trial1__1.png"
            },
            "left": {
              "sourceView": "left",
              "candidate": "Trial 5 · Candidate 1",
              "candidateKey": "trial5__1.png"
            },
            "back": {
              "sourceView": "back",
              "candidate": "Trial 5 · Candidate 1",
              "candidateKey": "trial5__1.png"
            },
            "right": {
              "sourceView": "right",
              "candidate": "Trial 5 · Candidate 1",
              "candidateKey": "trial5__1.png"
            }
          }
        }
      },
      {
        "type": "3d",
        "title": "3D spatial workflow",
        "specification": {
          "name": "a school chair",
          "description": "",
          "parts": [
            {
              "name": "tabletop",
              "description": "a tabletop for writting for the school chair. wood texture",
              "color": "#ff4c38",
              "colorName": "coral"
            },
            {
              "name": "chair",
              "description": "The chair that provides for human body and connects all the major components of the chair. dark blue color",
              "color": "#6619e0",
              "colorName": "violet"
            },
            {
              "name": "legs/frame",
              "description": "Chair legs with metallic/silver color and its frames taht connect chair itself, the tabletop and the basket",
              "color": "#8ee500",
              "colorName": "lime"
            },
            {
              "name": "basket",
              "description": "a basket for storage underneath the chair",
              "color": "#00d6e5",
              "colorName": "turquoise"
            }
          ]
        },
        "input": {
          "kind": "3d",
          "model": "static/assets/p06/3d/input/strokes.glb",
          "orientations": [
            {
              "label": "Initial orientation",
              "image": "static/assets/p06/3d/input/orientation-1.png",
              "isFinal": false
            },
            {
              "label": "Front yaw 150.0°",
              "image": "static/assets/p06/3d/input/orientation-2.png",
              "isFinal": true
            }
          ],
          "frontEdits": [
            150.0
          ],
          "geometryVersions": 1
        },
        "metrics": {
          "generationRounds": 2,
          "candidateCount": 12,
          "imageEdits": 0,
          "frontEdits": 1,
          "compositions": 0,
          "reconstructions": 1,
          "postFinalGenerations": 1
        },
        "edits": [],
        "reconstruction": {
          "attempts": [
            {
              "label": "Hunyuan input",
              "image": "static/assets/p06/3d/reconstruction/attempt-1.png",
              "viewsUsed": [
                "front",
                "left",
                "back",
                "right"
              ],
              "selection": {
                "front": {
                  "sourceView": "front",
                  "candidate": "Trial 2 · Candidate 1",
                  "candidateKey": "trial2__1.png"
                },
                "left": {
                  "sourceView": "left",
                  "candidate": "Trial 2 · Candidate 1",
                  "candidateKey": "trial2__1.png"
                },
                "back": {
                  "sourceView": "back",
                  "candidate": "Trial 2 · Candidate 1",
                  "candidateKey": "trial2__1.png"
                },
                "right": {
                  "sourceView": "right",
                  "candidate": "Trial 2 · Candidate 1",
                  "candidateKey": "trial2__1.png"
                }
              },
              "changes": []
            }
          ],
          "finalModel": "static/assets/p06/3d/reconstruction/final.glb",
          "finalInput": "static/assets/p06/3d/reconstruction/attempt-1.png",
          "finalViews": {
            "front": "static/assets/p06/3d/reconstruction/views/front.png",
            "left": "static/assets/p06/3d/reconstruction/views/left.png",
            "back": "static/assets/p06/3d/reconstruction/views/back.png",
            "right": "static/assets/p06/3d/reconstruction/views/right.png"
          },
          "viewsUsed": [
            "front",
            "left",
            "back",
            "right"
          ],
          "finalSelection": {
            "front": {
              "sourceView": "front",
              "candidate": "Trial 2 · Candidate 1",
              "candidateKey": "trial2__1.png"
            },
            "left": {
              "sourceView": "left",
              "candidate": "Trial 2 · Candidate 1",
              "candidateKey": "trial2__1.png"
            },
            "back": {
              "sourceView": "back",
              "candidate": "Trial 2 · Candidate 1",
              "candidateKey": "trial2__1.png"
            },
            "right": {
              "sourceView": "right",
              "candidate": "Trial 2 · Candidate 1",
              "candidateKey": "trial2__1.png"
            }
          }
        }
      }
    ],
    "thumbnail2d": "static/assets/p06/2d/reconstruction/attempt-2.png",
    "thumbnail3d": "static/assets/p06/3d/reconstruction/attempt-1.png"
  },
  {
    "id": "participant-07",
    "number": 7,
    "label": "Participant 07",
    "referenceImage": "static/assets/reference-school-chair.png",
    "note": "",
    "methods": [
      {
        "type": "2d",
        "title": "2D drawing workflow",
        "specification": {
          "name": "school chair",
          "description": "a school chair with a folding desktop, connected by a metal frame together with legs and the under-seat basket",
          "parts": [
            {
              "name": "chair body",
              "description": "main chair body in dark blue",
              "color": "#457cf7",
              "colorName": ""
            },
            {
              "name": "folding desktop",
              "description": "wooden folding desktop",
              "color": "#90c44e",
              "colorName": ""
            },
            {
              "name": "frame",
              "description": "a silver metal frame including four chair legs, a under-seat basket and a folding desktop arm",
              "color": "#e49c40",
              "colorName": ""
            }
          ]
        },
        "input": {
          "kind": "2d",
          "drawings": [
            {
              "image": "static/assets/p07/2d/input/drawing-1.png",
              "view": "Perspective view from rear right"
            },
            {
              "image": "static/assets/p07/2d/input/drawing-2.png",
              "view": "Front view"
            },
            {
              "image": "static/assets/p07/2d/input/drawing-3.png",
              "view": "Right-side view"
            }
          ]
        },
        "metrics": {
          "generationRounds": 1,
          "candidateCount": 6,
          "imageEdits": 0,
          "frontEdits": 0,
          "compositions": 0,
          "reconstructions": 1,
          "postFinalGenerations": 0
        },
        "edits": [],
        "reconstruction": {
          "attempts": [
            {
              "label": "Hunyuan input",
              "image": "static/assets/p07/2d/reconstruction/attempt-1.png",
              "viewsUsed": [
                "front",
                "left",
                "back",
                "right"
              ],
              "selection": {
                "front": {
                  "sourceView": "front",
                  "candidate": "Trial 3 · Candidate 2",
                  "candidateKey": "trial3__2.png"
                },
                "left": {
                  "sourceView": "left",
                  "candidate": "Trial 3 · Candidate 2",
                  "candidateKey": "trial3__2.png"
                },
                "back": {
                  "sourceView": "back",
                  "candidate": "Trial 3 · Candidate 2",
                  "candidateKey": "trial3__2.png"
                },
                "right": {
                  "sourceView": "right",
                  "candidate": "Trial 3 · Candidate 2",
                  "candidateKey": "trial3__2.png"
                }
              },
              "changes": []
            }
          ],
          "finalModel": "static/assets/p07/2d/reconstruction/final.glb",
          "finalInput": "static/assets/p07/2d/reconstruction/attempt-1.png",
          "finalViews": {
            "front": "static/assets/p07/2d/reconstruction/views/front.png",
            "left": "static/assets/p07/2d/reconstruction/views/left.png",
            "back": "static/assets/p07/2d/reconstruction/views/back.png",
            "right": "static/assets/p07/2d/reconstruction/views/right.png"
          },
          "viewsUsed": [
            "front",
            "left",
            "back",
            "right"
          ],
          "finalSelection": {
            "front": {
              "sourceView": "front",
              "candidate": "Trial 3 · Candidate 2",
              "candidateKey": "trial3__2.png"
            },
            "left": {
              "sourceView": "left",
              "candidate": "Trial 3 · Candidate 2",
              "candidateKey": "trial3__2.png"
            },
            "back": {
              "sourceView": "back",
              "candidate": "Trial 3 · Candidate 2",
              "candidateKey": "trial3__2.png"
            },
            "right": {
              "sourceView": "right",
              "candidate": "Trial 3 · Candidate 2",
              "candidateKey": "trial3__2.png"
            }
          }
        }
      },
      {
        "type": "3d",
        "title": "3D spatial workflow",
        "specification": {
          "name": "school chair",
          "description": "a school chair with a folding desktop, connected by a metal frame together with legs and the under-seat basket",
          "parts": [
            {
              "name": "chair body",
              "description": "main chair body in dark blue",
              "color": "#0072d1",
              "colorName": "dark cyan"
            },
            {
              "name": "folding desktop",
              "description": "wooden folding desktop",
              "color": "#2ddb47",
              "colorName": "spring green"
            },
            {
              "name": "frame",
              "description": "a silver metal frame including four chair legs, a under-seat basket and a folding desktop arm",
              "color": "#f27a00",
              "colorName": "orange"
            }
          ]
        },
        "input": {
          "kind": "3d",
          "model": "static/assets/p07/3d/input/strokes.glb",
          "orientations": [
            {
              "label": "Initial orientation",
              "image": "static/assets/p07/3d/input/orientation-1.png",
              "isFinal": false
            },
            {
              "label": "Front yaw 290.0°",
              "image": "static/assets/p07/3d/input/orientation-2.png",
              "isFinal": true
            }
          ],
          "frontEdits": [
            290.0
          ],
          "geometryVersions": 1
        },
        "metrics": {
          "generationRounds": 1,
          "candidateCount": 6,
          "imageEdits": 0,
          "frontEdits": 1,
          "compositions": 0,
          "reconstructions": 1,
          "postFinalGenerations": 0
        },
        "edits": [],
        "reconstruction": {
          "attempts": [
            {
              "label": "Hunyuan input",
              "image": "static/assets/p07/3d/reconstruction/attempt-1.png",
              "viewsUsed": [
                "front",
                "left",
                "back",
                "right"
              ],
              "selection": {
                "front": {
                  "sourceView": "front",
                  "candidate": "Trial 1 · Candidate 2",
                  "candidateKey": "trial1__2.png"
                },
                "left": {
                  "sourceView": "left",
                  "candidate": "Trial 1 · Candidate 2",
                  "candidateKey": "trial1__2.png"
                },
                "back": {
                  "sourceView": "back",
                  "candidate": "Trial 1 · Candidate 2",
                  "candidateKey": "trial1__2.png"
                },
                "right": {
                  "sourceView": "right",
                  "candidate": "Trial 1 · Candidate 2",
                  "candidateKey": "trial1__2.png"
                }
              },
              "changes": []
            }
          ],
          "finalModel": "static/assets/p07/3d/reconstruction/final.glb",
          "finalInput": "static/assets/p07/3d/reconstruction/attempt-1.png",
          "finalViews": {
            "front": "static/assets/p07/3d/reconstruction/views/front.png",
            "left": "static/assets/p07/3d/reconstruction/views/left.png",
            "back": "static/assets/p07/3d/reconstruction/views/back.png",
            "right": "static/assets/p07/3d/reconstruction/views/right.png"
          },
          "viewsUsed": [
            "front",
            "left",
            "back",
            "right"
          ],
          "finalSelection": {
            "front": {
              "sourceView": "front",
              "candidate": "Trial 1 · Candidate 2",
              "candidateKey": "trial1__2.png"
            },
            "left": {
              "sourceView": "left",
              "candidate": "Trial 1 · Candidate 2",
              "candidateKey": "trial1__2.png"
            },
            "back": {
              "sourceView": "back",
              "candidate": "Trial 1 · Candidate 2",
              "candidateKey": "trial1__2.png"
            },
            "right": {
              "sourceView": "right",
              "candidate": "Trial 1 · Candidate 2",
              "candidateKey": "trial1__2.png"
            }
          }
        }
      }
    ],
    "thumbnail2d": "static/assets/p07/2d/reconstruction/attempt-1.png",
    "thumbnail3d": "static/assets/p07/3d/reconstruction/attempt-1.png"
  },
  {
    "id": "participant-08",
    "number": 8,
    "label": "Participant 08",
    "referenceImage": "static/assets/reference-school-chair.png",
    "note": "Both final reconstructions use three views: 2D omits right, while 3D omits back.",
    "methods": [
      {
        "type": "2d",
        "title": "2D drawing workflow",
        "specification": {
          "name": "School Chair",
          "description": "This is a school chair with a folding desktop.",
          "parts": [
            {
              "name": "Desktop",
              "description": "This is a wooden color desktop.",
              "color": "#274e3c",
              "colorName": ""
            },
            {
              "name": "Basket",
              "description": "This is a silver metalic basket connected with four legs.",
              "color": "#d1d1d1",
              "colorName": ""
            },
            {
              "name": "Chair",
              "description": "This is a dark blue classic chair with three empty holes in the back.",
              "color": "#80aff9",
              "colorName": ""
            },
            {
              "name": "Connector",
              "description": "This is a silver metalic connector supporting the desktop.",
              "color": "#e29b40",
              "colorName": ""
            },
            {
              "name": "legs",
              "description": "There are four silver metalic chair legs.",
              "color": "#9cc25e",
              "colorName": ""
            }
          ]
        },
        "input": {
          "kind": "2d",
          "drawings": [
            {
              "image": "static/assets/p08/2d/input/drawing-1.png",
              "view": "Front view"
            },
            {
              "image": "static/assets/p08/2d/input/drawing-2.png",
              "view": "Perspective view from front right"
            }
          ]
        },
        "metrics": {
          "generationRounds": 1,
          "candidateCount": 6,
          "imageEdits": 0,
          "frontEdits": 0,
          "compositions": 0,
          "reconstructions": 1,
          "postFinalGenerations": 0
        },
        "edits": [],
        "reconstruction": {
          "attempts": [
            {
              "label": "Hunyuan input",
              "image": "static/assets/p08/2d/reconstruction/attempt-1.png",
              "viewsUsed": [
                "front",
                "left",
                "back"
              ],
              "selection": {
                "front": {
                  "sourceView": "front",
                  "candidate": "Trial 3 · Candidate 1",
                  "candidateKey": "trial3__1.png"
                },
                "left": {
                  "sourceView": "left",
                  "candidate": "Trial 2 · Candidate 1",
                  "candidateKey": "trial2__1.png"
                },
                "back": {
                  "sourceView": "back",
                  "candidate": "Trial 3 · Candidate 1",
                  "candidateKey": "trial3__1.png"
                }
              },
              "changes": []
            }
          ],
          "finalModel": "static/assets/p08/2d/reconstruction/final.glb",
          "finalInput": "static/assets/p08/2d/reconstruction/attempt-1.png",
          "finalViews": {
            "front": "static/assets/p08/2d/reconstruction/views/front.png",
            "left": "static/assets/p08/2d/reconstruction/views/left.png",
            "back": "static/assets/p08/2d/reconstruction/views/back.png"
          },
          "viewsUsed": [
            "front",
            "left",
            "back"
          ],
          "finalSelection": {
            "front": {
              "sourceView": "front",
              "candidate": "Trial 3 · Candidate 1",
              "candidateKey": "trial3__1.png"
            },
            "left": {
              "sourceView": "left",
              "candidate": "Trial 2 · Candidate 1",
              "candidateKey": "trial2__1.png"
            },
            "back": {
              "sourceView": "back",
              "candidate": "Trial 3 · Candidate 1",
              "candidateKey": "trial3__1.png"
            }
          }
        }
      },
      {
        "type": "3d",
        "title": "3D spatial workflow",
        "specification": {
          "name": "School Chair",
          "description": "This is a school chair with a folding desktop.",
          "parts": [
            {
              "name": "Desktop",
              "description": "This is a wooden color desktop.",
              "color": "#ff4c38",
              "colorName": "coral"
            },
            {
              "name": "Chair",
              "description": "This is a dark blue classic chair with three empty holes in the back.",
              "color": "#6619e0",
              "colorName": "violet"
            },
            {
              "name": "legs",
              "description": "There are four silver metalic chair legs.",
              "color": "#8ee500",
              "colorName": "lime"
            },
            {
              "name": "Basket",
              "description": "This is a silver metalic basket connected with four legs.",
              "color": "#00d6e5",
              "colorName": "turquoise"
            },
            {
              "name": "Connector",
              "description": "This is a silver metalic connector supporting the desktop.",
              "color": "#c684ef",
              "colorName": "orchid"
            }
          ]
        },
        "input": {
          "kind": "3d",
          "model": "static/assets/p08/3d/input/strokes.glb",
          "orientations": [
            {
              "label": "Initial orientation",
              "image": "static/assets/p08/3d/input/orientation-1.png",
              "isFinal": false
            },
            {
              "label": "Front yaw 180.0°",
              "image": "static/assets/p08/3d/input/orientation-2.png",
              "isFinal": true
            }
          ],
          "frontEdits": [
            180.0
          ],
          "geometryVersions": 1
        },
        "metrics": {
          "generationRounds": 1,
          "candidateCount": 6,
          "imageEdits": 0,
          "frontEdits": 1,
          "compositions": 2,
          "reconstructions": 3,
          "postFinalGenerations": 0
        },
        "edits": [],
        "reconstruction": {
          "attempts": [
            {
              "label": "Hunyuan input v1",
              "image": "static/assets/p08/3d/reconstruction/attempt-1.png",
              "viewsUsed": [
                "front",
                "left",
                "back",
                "right"
              ],
              "selection": {
                "front": {
                  "sourceView": "front",
                  "candidate": "Trial 3 · Candidate 1",
                  "candidateKey": "trial3__1.png"
                },
                "left": {
                  "sourceView": "left",
                  "candidate": "Trial 2 · Candidate 2",
                  "candidateKey": "trial2__2.png"
                },
                "back": {
                  "sourceView": "back",
                  "candidate": "Trial 3 · Candidate 1",
                  "candidateKey": "trial3__1.png"
                },
                "right": {
                  "sourceView": "right",
                  "candidate": "Trial 2 · Candidate 2",
                  "candidateKey": "trial2__2.png"
                }
              },
              "changes": []
            },
            {
              "label": "Hunyuan input v2",
              "image": "static/assets/p08/3d/reconstruction/attempt-2.png",
              "viewsUsed": [
                "front",
                "left",
                "back",
                "right"
              ],
              "selection": {
                "front": {
                  "sourceView": "front",
                  "candidate": "Trial 3 · Candidate 1",
                  "candidateKey": "trial3__1.png"
                },
                "left": {
                  "sourceView": "left",
                  "candidate": "Trial 2 · Candidate 2",
                  "candidateKey": "trial2__2.png"
                },
                "back": {
                  "sourceView": "back",
                  "candidate": "Trial 2 · Candidate 1",
                  "candidateKey": "trial2__1.png"
                },
                "right": {
                  "sourceView": "right",
                  "candidate": "Trial 2 · Candidate 2",
                  "candidateKey": "trial2__2.png"
                }
              },
              "changes": [
                {
                  "view": "back",
                  "kind": "changed"
                }
              ]
            },
            {
              "label": "Hunyuan input v3",
              "image": "static/assets/p08/3d/reconstruction/attempt-3.png",
              "viewsUsed": [
                "front",
                "left",
                "right"
              ],
              "selection": {
                "front": {
                  "sourceView": "front",
                  "candidate": "Trial 3 · Candidate 1",
                  "candidateKey": "trial3__1.png"
                },
                "left": {
                  "sourceView": "left",
                  "candidate": "Trial 2 · Candidate 2",
                  "candidateKey": "trial2__2.png"
                },
                "right": {
                  "sourceView": "right",
                  "candidate": "Trial 2 · Candidate 2",
                  "candidateKey": "trial2__2.png"
                }
              },
              "changes": [
                {
                  "view": "back",
                  "kind": "removed"
                }
              ]
            }
          ],
          "finalModel": "static/assets/p08/3d/reconstruction/final.glb",
          "finalInput": "static/assets/p08/3d/reconstruction/attempt-3.png",
          "finalViews": {
            "front": "static/assets/p08/3d/reconstruction/views/front.png",
            "left": "static/assets/p08/3d/reconstruction/views/left.png",
            "right": "static/assets/p08/3d/reconstruction/views/right.png"
          },
          "viewsUsed": [
            "front",
            "left",
            "right"
          ],
          "finalSelection": {
            "front": {
              "sourceView": "front",
              "candidate": "Trial 3 · Candidate 1",
              "candidateKey": "trial3__1.png"
            },
            "left": {
              "sourceView": "left",
              "candidate": "Trial 2 · Candidate 2",
              "candidateKey": "trial2__2.png"
            },
            "right": {
              "sourceView": "right",
              "candidate": "Trial 2 · Candidate 2",
              "candidateKey": "trial2__2.png"
            }
          }
        }
      }
    ],
    "thumbnail2d": "static/assets/p08/2d/reconstruction/attempt-1.png",
    "thumbnail3d": "static/assets/p08/3d/reconstruction/attempt-3.png"
  },
  {
    "id": "participant-09",
    "number": 9,
    "label": "Participant 09",
    "referenceImage": "static/assets/reference-school-chair.png",
    "note": "A later 3D image-generation round was recorded after the final reconstruction and is not used by the final mesh.",
    "methods": [
      {
        "type": "2d",
        "title": "2D drawing workflow",
        "specification": {
          "name": "A school chair",
          "description": "",
          "parts": [
            {
              "name": "chair",
              "description": "Blue plastic seat and backrest. The backrest has three oval-shaped holes.",
              "color": "#457cf6",
              "colorName": ""
            },
            {
              "name": "desk top",
              "description": "Brown wooden desk, connected to the backrest and the seat by two silver connectors.",
              "color": "#5f5f5f",
              "colorName": ""
            },
            {
              "name": "chair legs",
              "description": "Four silver chair legs.",
              "color": "#e39c40",
              "colorName": ""
            },
            {
              "name": "book basket",
              "description": "A silver book basket between the chair legs.",
              "color": "#90c44e",
              "colorName": ""
            }
          ]
        },
        "input": {
          "kind": "2d",
          "drawings": [
            {
              "image": "static/assets/p09/2d/input/drawing-1.png",
              "view": "Front view"
            },
            {
              "image": "static/assets/p09/2d/input/drawing-2.png",
              "view": "Top view"
            },
            {
              "image": "static/assets/p09/2d/input/drawing-3.png",
              "view": "Rear view"
            }
          ]
        },
        "metrics": {
          "generationRounds": 1,
          "candidateCount": 6,
          "imageEdits": 1,
          "frontEdits": 0,
          "compositions": 0,
          "reconstructions": 1,
          "postFinalGenerations": 0
        },
        "edits": [
          {
            "label": "Image edit 1",
            "instruction": "there is a silver connector at the back of chair. and one silver connector connect desk and chair seat",
            "before": "static/assets/p09/2d/edits/edit-1-before.png",
            "after": "static/assets/p09/2d/edits/edit-1-after.png",
            "references": [
              {
                "image": "static/assets/p09/2d/edits/edit-1-reference-1.png",
                "label": "Reference 1"
              }
            ],
            "usedViews": [
              "front",
              "left",
              "back",
              "right"
            ]
          }
        ],
        "reconstruction": {
          "attempts": [
            {
              "label": "Hunyuan input",
              "image": "static/assets/p09/2d/reconstruction/attempt-1.png",
              "viewsUsed": [
                "front",
                "left",
                "back",
                "right"
              ],
              "selection": {
                "front": {
                  "sourceView": "front",
                  "candidate": "Edit 4",
                  "candidateKey": "trial4__adjust.png"
                },
                "left": {
                  "sourceView": "left",
                  "candidate": "Edit 4",
                  "candidateKey": "trial4__adjust.png"
                },
                "back": {
                  "sourceView": "back",
                  "candidate": "Edit 4",
                  "candidateKey": "trial4__adjust.png"
                },
                "right": {
                  "sourceView": "right",
                  "candidate": "Edit 4",
                  "candidateKey": "trial4__adjust.png"
                }
              },
              "changes": []
            }
          ],
          "finalModel": "static/assets/p09/2d/reconstruction/final.glb",
          "finalInput": "static/assets/p09/2d/reconstruction/attempt-1.png",
          "finalViews": {
            "front": "static/assets/p09/2d/reconstruction/views/front.png",
            "left": "static/assets/p09/2d/reconstruction/views/left.png",
            "back": "static/assets/p09/2d/reconstruction/views/back.png",
            "right": "static/assets/p09/2d/reconstruction/views/right.png"
          },
          "viewsUsed": [
            "front",
            "left",
            "back",
            "right"
          ],
          "finalSelection": {
            "front": {
              "sourceView": "front",
              "candidate": "Edit 4",
              "candidateKey": "trial4__adjust.png"
            },
            "left": {
              "sourceView": "left",
              "candidate": "Edit 4",
              "candidateKey": "trial4__adjust.png"
            },
            "back": {
              "sourceView": "back",
              "candidate": "Edit 4",
              "candidateKey": "trial4__adjust.png"
            },
            "right": {
              "sourceView": "right",
              "candidate": "Edit 4",
              "candidateKey": "trial4__adjust.png"
            }
          }
        }
      },
      {
        "type": "3d",
        "title": "3D spatial workflow",
        "specification": {
          "name": "A school chair",
          "description": "",
          "parts": [
            {
              "name": "desk top",
              "description": "Brown wooden desk, connected to the backrest and the seat by two silver connectors.",
              "color": "#ff4c38",
              "colorName": "coral"
            },
            {
              "name": "chair",
              "description": "Blue plastic seat and backrest. The backrest has three oval-shaped holes.",
              "color": "#6619e0",
              "colorName": "violet"
            },
            {
              "name": "chair legs",
              "description": "Four silver chair legs.",
              "color": "#8ee500",
              "colorName": "lime"
            },
            {
              "name": "book basket",
              "description": "A silver book basket between the chair legs.",
              "color": "#ffc199",
              "colorName": "peach"
            }
          ]
        },
        "input": {
          "kind": "3d",
          "model": "static/assets/p09/3d/input/strokes.glb",
          "orientations": [
            {
              "label": "Initial orientation",
              "image": "static/assets/p09/3d/input/orientation-1.png",
              "isFinal": false
            },
            {
              "label": "Front yaw 220.0°",
              "image": "static/assets/p09/3d/input/orientation-2.png",
              "isFinal": true
            }
          ],
          "frontEdits": [
            220.0
          ],
          "geometryVersions": 1
        },
        "metrics": {
          "generationRounds": 3,
          "candidateCount": 18,
          "imageEdits": 0,
          "frontEdits": 1,
          "compositions": 1,
          "reconstructions": 1,
          "postFinalGenerations": 1
        },
        "edits": [],
        "reconstruction": {
          "attempts": [
            {
              "label": "Hunyuan input",
              "image": "static/assets/p09/3d/reconstruction/attempt-1.png",
              "viewsUsed": [
                "front",
                "left",
                "back",
                "right"
              ],
              "selection": {
                "front": {
                  "sourceView": "front",
                  "candidate": "Trial 6 · Candidate 1",
                  "candidateKey": "trial6__1.png"
                },
                "left": {
                  "sourceView": "left",
                  "candidate": "Trial 6 · Candidate 1",
                  "candidateKey": "trial6__1.png"
                },
                "back": {
                  "sourceView": "back",
                  "candidate": "Trial 6 · Candidate 1",
                  "candidateKey": "trial6__1.png"
                },
                "right": {
                  "sourceView": "right",
                  "candidate": "Trial 6 · Candidate 1",
                  "candidateKey": "trial6__1.png"
                }
              },
              "changes": []
            }
          ],
          "finalModel": "static/assets/p09/3d/reconstruction/final.glb",
          "finalInput": "static/assets/p09/3d/reconstruction/attempt-1.png",
          "finalViews": {
            "front": "static/assets/p09/3d/reconstruction/views/front.png",
            "left": "static/assets/p09/3d/reconstruction/views/left.png",
            "back": "static/assets/p09/3d/reconstruction/views/back.png",
            "right": "static/assets/p09/3d/reconstruction/views/right.png"
          },
          "viewsUsed": [
            "front",
            "left",
            "back",
            "right"
          ],
          "finalSelection": {
            "front": {
              "sourceView": "front",
              "candidate": "Trial 6 · Candidate 1",
              "candidateKey": "trial6__1.png"
            },
            "left": {
              "sourceView": "left",
              "candidate": "Trial 6 · Candidate 1",
              "candidateKey": "trial6__1.png"
            },
            "back": {
              "sourceView": "back",
              "candidate": "Trial 6 · Candidate 1",
              "candidateKey": "trial6__1.png"
            },
            "right": {
              "sourceView": "right",
              "candidate": "Trial 6 · Candidate 1",
              "candidateKey": "trial6__1.png"
            }
          }
        }
      }
    ],
    "thumbnail2d": "static/assets/p09/2d/reconstruction/attempt-1.png",
    "thumbnail3d": "static/assets/p09/3d/reconstruction/attempt-1.png"
  },
  {
    "id": "participant-10",
    "number": 10,
    "label": "Participant 10",
    "referenceImage": "static/assets/reference-school-chair.png",
    "note": "",
    "methods": [
      {
        "type": "2d",
        "title": "2D drawing workflow",
        "specification": {
          "name": "School chair",
          "description": "",
          "parts": [
            {
              "name": "frame",
              "description": "flat, metal silver",
              "color": "#182d23",
              "colorName": ""
            },
            {
              "name": "seat rest",
              "description": "plastic dark blue",
              "color": "#9cc25e",
              "colorName": ""
            },
            {
              "name": "desktop",
              "description": "wooden",
              "color": "#d69d50",
              "colorName": ""
            },
            {
              "name": "chair back",
              "description": "plastic dark blue",
              "color": "#5c7eef",
              "colorName": ""
            },
            {
              "name": "book basket",
              "description": "brown metal",
              "color": "#497159",
              "colorName": ""
            }
          ]
        },
        "input": {
          "kind": "2d",
          "drawings": [
            {
              "image": "static/assets/p10/2d/input/drawing-1.png",
              "view": "Perspective view from front left"
            },
            {
              "image": "static/assets/p10/2d/input/drawing-2.png",
              "view": "Perspective view from front right"
            }
          ]
        },
        "metrics": {
          "generationRounds": 1,
          "candidateCount": 6,
          "imageEdits": 0,
          "frontEdits": 0,
          "compositions": 1,
          "reconstructions": 1,
          "postFinalGenerations": 0
        },
        "edits": [],
        "reconstruction": {
          "attempts": [
            {
              "label": "Hunyuan input",
              "image": "static/assets/p10/2d/reconstruction/attempt-1.png",
              "viewsUsed": [
                "front",
                "left",
                "back",
                "right"
              ],
              "selection": {
                "front": {
                  "sourceView": "front",
                  "candidate": "Trial 2 · Candidate 2",
                  "candidateKey": "trial2__2.png"
                },
                "left": {
                  "sourceView": "left",
                  "candidate": "Trial 2 · Candidate 2",
                  "candidateKey": "trial2__2.png"
                },
                "back": {
                  "sourceView": "back",
                  "candidate": "Trial 2 · Candidate 1",
                  "candidateKey": "trial2__1.png"
                },
                "right": {
                  "sourceView": "right",
                  "candidate": "Trial 2 · Candidate 2",
                  "candidateKey": "trial2__2.png"
                }
              },
              "changes": []
            }
          ],
          "finalModel": "static/assets/p10/2d/reconstruction/final.glb",
          "finalInput": "static/assets/p10/2d/reconstruction/attempt-1.png",
          "finalViews": {
            "front": "static/assets/p10/2d/reconstruction/views/front.png",
            "left": "static/assets/p10/2d/reconstruction/views/left.png",
            "back": "static/assets/p10/2d/reconstruction/views/back.png",
            "right": "static/assets/p10/2d/reconstruction/views/right.png"
          },
          "viewsUsed": [
            "front",
            "left",
            "back",
            "right"
          ],
          "finalSelection": {
            "front": {
              "sourceView": "front",
              "candidate": "Trial 2 · Candidate 2",
              "candidateKey": "trial2__2.png"
            },
            "left": {
              "sourceView": "left",
              "candidate": "Trial 2 · Candidate 2",
              "candidateKey": "trial2__2.png"
            },
            "back": {
              "sourceView": "back",
              "candidate": "Trial 2 · Candidate 1",
              "candidateKey": "trial2__1.png"
            },
            "right": {
              "sourceView": "right",
              "candidate": "Trial 2 · Candidate 2",
              "candidateKey": "trial2__2.png"
            }
          }
        }
      },
      {
        "type": "3d",
        "title": "3D spatial workflow",
        "specification": {
          "name": "School chair",
          "description": "",
          "parts": [
            {
              "name": "seat rest",
              "description": "plastic dark blue",
              "color": "#ff4c38",
              "colorName": "coral"
            },
            {
              "name": "book basket",
              "description": "brown metal",
              "color": "#6619e0",
              "colorName": "violet"
            },
            {
              "name": "chair back",
              "description": "plastic dark blue",
              "color": "#f484b7",
              "colorName": "rose pink"
            },
            {
              "name": "desktop",
              "description": "wooden",
              "color": "#ffc199",
              "colorName": "peach"
            },
            {
              "name": "frame",
              "description": "flat, metal silver",
              "color": "#111966",
              "colorName": "navy"
            }
          ]
        },
        "input": {
          "kind": "3d",
          "model": "static/assets/p10/3d/input/strokes.glb",
          "orientations": [
            {
              "label": "Initial orientation",
              "image": "static/assets/p10/3d/input/orientation-1.png",
              "isFinal": false
            },
            {
              "label": "Front yaw 40.0°",
              "image": "static/assets/p10/3d/input/orientation-2.png",
              "isFinal": true
            }
          ],
          "frontEdits": [
            40.0
          ],
          "geometryVersions": 1
        },
        "metrics": {
          "generationRounds": 1,
          "candidateCount": 6,
          "imageEdits": 0,
          "frontEdits": 1,
          "compositions": 2,
          "reconstructions": 2,
          "postFinalGenerations": 0
        },
        "edits": [],
        "reconstruction": {
          "attempts": [
            {
              "label": "Hunyuan input v1",
              "image": "static/assets/p10/3d/reconstruction/attempt-1.png",
              "viewsUsed": [
                "front",
                "left",
                "back",
                "right"
              ],
              "selection": {
                "front": {
                  "sourceView": "front",
                  "candidate": "Trial 3 · Candidate 2",
                  "candidateKey": "trial3__2.png"
                },
                "left": {
                  "sourceView": "left",
                  "candidate": "Trial 3 · Candidate 2",
                  "candidateKey": "trial3__2.png"
                },
                "back": {
                  "sourceView": "back",
                  "candidate": "Trial 3 · Candidate 1",
                  "candidateKey": "trial3__1.png"
                },
                "right": {
                  "sourceView": "right",
                  "candidate": "Trial 3 · Candidate 2",
                  "candidateKey": "trial3__2.png"
                }
              },
              "changes": []
            },
            {
              "label": "Hunyuan input v2",
              "image": "static/assets/p10/3d/reconstruction/attempt-2.png",
              "viewsUsed": [
                "front",
                "left",
                "back",
                "right"
              ],
              "selection": {
                "front": {
                  "sourceView": "front",
                  "candidate": "Trial 3 · Candidate 1",
                  "candidateKey": "trial3__1.png"
                },
                "left": {
                  "sourceView": "left",
                  "candidate": "Trial 3 · Candidate 2",
                  "candidateKey": "trial3__2.png"
                },
                "back": {
                  "sourceView": "back",
                  "candidate": "Trial 3 · Candidate 1",
                  "candidateKey": "trial3__1.png"
                },
                "right": {
                  "sourceView": "right",
                  "candidate": "Trial 3 · Candidate 2",
                  "candidateKey": "trial3__2.png"
                }
              },
              "changes": [
                {
                  "view": "front",
                  "kind": "changed"
                }
              ]
            }
          ],
          "finalModel": "static/assets/p10/3d/reconstruction/final.glb",
          "finalInput": "static/assets/p10/3d/reconstruction/attempt-2.png",
          "finalViews": {
            "front": "static/assets/p10/3d/reconstruction/views/front.png",
            "left": "static/assets/p10/3d/reconstruction/views/left.png",
            "back": "static/assets/p10/3d/reconstruction/views/back.png",
            "right": "static/assets/p10/3d/reconstruction/views/right.png"
          },
          "viewsUsed": [
            "front",
            "left",
            "back",
            "right"
          ],
          "finalSelection": {
            "front": {
              "sourceView": "front",
              "candidate": "Trial 3 · Candidate 1",
              "candidateKey": "trial3__1.png"
            },
            "left": {
              "sourceView": "left",
              "candidate": "Trial 3 · Candidate 2",
              "candidateKey": "trial3__2.png"
            },
            "back": {
              "sourceView": "back",
              "candidate": "Trial 3 · Candidate 1",
              "candidateKey": "trial3__1.png"
            },
            "right": {
              "sourceView": "right",
              "candidate": "Trial 3 · Candidate 2",
              "candidateKey": "trial3__2.png"
            }
          }
        }
      }
    ],
    "thumbnail2d": "static/assets/p10/2d/reconstruction/attempt-1.png",
    "thumbnail3d": "static/assets/p10/3d/reconstruction/attempt-2.png"
  }
];
