import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMemoryRouter, RouterProvider } from "react-router";
import { ThemeProvider } from "@mui/material";
import theme from "../src/theme/index.js";
import routes from "../src/routes.jsx";

function renderAt(path) {
  const router = createMemoryRouter(routes, { initialEntries: [path] });
  render(
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>,
  );
}

describe("Layout", () => {
  it("shows the home page at /", () => {
    renderAt("/");

    expect(screen.getByRole("heading", { name: "Home" })).toBeInTheDocument();
  });

  it("navigates to the design system page", async () => {
    const user = userEvent.setup();
    renderAt("/");

    await user.click(screen.getByRole("link", { name: "Design System" }));

    expect(
      screen.getByRole("heading", { name: "Design System" }),
    ).toBeInTheDocument();
  });

  it("shows the error page for an unknown URL", () => {
    renderAt("/does-not-exist");

    expect(screen.getByRole("heading", { name: "Oops!" })).toBeInTheDocument();
    expect(screen.getByText("404 Not Found")).toBeInTheDocument();
  });
});
