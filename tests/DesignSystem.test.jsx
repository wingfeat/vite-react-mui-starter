import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "@mui/material";
import theme from "../src/theme/index.js";
import DesignSystem from "../src/pages/DesignSystem.jsx";

describe("DesignSystem page", () => {
  it("shows one heading per section", () => {
    render(
      <ThemeProvider theme={theme}>
        <DesignSystem />
      </ThemeProvider>,
    );

    [
      "Colors",
      "Typography",
      "Buttons",
      "Shape and elevation",
      "Components",
    ].forEach((title) => {
      expect(
        screen.getByRole("heading", { level: 2, name: title }),
      ).toBeInTheDocument();
    });
  });
});
