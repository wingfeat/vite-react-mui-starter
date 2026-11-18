import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { THEME_COLORS } from "../../theme/palette.js";
import Section from "./Section.jsx";

const SHADES = ["light", "main", "dark"];

export default function ColorPalette() {
  const theme = useTheme();

  return (
    <Section
      title="Colors"
      description="Each color is generated from its main value: light, dark and contrastText are computed by MUI."
    >
      <Grid container spacing={2}>
        {THEME_COLORS.map((name) => {
          // theme.vars: CSS variables, so the swatches follow the current mode.
          const color = theme.vars.palette[name];

          return (
            <Grid key={name} size={{ xs: 12, sm: 6, md: 4 }}>
              <Paper sx={{ overflow: "hidden" }}>
                <Stack direction="row">
                  {SHADES.map((shade) => (
                    <Box
                      key={shade}
                      sx={{
                        flex: 1,
                        height: 72,
                        bgcolor: color[shade],
                        color: color.contrastText,
                        p: 1,
                      }}
                    >
                      <Typography variant="caption">{shade}</Typography>
                    </Box>
                  ))}
                </Stack>
                <Box sx={{ p: 1.5 }}>
                  <Typography variant="subtitle2">{name}</Typography>
                </Box>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </Section>
  );
}
