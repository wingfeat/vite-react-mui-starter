import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import Section from "./Section.jsx";

// The elevation levels customized in theme/shadows.js.
const ELEVATIONS = [0, 1, 2, 4, 8, 16, 24];

export default function ShapeAndElevation() {
  return (
    <Section
      title="Shape and elevation"
      description="The default radius, the pill radius, and the shadow scale."
    >
      <Stack direction="row" spacing={2}>
        <Box
          sx={{
            px: 3,
            py: 1.5,
            borderRadius: 1,
            border: 1,
            borderColor: "divider",
          }}
        >
          <Typography variant="body2">borderRadius</Typography>
        </Box>
        <Box
          sx={{
            px: 3,
            py: 1.5,
            borderRadius: (theme) => theme.shape.borderPill,
            border: 1,
            borderColor: "divider",
          }}
        >
          <Typography variant="body2">borderPill</Typography>
        </Box>
      </Stack>

      <Grid container spacing={3}>
        {ELEVATIONS.map((elevation) => (
          <Grid key={elevation} size={{ xs: 6, sm: 4, md: 3 }}>
            <Paper elevation={elevation} sx={{ p: 3, textAlign: "center" }}>
              <Typography variant="subtitle2">elevation {elevation}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}
