import { AppBar, Box, Button, Toolbar, Tooltip, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { grey } from "@mui/material/colors";
import { global } from "../theme";

import Logo, { HomeLogo, TemperaturesLogo } from "./Logo";

export default function Header() {
  const navigate = useNavigate();

  const width: number = 23;
  const height: number = 23;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <Link to={"/"} style={{ textDecoration: "none", color: grey[50] }}>
            <div style={{ display: "flex", textAlign: "center", alignItems: "center" }}>
              <Logo width={26} height={26} color={global.green} />
              <Typography sx={{ paddingLeft: "10px" }}>Converters</Typography>
            </div>
          </Link>
          <div>
            <Tooltip title="Home">
              <Button
                color="secondary"
                variant="contained"
                sx={{ marginRight: "10px" }}
                onClick={() => navigate("/")}
              >
                <HomeLogo width={width} height={height} />
              </Button>
            </Tooltip>
            <Tooltip title="Temperatures">
              <Button
                color="secondary"
                variant="contained"
                sx={{ marginRight: "10px" }}
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
