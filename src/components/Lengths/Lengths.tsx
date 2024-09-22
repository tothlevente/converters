import LengthsFormulas from "./LengthsFormulas";
import LengthsForm from "./LengthsForm";

import { grey, red } from "@mui/material/colors";
import { Box, Typography } from "@mui/material";
import { LengthsLogo } from "../Logo";

export default function Lengths() {
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
      <LengthsLogo width={50} height={50} color={red[500]} />
      <Typography variant="h4" sx={{ marginBottom: "10px", fontWeight: "bold" }}>
        Lengths
      </Typography>
      <Typography variant="subtitle1" sx={{ marginBottom: "15px", maxWidth: "500px" }}>
        To convert different lengths, enter the value of the length you want to convert and get
        the calculated values in the other places.
      </Typography>
      <LengthsForm />
      <LengthsFormulas />
    </Box>
  );
}
