import { THEME_COLORS } from "./palette.js";

const components = {
  // Styles read theme.vars (CSS variables) so they follow the light/dark mode.
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
          outline: `2px solid ${theme.vars.palette.primary.main}`,
          outlineOffset: 2,
        },
        // Custom variant: <Button variant="soft" color="...">
        // A tinted background, with dark text (light mode) or light text (dark mode).
        variants: THEME_COLORS.map((color) => ({
          props: { variant: "soft", color },
          style: {
            color: theme.vars.palette[color].dark,
            backgroundColor: theme.alpha(theme.vars.palette[color].main, 0.12),
            "&:hover": {
              backgroundColor: theme.alpha(theme.vars.palette[color].main, 0.2),
            },
            ...theme.applyStyles("dark", {
              color: theme.vars.palette[color].light,
            }),
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
        backgroundColor: theme.vars.palette.background.paper,
        borderBottom: `1px solid ${theme.vars.palette.divider}`,
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
