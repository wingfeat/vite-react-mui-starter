import { createTheme } from "@mui/material/styles";

// Softer shadows than MUI's defaults, all tinted with the same dark slate.
const SHADOW_COLOR = "15, 23, 42";

// Only the elevations used by MUI components are customized:
// 1 Card / Paper, 2 raised Button, 4 AppBar, 8 Menu / Popover,
// 16 Drawer, 24 Dialog. Every other level keeps MUI's default.
const CUSTOM_SHADOWS = {
  1: `0 1px 2px rgba(${SHADOW_COLOR}, 0.06), 0 1px 3px rgba(${SHADOW_COLOR}, 0.1)`,
  2: `0 2px 4px rgba(${SHADOW_COLOR}, 0.06), 0 4px 6px rgba(${SHADOW_COLOR}, 0.1)`,
  4: `0 4px 6px rgba(${SHADOW_COLOR}, 0.05), 0 10px 15px rgba(${SHADOW_COLOR}, 0.1)`,
  8: `0 8px 10px rgba(${SHADOW_COLOR}, 0.04), 0 20px 25px rgba(${SHADOW_COLOR}, 0.1)`,
  16: `0 12px 16px rgba(${SHADOW_COLOR}, 0.06), 0 25px 50px rgba(${SHADOW_COLOR}, 0.15)`,
  24: `0 20px 25px rgba(${SHADOW_COLOR}, 0.08), 0 35px 60px rgba(${SHADOW_COLOR}, 0.2)`,
};

// MUI expects an array of 25 shadows (index 0 = "none"):
// copy the defaults, then replace the customized levels.
const shadows = [...createTheme().shadows];

Object.entries(CUSTOM_SHADOWS).forEach(([level, shadow]) => {
  shadows[level] = shadow;
});

export default shadows;
