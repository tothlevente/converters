import { Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { TemperaturesLogo } from "../Logo";

export default function Temperatures() {
  return (
    <Box sx={{ color: grey[800] }}>
      <TemperaturesLogo width={50} height={50} />
      <Typography variant="h3">Temperatures</Typography>
    </Box>
  );
}
