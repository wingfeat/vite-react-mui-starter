import { createTheme } from "@mui/material/styles";

// Brand colors: the only values to change for a new project.
// Dark mode uses lighter tints, so the colors stay readable on a dark background.
export const BRAND_COLORS = {
  light: {
    primary: "#2563eb",
    secondary: "#7c3aed",
    neutral: "#475569",
  },
  dark: {
    primary: "#60a5fa",
    secondary: "#a78bfa",
    neutral: "#94a3b8",
  },
};

// Every color usable with the `color` prop (Button, Chip, Alert...).
// Add a new custom color here so the soft variant and the showcase follow.
export const THEME_COLORS = [
  "primary",
  "secondary",
  "neutral",
  "error",
  "warning",
  "info",
  "success",
];

// WCAG AA: text on a colored background needs a 4.5:1 contrast ratio.
// MUI's default threshold is 3, which can pick white text on light colors.
const CONTRAST_THRESHOLD = 4.5;

// MUI only computes light, dark and contrastText for its own colors.
// augmentColor does it for a custom color (here: neutral).
const { augmentColor } = createTheme({
  palette: { contrastThreshold: CONTRAST_THRESHOLD },
}).palette;

function createPalette(colors, background) {
  return {
    primary: { main: colors.primary },
    secondary: { main: colors.secondary },
    neutral: augmentColor({ color: { main: colors.neutral }, name: "neutral" }),
    background,
    contrastThreshold: CONTRAST_THRESHOLD,
  };
}

export const lightPalette = createPalette(BRAND_COLORS.light, {
  default: "#f8fafc",
  paper: "#ffffff",
});

export const darkPalette = createPalette(BRAND_COLORS.dark, {
  default: "#0f172a",
  paper: "#1e293b",
});
