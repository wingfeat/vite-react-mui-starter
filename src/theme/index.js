import { createTheme } from "@mui/material/styles";
import palette, { BRAND_COLORS } from "./palette.js";
import typography from "./typography.js";
import shape from "./shape.js";
import shadows from "./shadows.js";
import components from "./components.js";

// spacing (8px), breakpoints (xs 0, sm 600, md 900, lg 1200, xl 1536)
// and transitions keep MUI's defaults: they suit most projects.

// Step 1: the base theme, built from the plain option objects.
const baseTheme = createTheme({
  palette,
  typography,
  shape,
  shadows,
  components,
});

// Step 2: custom colors need the base theme's augmentColor
// to get their light, dark and contrastText shades.
const theme = createTheme(baseTheme, {
  palette: {
    neutral: baseTheme.palette.augmentColor({
      color: { main: BRAND_COLORS.neutral },
      name: "neutral",
    }),
  },
});

export default theme;
