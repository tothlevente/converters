import TemperaturesFormulas from "./TemperaturesFormulas";
import TemperaturesForm from "./TemperaturesForm";

import { grey, red } from "@mui/material/colors";
import { Box, Typography } from "@mui/material";
import { TemperaturesLogo } from "../Logo";

export default function Temperatures() {
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
      <TemperaturesLogo width={50} height={50} color={red[500]} />
      <Typography variant="h4" sx={{ marginBottom: "10px", fontWeight: "bold" }}>
        Temperatures
      </Typography>
      <Typography variant="subtitle1" sx={{ marginBottom: "15px", maxWidth: "500px" }}>
        To convert different temperatures, please enter the value of the temperature measurement
        what you want to convert and you will receive the calculated values in the other two
        places.
      </Typography>
      <TemperaturesForm />
      <TemperaturesFormulas />
    </Box>
  );
}
