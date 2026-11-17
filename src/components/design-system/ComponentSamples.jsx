import {
  Alert,
  Card,
  CardActions,
  CardContent,
  Button,
  Chip,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Section from "./Section.jsx";

const SEVERITIES = ["success", "info", "warning", "error"];

export default function ComponentSamples() {
  return (
    <Section
      title="Components"
      description="Common components with the theme defaults (outlined Card, full-width TextField)."
    >
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Stack spacing={2}>
            <TextField label="Email" type="email" />
            <TextField
              label="Password"
              type="password"
              helperText="8 characters minimum"
            />
            <TextField
              label="With an error"
              error
              helperText="This field is required"
            />
          </Stack>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h3" gutterBottom>
                Card title
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Cards are outlined by default. Use variant="elevation" for a
                card that needs to stand out.
              </Typography>
            </CardContent>
            <CardActions>
              <Button>Learn more</Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid size={12}>
          <Stack spacing={1.5}>
            {SEVERITIES.map((severity) => (
              <Alert key={severity} severity={severity}>
                This is a {severity} alert.
              </Alert>
            ))}
          </Stack>
        </Grid>

        <Grid size={12}>
          <Stack
            direction="row"
            spacing={1}
            useFlexGap
            sx={{ flexWrap: "wrap" }}
          >
            <Chip label="Default" />
            <Chip label="Primary" color="primary" />
            <Chip label="Outlined" variant="outlined" />
            <Chip label="Deletable" onDelete={() => {}} />
          </Stack>
        </Grid>
      </Grid>
    </Section>
  );
}
