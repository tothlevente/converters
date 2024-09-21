import {
  Box,
  FormControl,
  InputAdornment,
  OutlinedInput,
  Paper,
  Typography,
} from "@mui/material";
import { green } from "@mui/material/colors";
import { useState } from "react";

export default function Temperatures() {
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(32);

  function handleCelsius(value: number) {
    setFahrenheit(value * (9 / 5) + 32);
    setCelsius(value);
  }

  function handleFahrenheit(value: number) {
    setFahrenheit(value);
    setCelsius((value - 32) * (5 / 9));
  }

  return (
    <Box
      component="form"
      sx={{ "& > :not(style)": { m: 1, width: "25ch" }, marginTop: "50px" }}
      style={{
        display: "grid",
        justifyContent: "center",
        margin: "auto",
        width: "50%",
        marginTop: "50px",
      }}
      bgcolor={green[300]}
      noValidate
      autoComplete="off"
    >
      <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
        <Typography>Celsius:</Typography>
        <OutlinedInput
          id="celsius-input"
          value={celsius}
          endAdornment={<InputAdornment position="end">C</InputAdornment>}
          aria-describedby="outlined-weight-helper-text"
          onChange={(e) => handleCelsius(e.target.value)}
          inputProps={{
            "aria-label": "weight",
          }}
          fullWidth
        />
      </FormControl>
      <Typography style={{ textAlign: "center" }}>is equal</Typography>
      <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
        <Typography>Fahrenheit:</Typography>
        <OutlinedInput
          id="fahrenheit-input"
          value={fahrenheit}
          endAdornment={<InputAdornment position="end">F</InputAdornment>}
          aria-describedby="outlined-weight-helper-text"
          onChange={(e) => handleFahrenheit(e.target.value)}
          inputProps={{
            "aria-label": "weight",
          }}
          fullWidth
        />
      </FormControl>
    </Box>
  );
}
