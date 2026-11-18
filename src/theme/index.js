import { createTheme } from "@mui/material/styles";
import { darkPalette, lightPalette } from "./palette.js";
import typography from "./typography.js";
import shape from "./shape.js";
import shadows from "./shadows.js";
import components from "./components.js";

// spacing (8px), breakpoints (xs 0, sm 600, md 900, lg 1200, xl 1536)
// and transitions keep MUI's defaults: they suit most projects.

const theme = createTheme({
  // Colors become CSS variables (--mui-palette-primary-main...).
  // Switching mode only changes a class on <html>: no re-render, no flicker.
  cssVariables: { colorSchemeSelector: "class" },
  colorSchemes: {
    light: { palette: lightPalette },
    dark: { palette: darkPalette },
  },
  typography,
  shape,
  shadows,
  components,
});

export default theme;
