import { Box, FormControl, InputAdornment, OutlinedInput, Typography } from "@mui/material";
import { useState } from "react";

export default function Temperatures() {
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(32);
  const [kelvin, setKelvin] = useState(273.15);

  function handleCelsius(value: number) {
    setFahrenheit(value * (9 / 5) + 32);
    setCelsius(value);
    setKelvin(value + 273.15);
  }

  function handleFahrenheit(value: number) {
    setFahrenheit(value);
    setCelsius((value - 32) * (5 / 9));
    setKelvin(((value - 32) * 5) / 9 + 273.15);
  }

  function handleKelvin(value: number) {
    setFahrenheit(((value - 273.15) * 9) / 5 + 32);
    setCelsius(value - 273.15);
    setKelvin(value);
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
        textAlign: "center",
        backgroundColor: "silver",
      }}
      noValidate
      autoComplete="off"
    >
      <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
        <Typography>Celsius:</Typography>
        <OutlinedInput
          id="celsius-input"
          value={celsius}
          endAdornment={<InputAdornment position="end">C</InputAdornment>}
          aria-describedby="celsius-input"
          onChange={(e) => handleCelsius(Number(e.target.value))}
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
          aria-describedby="fahrenheit-input"
          onChange={(e) => handleFahrenheit(Number(e.target.value))}
          inputProps={{
            "aria-label": "weight",
          }}
          fullWidth
        />
      </FormControl>

      <Typography style={{ textAlign: "center" }}>and</Typography>

      <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
        <Typography>kelvin:</Typography>
        <OutlinedInput
          id="kelvin-input"
          value={kelvin}
          endAdornment={<InputAdornment position="end">K</InputAdornment>}
          aria-describedby="kelvin-input"
          onChange={(e) => handleKelvin(Number(e.target.value))}
          inputProps={{
            "aria-label": "weight",
          }}
          fullWidth
        />
      </FormControl>
    </Box>
  );
}
