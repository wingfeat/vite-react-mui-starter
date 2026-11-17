import { Button, Container, Typography } from "@mui/material";
import { isRouteErrorResponse, Link, useRouteError } from "react-router";

export default function ErrorPage() {
  const error = useRouteError();
  const message = isRouteErrorResponse(error)
    ? `${error.status} ${error.statusText}`
    : "Something went wrong.";

  return (
    <Container component="main" sx={{ py: 8, textAlign: "center" }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Oops!
      </Typography>
      <Typography sx={{ mb: 3 }}>{message}</Typography>
      <Button component={Link} to="/" variant="contained">
        Back to home
      </Button>
    </Container>
  );
}
