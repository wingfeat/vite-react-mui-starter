import { Box, Stack, Typography } from "@mui/material";
import ColorPalette from "../components/design-system/ColorPalette.jsx";
import TypographyScale from "../components/design-system/TypographyScale.jsx";
import ShapeAndElevation from "../components/design-system/ShapeAndElevation.jsx";
import ComponentSamples from "../components/design-system/ComponentSamples.jsx";
import ButtonShowcase from "../components/design-system/ButtonShowcase.jsx";

export default function DesignSystem() {
  return (
    <Stack spacing={8}>
      <Box>
        <Typography variant="h1">Design System</Typography>
        <Typography sx={{ color: "text.secondary", mt: 1 }}>
          Every value of the theme, in one page. Check it after each theme
          change.
        </Typography>
      </Box>

      <ColorPalette />
      <TypographyScale />
      <ButtonShowcase />
      <ShapeAndElevation />
      <ComponentSamples />
    </Stack>
  );
}
