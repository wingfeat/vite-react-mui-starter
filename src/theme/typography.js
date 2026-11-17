// System fonts: no download, and each OS shows its own native font.
const FONT_FAMILY = [
  "system-ui",
  "-apple-system",
  '"Segoe UI"',
  "Roboto",
  '"Helvetica Neue"',
  "Arial",
  "sans-serif",
].join(",");

// Fluid headings: clamp(size on a 360px phone, rem + vw, size on a 1200px screen).
// The middle value mixes rem and vw so the text still grows when the user zooms.
// Small sizes (h5 and below) barely change, so they stay fixed.
const typography = {
  fontFamily: FONT_FAMILY,
  h1: {
    fontSize: "clamp(1.875rem, 1.5rem + 1.667vw, 2.75rem)",
    fontWeight: 800,
    lineHeight: 1.15,
  },
  h2: {
    fontSize: "clamp(1.625rem, 1.357rem + 1.19vw, 2.25rem)",
    fontWeight: 800,
    lineHeight: 1.2,
  },
  h3: {
    fontSize: "clamp(1.375rem, 1.161rem + 0.952vw, 1.875rem)",
    fontWeight: 700,
    lineHeight: 1.25,
  },
  h4: {
    fontSize: "clamp(1.25rem, 1.143rem + 0.476vw, 1.5rem)",
    fontWeight: 700,
    lineHeight: 1.3,
  },
  h5: { fontSize: "1.25rem", fontWeight: 600, lineHeight: 1.4 },
  h6: { fontSize: "1.125rem", fontWeight: 600, lineHeight: 1.4 },
  body1: { fontSize: "1rem", lineHeight: 1.6 },
  body2: { fontSize: "0.875rem", lineHeight: 1.6 },
  button: { fontWeight: 600, textTransform: "none" },
};

export default typography;
