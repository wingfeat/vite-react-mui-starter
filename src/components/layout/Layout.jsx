import { AppBar, Button, Container, Toolbar, Typography } from "@mui/material";
import { NavLink, Outlet } from "react-router";
import ThemeToggle from "../ui/ThemeToggle";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/design-system", label: "Design System" },
];

export default function Layout() {
  return (
    <>
      <AppBar position="static">
        <Toolbar sx={{ gap: 1 }}>
          <Typography variant="h6" component="p" sx={{ flexGrow: 1 }}>
            Starter
          </Typography>
          {NAV_LINKS.map((link) => (
            <Button
              key={link.to}
              component={NavLink}
              to={link.to}
              end
              color="inherit"
              sx={{ "&.active": { textDecoration: "underline" } }}
            >
              {link.label}
            </Button>
          ))}
          <ThemeToggle />
        </Toolbar>
      </AppBar>

      <Container component="main" sx={{ py: 4 }}>
        <Outlet />
      </Container>
    </>
  );
}
