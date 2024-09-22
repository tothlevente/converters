import packageJson from "../../package.json";

import { AppBar, Toolbar } from "@mui/material";
import { global } from "../theme";

export default function Footer() {
  return (
    <AppBar position="fixed" color="primary" sx={{ top: "auto", bottom: 0 }}>
      <Toolbar>
        <div
          style={{
            flex: 1,
            flexGrow: 1,
            margin: "25px",
            fontSize: "small",
            textAlign: "center",
          }}
        >
          <p>
            This website is under{" "}
            <a
              className="link"
              target="_blank"
              rel="noreferrer"
              style={{ color: global.green, textDecoration: "none" }}
              href="https://github.com/tothlevente/converters/blob/main/LICENSE"
            >
              MIT license
            </a>
            , ad-free and does not use cookies.
          </p>
          For more information please visit the project{" "}
          <a
            className="link"
            target="_blank"
            rel="noreferrer"
            style={{ color: global.green, textDecoration: "none" }}
            href="https://github.com/tothlevente/converters"
          >
            repository.
          </a>
          <p>
            Created by{" "}
            <a
              className="link"
              target="_blank"
              rel="noreferrer"
              style={{ color: global.green, textDecoration: "none" }}
              href="https://github.com/tothlevente"
            >
              Levente
            </a>{" "}
            in 2024 | v{packageJson.version}
          </p>
        </div>
      </Toolbar>
    </AppBar>
  );
}
