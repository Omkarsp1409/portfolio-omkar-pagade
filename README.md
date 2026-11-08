# Omkar Pagade — Cloud / Infrastructure Portfolio

A responsive, static portfolio site made with HTML, CSS, and vanilla JavaScript. It includes a switchable light/dark theme, a scroll-responsive Agile loop illustration, an animated cursor for fine-pointer devices, a responsive mobile menu, resume content, and all current project links.

## Preview

Open `index.html` directly in a browser or serve this folder with any static web server. No build tools or local dependencies are required. Bootstrap Icons and the Inter/DM Mono fonts load from their CDNs.

## Resume and images

The resume is `omkar_resume_27-09-2026.pdf`. The edited profile portrait, generated Agile loop emblem, and project illustrations are in `assets/`; keep that folder beside `index.html` when publishing.

## Updating the site

- Update profile details, experience, education, and contact links in `index.html`.
- Update project summaries, tags, and repository URLs in the `projects` array in `script.js`.
- Update design tokens and layouts in `styles.css`.

The scroll object and custom cursor are progressive enhancements. The page remains usable without WebGL, and scroll/cursor motion is disabled for reduced-motion preferences or coarse pointers.

The contact links open the visitor's email app or phone app; no backend form is used.
