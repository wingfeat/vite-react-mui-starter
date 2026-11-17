import { describe, expect, it } from "vitest";
import theme from "../src/theme/index.js";
import { BRAND_COLORS } from "../src/theme/palette.js";

describe("theme palette", () => {
  it("uses the brand colors as main colors", () => {
    expect(theme.palette.primary.main).toBe(BRAND_COLORS.primary);
    expect(theme.palette.secondary.main).toBe(BRAND_COLORS.secondary);
  });

  it("generates every shade of the custom neutral color", () => {
    const { neutral } = theme.palette;

    expect(neutral.main).toBe(BRAND_COLORS.neutral);
    expect(neutral.light).toBeDefined();
    expect(neutral.dark).toBeDefined();
    expect(neutral.contrastText).toBeDefined();
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
