import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Button, ThemeProvider } from "@mui/material";
import { alpha } from "@mui/material/styles";
import theme from "../src/theme/index.js";

function renderWithTheme(ui) {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
}

describe("Button soft variant", () => {
  it("uses a light tint of the color as background", () => {
    renderWithTheme(
      <Button variant="soft" color="neutral">
        Soft
      </Button>,
    );

    const button = screen.getByRole("button", { name: "Soft" });
    const lightNeutral = theme.colorSchemes.light.palette.neutral.main;
    const expected = alpha(lightNeutral, 0.12).replace(/\s/g, "");

    expect(getComputedStyle(button).backgroundColor.replace(/\s/g, "")).toBe(
      expected,
    );
  });
});
