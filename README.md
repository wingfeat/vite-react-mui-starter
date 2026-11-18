# Vite React MUI Starter

A starter template for React projects: Vite, Material UI with a complete design system (light and dark mode), React Router, and Vitest with React Testing Library, ready to use.

Built while following the [The Odin Project](https://www.theodinproject.com/) Full Stack JavaScript path, to start every new project from a clean, tested base.

## Features

- **Design system** in `src/theme/`: brand colors, fluid typography, spacing, radius, shadows and component defaults, all in one place
- **Light and dark mode** with MUI color schemes and CSS variables, a toggle button, and the user's choice saved
- **Design system page** (`/design-system`) showing every color, text style, button, elevation and common component
- **Routing** with a shared layout, a responsive app bar with a burger menu on small screens, and an error page
- **Accessible by default**: WCAG AA contrast for text on colors, visible keyboard focus, reduced motion respected
- **Tests** for the theme, the layout, the routes and the theme toggle
- **Formatting and linting** with Prettier and ESLint
- **Ready for Vercel**, including page refresh on any route

## Built with

- [React](https://react.dev/) and [Vite](https://vite.dev/)
- [Material UI](https://mui.com/material-ui/) and [Material Icons](https://mui.com/material-ui/material-icons/)
- [React Router](https://reactrouter.com/)
- [Vitest](https://vitest.dev/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/)

## Start a new project from this template

1. On GitHub, click **Use this template** → **Create a new repository**, then clone it:

   ```bash
   git clone https://github.com/<your-username>/<new-project>.git
   cd <new-project>
   npm install
   npm run dev
   ```

2. Make it yours, in this order:

   | What                         | Where                                      |
   | ---------------------------- | ------------------------------------------ |
   | Project name                 | `name` in `package.json`                   |
   | Browser tab title            | `<title>` in `index.html`                  |
   | Favicon                      | `public/favicon.svg`                       |
   | App name in the app bar      | `Layout.jsx` (`src/components/layout/`)    |
   | Brand colors, light and dark | `BRAND_COLORS` in `src/theme/palette.js`   |
   | Font                         | `FONT_FAMILY` in `src/theme/typography.js` |
   | Navigation links             | `NAV_LINKS` in `Layout.jsx`                |
   | Pages and routes             | `src/pages/` and `src/routes.jsx`          |
   | This README                  | `README.md`                                |

3. Open `/design-system` to check the result, in both light and dark mode.

4. Keep the design system page while building, or remove it before deploying: delete `src/pages/DesignSystem.jsx`, `src/components/design-system/`, `tests/DesignSystem.test.jsx`, its route and its link.

## Scripts

| Command                | What it does                                 |
| ---------------------- | -------------------------------------------- |
| `npm run dev`          | starts the development server                |
| `npm run build`        | builds the app into `dist/`                  |
| `npm run preview`      | serves the built app locally                 |
| `npm test`             | runs the tests in watch mode                 |
| `npm run test:run`     | runs the tests once                          |
| `npm run lint`         | checks the code with ESLint                  |
| `npm run format`       | formats every file with Prettier             |
| `npm run format:check` | checks the formatting without changing files |

## Project structure

```
src/
├── theme/                    ← the design system (no JSX: .js files)
│   ├── index.js              ← assembles everything with createTheme
│   ├── palette.js            ← brand colors, light and dark palettes
│   ├── typography.js         ← font and text scale
│   ├── shape.js              ← border radius
│   ├── shadows.js            ← elevation scale
│   └── components.js         ← component defaults and custom variants
├── pages/                    ← one component per route
│   ├── Home.jsx
│   ├── DesignSystem.jsx
│   └── ErrorPage.jsx
├── components/
│   ├── layout/Layout.jsx     ← app bar, burger menu, <Outlet />
│   ├── ui/                   ← reusable components (ThemeToggle)
│   └── design-system/        ← sections of the design system page
├── routes.jsx                ← the route list (shared with the tests)
└── main.jsx                  ← ThemeProvider > CssBaseline > RouterProvider
tests/                        ← one test file per component or module
```

Add `src/api/` for network calls and `src/utils/` for helper functions when the project needs them.

## Design system

### Colors

Only `main` is set for each color: MUI computes `light`, `dark` and `contrastText`. The custom `neutral` color gets its shades from `augmentColor`.

`THEME_COLORS` in `palette.js` lists every color usable with the `color` prop. Add a new custom color there and to both palettes: the `soft` button variant and the design system page follow automatically.

`contrastThreshold` is set to **4.5** (WCAG AA), so MUI picks a readable text color on every colored background.

### Light and dark mode

The theme uses `colorSchemes` with `cssVariables`: colors are CSS variables, and switching mode only changes a class on `<html>`.

- In styles, read colors from **`theme.vars.palette`** (or with `sx` shortcuts such as `"primary.main"`), never from `theme.palette`, which stays on the light values.
- Use **`theme.alpha()`** for transparency and **`theme.applyStyles("dark", {...})`** for dark-only styles.
- Read a precise value of one mode with `theme.colorSchemes.light.palette` or `theme.colorSchemes.dark.palette`.
- `useColorScheme()` gives `mode` (`"light"`, `"dark"` or `"system"`), `systemMode` and `setMode`. The default mode is `"system"`.

### Typography

System fonts (no download). `h1` to `h4` are fluid with `clamp()`: the middle value mixes `rem` and `vw` so the text still grows when the user zooms. Body text stays at `1rem` (16px). Button labels keep their original case.

### Shape and shadows

- `theme.shape.borderRadius` is **8px**. In `sx`, `borderRadius: 2` means 2 × 8px.
- `theme.shape.borderPill` (`"999px"`) gives fully rounded ends: `borderRadius: (theme) => theme.shape.borderPill`.
- `theme.shadows` keeps MUI's array of 25 levels; levels 1, 2, 4, 8, 16 and 24 (used by Card, Button, AppBar, Menu, Drawer and Dialog) are softer custom shadows.

### Components

| Component     | Default                                                                                               |
| ------------- | ----------------------------------------------------------------------------------------------------- |
| `Button`      | flat (`disableElevation`), no focus ripple, visible keyboard focus outline, custom **`soft`** variant |
| `AppBar`      | no shadow, paper background, bottom border                                                            |
| `Card`        | `outlined`                                                                                            |
| `TextField`   | `fullWidth`                                                                                           |
| `Link`        | underlined on hover                                                                                   |
| `CssBaseline` | animations and transitions disabled when the user prefers reduced motion                              |

```jsx
<Button variant="soft" color="success">
  Saved
</Button>
```

## Tests

```bash
npm run test:run
```

| File                    | What is tested                                                                              |
| ----------------------- | ------------------------------------------------------------------------------------------- |
| `theme.test.js`         | brand colors in both modes, neutral shades, CSS variables, shape, shadows, fluid typography |
| `components.test.jsx`   | the `soft` button variant                                                                   |
| `Layout.test.jsx`       | routes, navigation, error page, burger menu                                                 |
| `ThemeToggle.test.jsx`  | the toggle label for each system mode, and switching to dark mode                           |
| `DesignSystem.test.jsx` | one heading per section of the design system page                                           |

Testing tips for this setup:

- Wrap components in `ThemeProvider` with the project theme, and use `createMemoryRouter(routes, { initialEntries: [path] })` for routed components.
- jsdom applies every media query: an element hidden on desktop (`display: { md: "none" }`) is hidden in tests too. Find it with `getByLabelText` instead of `getByRole`.
- jsdom has no `window.matchMedia`: mock it to test the system mode (see `ThemeToggle.test.jsx`).
- While a `Drawer` or `Dialog` is open, MUI hides the rest of the page from screen readers: wait for it to close before querying the page.

## Deployment

On [Vercel](https://vercel.com/): import the repository, framework preset **Vite** (or _Other_ with `npm run build` and output `dist`). `vercel.json` sends every route to `index.html`, so refreshing `/design-system` does not return a 404.
