import { Divider, Stack, Typography } from "@mui/material";
import Section from "./Section.jsx";

const VARIANTS = [
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "subtitle1",
  "subtitle2",
  "body1",
  "body2",
  "button",
  "caption",
  "overline",
];

export default function TypographyScale() {
  return (
    <Section
      title="Typography"
      description="h1 to h4 are fluid (clamp): resize the window to see them change."
    >
      <Stack divider={<Divider flexItem />} spacing={2}>
        {VARIANTS.map((variant) => (
          <Stack
            key={variant}
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 0.5, sm: 3 }}
            sx={{ alignItems: { sm: "baseline" } }}
          >
            <Typography
              variant="caption"
              sx={{ color: "text.secondary", minWidth: 96 }}
            >
              {variant}
            </Typography>
            {/* component="p": the demo texts must not add real headings to the page */}
            <Typography variant={variant} component="p">
              The quick brown fox
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Section>
  );
}
