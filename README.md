# My Portfolio

Personal portfolio site built with React + TypeScript + Redux (bundled with Vite): "About", "Portfolio",
"Technologies stack" and "Contacts" sections, multi-language support (react-redux-multilingual),
and smooth scroll animations (AOS).

**Demo:** https://oleg-irchishyn.github.io/my-portfolio/

## Getting started

Requires Node.js 20+.

```bash
npm install
npm run dev
```

The app runs at http://localhost:3000/. The `/my-portfolio/` base path (needed for GitHub Pages)
is only applied in the production build, not in dev.

Other scripts:

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Type-check and build for production into `build/` |
| `npm run preview` | Serve the production build locally |
| `npm run test` | Run the Vitest test suite |
| `npm run watch` | Start `json-server` (mock API from `db.json`) on port 3001 |

## Deploying to GitHub Pages

```bash
npm run deploy
```

This runs `predeploy` (`npm run build`) and then publishes the `build/` folder to the `gh-pages`
branch via the [`gh-pages`](https://www.npmjs.com/package/gh-pages) package, using the `homepage`
field in `package.json` as the target URL.

## Projects featured in the portfolio

**React.js + json-server (fullstack)**
- [Gambling Quiz](https://oleg-irchishyn.github.io/React_Quiz/web/)
- [Pizza E-Shop](https://oleg-irchishyn.github.io/React_Pizza/web/)
- [Sneakers E-Shop](https://oleg-irchishyn.github.io/React-Sneakers-Eshop/web/#/)
- [Todo List](https://oleg-irchishyn.github.io/ReactJS_ToDo_List/web/)

**Webpack (frontend-only landing pages)**
- [Fjord Landing](https://oleg-irchishyn.github.io/Fjord_Landing/web/)
- [Diamond Drilling Services Landing Page](https://oleg-irchishyn.github.io/Almazok/web/)
- [Up Real Estate Landing](https://oleg-irchishyn.github.io/Up_Real_Estate/web/)
- [Smile Expo's New Design](https://oleg-irchishyn.github.io/smile-expo-proto/web/)
