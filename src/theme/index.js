import { createTheme } from "@mui/material/styles";
import palette, { BRAND_COLORS } from "./palette.js";
import typography from "./typography.js";

// Step 1: the base theme, built from the plain option objects.
const baseTheme = createTheme({ palette, typography });

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
