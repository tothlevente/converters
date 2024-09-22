import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { grey } from "@mui/material/colors";

import Logo, { TemperaturesLogo } from "./Logo";

export default function Home() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        color: grey[800],
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        margin: "50px",
      }}
    >
      <Logo width={80} height={80} color={grey[800]} />
      <Typography variant="h3" sx={{ marginBottom: "10px", fontWeight: "bold" }}>
        Converters
      </Typography>
      <Typography variant="subtitle1" sx={{ marginBottom: "15px", maxWidth: "500px" }}>
        With the help of this website, you can easily convert different units of measurement. In
        the future, the range of convertible measurement units will expand.
      </Typography>
      <Typography variant="subtitle1" sx={{ marginBottom: "15px", maxWidth: "500px" }}>
        Choose a category to get started:
      </Typography>
      <Button
        variant="contained"
        onClick={() => navigate("/temperatures")}
        startIcon={<TemperaturesLogo width={25} height={25} />}
      >
        Temperatures
      </Button>
    </Box>
  );
}
