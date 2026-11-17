import { alpha } from "@mui/material/styles";
import { THEME_COLORS } from "./palette.js";

const components = {
  // Global styles, added by <CssBaseline />.
  MuiCssBaseline: {
    styleOverrides: {
      // Respect the OS setting "reduce motion" everywhere in the app.
      "@media (prefers-reduced-motion: reduce)": {
        "*, *::before, *::after": {
          animationDuration: "0.01ms !important",
          animationIterationCount: "1 !important",
          transitionDuration: "0.01ms !important",
          scrollBehavior: "auto !important",
        },
      },
    },
  },

  MuiButton: {
    defaultProps: {
      disableElevation: true,
      disableFocusRipple: true,
    },
    styleOverrides: {
      root: ({ theme }) => ({
        // Visible keyboard focus (accessibility).
        "&.Mui-focusVisible": {
          outline: `2px solid ${theme.palette.primary.main}`,
          outlineOffset: 2,
        },
        // Custom variant: <Button variant="soft" color="...">
        // A light tinted background with dark text, one rule per color.
        variants: THEME_COLORS.map((color) => ({
          props: { variant: "soft", color },
          style: {
            color: theme.palette[color].dark,
            backgroundColor: alpha(theme.palette[color].main, 0.12),
            "&:hover": {
              backgroundColor: alpha(theme.palette[color].main, 0.2),
            },
          },
        })),
      }),
    },
  },

  MuiAppBar: {
    defaultProps: {
      elevation: 0,
      color: "inherit",
    },
    styleOverrides: {
      root: ({ theme }) => ({
        backgroundColor: theme.palette.background.paper,
        borderBottom: `1px solid ${theme.palette.divider}`,
      }),
    },
  },

  MuiCard: {
    defaultProps: {
      variant: "outlined",
    },
  },

  MuiTextField: {
    defaultProps: {
      fullWidth: true,
    },
  },

  MuiLink: {
    defaultProps: {
      underline: "hover",
    },
  },
};

export default components;
