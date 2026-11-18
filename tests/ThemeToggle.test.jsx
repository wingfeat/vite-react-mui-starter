import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeProvider } from "@mui/material";
import theme from "../src/theme/index.js";
import ThemeToggle from "../src/components/ui/ThemeToggle.jsx";

// jsdom has no window.matchMedia: MUI needs it to read the OS mode.
function mockSystemMode(systemMode) {
  window.matchMedia = vi.fn((query) => ({
    matches: systemMode === "dark" && query.includes("dark"),
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }));
}

function renderToggle() {
  render(
    <ThemeProvider theme={theme}>
      <ThemeToggle />
    </ThemeProvider>,
  );
}

describe("ThemeToggle", () => {
  beforeEach(() => {
    // MUI saves the chosen mode in localStorage: start each test from scratch.
    localStorage.clear();
  });

  afterEach(() => {
    document.documentElement.className = "";
  });

  it("offers dark mode when the system is light", async () => {
    mockSystemMode("light");
    renderToggle();

    expect(
      await screen.findByRole("button", { name: "Switch to dark mode" }),
    ).toBeInTheDocument();
  });

  it("offers light mode when the system is dark", async () => {
    mockSystemMode("dark");
    renderToggle();

    expect(
      await screen.findByRole("button", { name: "Switch to light mode" }),
    ).toBeInTheDocument();
  });

  it("switches to dark mode on click", async () => {
    const user = userEvent.setup();
    mockSystemMode("light");
    renderToggle();

    await user.click(
      await screen.findByRole("button", { name: "Switch to dark mode" }),
    );

    expect(document.documentElement).toHaveClass("dark");
    expect(
      screen.getByRole("button", { name: "Switch to light mode" }),
    ).toBeInTheDocument();
  });
});
