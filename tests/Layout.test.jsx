import { describe, expect, it } from "vitest";
import { render, screen, waitFor, within } from "@testing-library/react";
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

  it("opens the burger menu and navigates from it", async () => {
    const user = userEvent.setup();
    renderAt("/");

    // jsdom applies every media query, so the burger is display: none here.
    // getByRole skips hidden elements: find it by its aria-label instead.
    await user.click(await screen.findByLabelText("Open menu"));

    // The Drawer has the "presentation" role. within() searches inside it only:
    // the same link also exists in the app bar.
    const panel = await screen.findByRole("presentation");
    await user.click(
      within(panel).getByRole("link", { name: "Design System" }),
    );

    // The Drawer closes with an animation: wait until it is gone.
    // While it is open, MUI hides the rest of the page from screen readers
    // (aria-hidden), so the new page is only reachable after it closes.
    await waitFor(() =>
      expect(screen.queryByRole("presentation")).not.toBeInTheDocument(),
    );

    expect(
      screen.getByRole("heading", { level: 1, name: "Design System" }),
    ).toBeInTheDocument();
  });
});
