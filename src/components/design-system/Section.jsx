import { Box, Stack, Typography } from "@mui/material";

export default function Section({ title, description, children }) {
  return (
    <Stack component="section" spacing={3}>
      <Box>
        <Typography variant="h2">{title}</Typography>
        {description && (
          <Typography sx={{ color: "text.secondary", mt: 1 }}>
            {description}
          </Typography>
        )}
      </Box>
      {children}
    </Stack>
  );
}
