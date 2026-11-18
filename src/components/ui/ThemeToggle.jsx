import { IconButton, useColorScheme } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

export default function ThemeToggle() {
  const { mode, systemMode, setMode } = useColorScheme();
  const currentMode = mode === "system" ? systemMode : mode;

  function handleThemeMode() {
    if (currentMode === "light") return setMode("dark");
    if (currentMode === "dark") return setMode("light");
  }

  if (!mode) {
    return null;
  }

  return (
    <IconButton
      onClick={handleThemeMode}
      aria-label={
        currentMode === "light" ? "Switch to dark mode" : "Switch to light mode"
      }
    >
      {currentMode === "light" ? (
        <LightModeIcon color="primary" />
      ) : (
        <DarkModeIcon color="primary" />
      )}
    </IconButton>
  );
}
