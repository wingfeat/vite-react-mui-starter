import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink, Outlet } from "react-router";
import ThemeToggle from "../ui/ThemeToggle";
import { useState } from "react";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/design-system", label: "Design System" },
];

export default function Layout() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar position="static">
        <Toolbar sx={{ gap: 1 }}>
          <Typography variant="h6" component="p" sx={{ flexGrow: 1 }}>
            Starter
          </Typography>
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
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
          </Box>
          <IconButton
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            sx={{ display: { xs: "flex", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <List sx={{ width: 240 }}>
          {NAV_LINKS.map((link) => (
            <ListItemButton
              key={link.to}
              component={NavLink}
              to={link.to}
              end
              onClick={() => setOpen(false)}
            >
              <ListItemText primary={link.label} />
            </ListItemButton>
          ))}
        </List>
        <Divider />
        <Box sx={{ p: 2, display: "flex", alignItems: "center", gap: 1 }}>
          <Typography variant="body2">Theme</Typography>
          <ThemeToggle />
        </Box>
      </Drawer>

      <Container component="main" sx={{ py: 4 }}>
        <Outlet />
      </Container>
    </>
  );
}
