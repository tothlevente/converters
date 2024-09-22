import { AppBar, Box, Button, Toolbar, Tooltip, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { green, grey } from "@mui/material/colors";

import Logo, { HomeLogo, TemperaturesLogo } from "./Logo";

export default function Header() {
  const navigate = useNavigate();

  const width: number = 23;
  const height: number = 23;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex", textAlign: "center", alignItems: "center" }}>
            <Logo width={26} height={26} color={green[300]} />
            <Typography sx={{ paddingLeft: "10px" }}>Converters</Typography>
          </div>
          <div>
            <Tooltip title="Home">
              <Button
                variant="contained"
                sx={{ marginRight: "10px", backgroundColor: green[300], color: grey[800] }}
                onClick={() => navigate("/")}
              >
                <HomeLogo width={width} height={height} />
              </Button>
            </Tooltip>
            <Tooltip title="Temperatures">
              <Button
                variant="contained"
                sx={{ marginRight: "10px", backgroundColor: green[300], color: grey[800] }}
                onClick={() => navigate("/temperatures")}
              >
                <TemperaturesLogo width={width} height={height} />
              </Button>
            </Tooltip>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
