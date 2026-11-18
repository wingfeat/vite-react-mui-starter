import { describe, expect, it } from "vitest";
import theme from "../src/theme/index.js";
import { BRAND_COLORS } from "../src/theme/palette.js";

describe.each(["light", "dark"])("theme palette (%s mode)", (mode) => {
  const { palette } = theme.colorSchemes[mode];

  it("uses the brand colors as main colors", () => {
    expect(palette.primary.main).toBe(BRAND_COLORS[mode].primary);
    expect(palette.secondary.main).toBe(BRAND_COLORS[mode].secondary);
  });

  it("generates every shade of the custom neutral color", () => {
    const { neutral } = palette;

    expect(neutral.main).toBe(BRAND_COLORS[mode].neutral);
    expect(neutral.light).toBeDefined();
    expect(neutral.dark).toBeDefined();
    expect(neutral.contrastText).toBeDefined();
  });
});

describe("theme color schemes", () => {
  it("exposes the colors as CSS variables", () => {
    expect(theme.vars.palette.primary.main).toMatch(
      /^var\(--mui-palette-primary-main/,
    );
  });

  it("uses a dark background in dark mode", () => {
    expect(theme.colorSchemes.dark.palette.background.default).toBe("#0f172a");
  });
});

describe("theme shape and shadows", () => {
  it("defines a pill radius next to the default radius", () => {
    expect(theme.shape.borderRadius).toBe(8);
    expect(theme.shape.borderPill).toBe("999px");
  });

  it("keeps the 25 MUI shadow levels, with no shadow at level 0", () => {
    expect(theme.shadows).toHaveLength(25);
    expect(theme.shadows[0]).toBe("none");
  });
});

describe("theme typography", () => {
  it("keeps button labels in their original case", () => {
    expect(theme.typography.button.textTransform).toBe("none");
  });

  it("uses fluid sizes that still grow with zoom for the big headings", () => {
    ["h1", "h2", "h3", "h4"].forEach((variant) => {
      const { fontSize } = theme.typography[variant];

      expect(fontSize).toMatch(/^clamp\(/);
      expect(fontSize).toMatch(/rem \+ [\d.]+vw/);
    });
  });
});
