# Design QA — Omkar Pagade interactive portfolio

## Comparison target and evidence

- **Source visual truth:** `C:\Users\lenovo\Downloads\WhatsApp Image 2026-11-09 at 1.54.53 PM.jpeg` (1170 × 2532 px original; the conversation preview was resized to 946 × 2048 px).
- **Implementation:** `http://127.0.0.1:4173/index.html` served from this project. The implementation screenshot was captured in the Codex in-app browser and reviewed inline; the browser capture API did not provide a filesystem export path.
- **Desktop capture:** 1440 × 900 CSS px, device scale factor 1, dark theme, expanded constellation. Browser-rendered screenshot captured after the graph was activated.
- **Mobile capture:** 390 × 844 CSS px, device scale factor 1, dark theme, expanded constellation. The graph scrolls vertically and the profile panel follows it.
- **State:** Updated hero, profile panel visible, 13 live GitHub project links. Project list and skill controls were checked in the rendered page. Opening the core and selecting “Cloud & AWS” updated the expanded/selected states. All 13 project nodes resolved to Omkar's GitHub account. Console error log was empty.
- **Full-view comparison:** The source places a glowing center node, connected category nodes, and a dense detail panel on a dark canvas. The implementation carries that composition into the portfolio's first screen: center profile orb, four skill branches, direct project nodes, and a right profile/learning sidebar. The source is a framed portrait capture while the primary implementation target is desktop, so this is a structural comparison rather than a pixel-matched viewport.
- **Focused region comparison:** The graph and detail panel were reviewed at desktop and mobile sizes. A separate crop was not needed: the requested changes concern the complete network composition and the attachment's internal screen is too small to establish exact typography or card copy.

## Findings

No actionable P0, P1, or P2 differences found for the requested adaptation.

### Required fidelity surfaces

- **Typography:** Existing DM Sans and DM Mono UI type remain in use, with the portfolio's serif display face retained for the title. The attached dashboard uses compact sans-serif labels; the title is an intentional carry-through from the existing portfolio. Small project labels fit on desktop and wrap on narrow screens.
- **Spacing and layout:** Desktop uses a wide graph with four skill branches and a profile sidebar. Mobile stacks the sidebar after a vertically expanded graph. Both layouts keep the profile node and graph controls usable.
- **Colors and tokens:** The near-black background and electric blue orb/links follow the reference. Low-contrast secondary labels are retained from the portfolio's dark theme; selected nodes gain a brighter blue border.
- **Image quality and assets:** The center orb contains no portrait; it is formed by the animated 3D particle field. The profile portrait remains in the sidebar. Graph connections are rendered as animation/data visualization to meet the interaction request.
- **Copy and content:** Name, Pune location, BCA education, IT support/infrastructure experience, résumé, email, GitHub, and project links come from the existing site. “Learning now” is presented as Terraform, Ansible, Docker, and AWS deployment practice based on the existing résumé/project material.

## Comparison history

- Initial visual review: no P0/P1/P2 mismatches found. The desktop composition and mobile adaptation were inspected after implementation; no visual correction was required after those captures.
- Follow-up request: removed the portrait from the center node and changed the orb itself to a rotating, twinkling particle sphere. Arranged desktop skills and project links along a right-facing half-circle and staggered their reveal. Replaced project fading with a persistent related-project glow on skill selection; all other nodes stay visible.
- Post-fix browser evidence: desktop 1440 × 900 CSS px and mobile 390 × 844 CSS px expanded network captures show the particle-only orb and semicircular desktop arrangement. On both sizes, selecting “Cloud & AWS” leaves all 13 project nodes at opacity 1 while six related links receive the glow class. Console errors: none.

## Follow-up polish

- The attached image shows dense detail in its original UI, but that detail is not legible at the supplied screenshot scale. Project labels use compact text to preserve the network overview.
- The hover path is implemented for mouse users; click/tap activation provides an equivalent accessible path.

final result: passed
