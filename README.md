# WorldHomeopathy.org

Working website for WorldHomeopathy.org.

The goal is to make this feel like a global homeopathy platform first. Burnett Homeopathy is included indirectly through summit activity, research initiatives, media coverage, and leadership references.

## Run locally

```bash
npm install
npm run dev
```

On Windows PowerShell, if `npm` is blocked:

```bash
npm.cmd install
npm.cmd run dev
```

Open the local URL that Vite prints in the terminal, usually:

```text
http://127.0.0.1:5173
```

## Main files

- `src/App.jsx` - website sections and content
- `src/pages/` - individual pages for Home, Explore, Summit, Research, Leaders, Directory, Media, and Contact
- `src/data/siteData.js` - shared website content and profile data
- `src/styles.css` - UI design and responsive layout
- `research/` - planning notes and source material

## Pages

- `/` - homepage
- `/explore` - Explore Homeopathy knowledge hub
- `/summit` - World Homeopathy Summit platform
- `/research` - Global Homeopathy Research Center
- `/leaders` - Global Leaders directory
- `/directory` - Country directory and world map
- `/media` - Media coverage
- `/contact` - Contact and participation

## Build check

```bash
npm run build
```
