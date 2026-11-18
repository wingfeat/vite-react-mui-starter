import { Button, Divider, Stack, Typography } from "@mui/material";
import { THEME_COLORS } from "../../theme/palette.js";
import Section from "./Section.jsx";

const VARIANTS = ["contained", "outlined", "soft", "text"];

export default function ButtonShowcase() {
  return (
    <Section title="Buttons" description="Every variant in every color.">
      <Stack divider={<Divider flexItem />} spacing={2}>
        {VARIANTS.map((variant) => (
          <Stack
            key={variant}
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1, sm: 3 }}
            sx={{ alignItems: { sm: "center" } }}
          >
            <Typography
              variant="caption"
              sx={{ color: "text.secondary", minWidth: 96 }}
            >
              {variant}
            </Typography>
            <Stack
              direction="row"
              spacing={1}
              useFlexGap
              sx={{ flexWrap: "wrap" }}
            >
              {THEME_COLORS.map((color) => (
                <Button key={color} variant={variant} color={color}>
                  {color}
                </Button>
              ))}
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Section>
  );
}
