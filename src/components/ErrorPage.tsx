import { useRouteError, isRouteErrorResponse, useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import { grey, red } from "@mui/material/colors";
import { ErrorLogo } from "./Logo";

export default function ErrorPage() {
  const navigate = useNavigate();
  const error = useRouteError();

  function errorMessage(error: unknown): string {
    if (isRouteErrorResponse(error)) {
      return `${error.status} ${error.statusText}`;
    } else if (error instanceof Error) {
      return error.message;
    } else if (typeof error === "string") {
      return error;
    } else {
      console.error(error);
      return "Unknown error";
    }
  }

  return (
    <Box
      sx={{
        color: grey[800],
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        marginTop: "50px",
      }}
    >
      <ErrorLogo width={50} height={50} color={red[600]} />
      <Typography variant="h4" sx={{ marginBottom: "10px", fontWeight: "bold" }}>
        Oops!
      </Typography>
      <Typography variant="subtitle1" sx={{ marginBottom: "15px", maxWidth: "500px" }}>
        Sorry, an unexpected error has occurred.
      </Typography>
      <Typography variant="subtitle2" sx={{ marginBottom: "15px", maxWidth: "500px" }}>
        {errorMessage(error)}
      </Typography>
      <Button variant="contained" onClick={() => navigate("/")}>
        Go to homepage
      </Button>
    </Box>
  );
}
