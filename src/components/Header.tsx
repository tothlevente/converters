import Logo from "./Logo";

import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { green } from "@mui/material/colors";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Logo width={26} height={26} color={green[300]} />
          <Typography sx={{ paddingLeft: "10px" }}>Converters</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
