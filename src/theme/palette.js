// Brand colors: the only values to change for a new project.
// MUI computes light, dark and contrastText from each `main`.
export const BRAND_COLORS = {
  primary: "#2563eb",
  secondary: "#7c3aed",
  neutral: "#475569",
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

const palette = {
  primary: { main: BRAND_COLORS.primary },
  secondary: { main: BRAND_COLORS.secondary },
  background: {
    default: "#f8fafc",
    paper: "#ffffff",
  },
  // WCAG AA: text on a colored background needs a 4.5:1 contrast ratio.
  // MUI's default threshold is 3, which can pick white text on light colors.
  contrastThreshold: 4.5,
};

export default palette;
