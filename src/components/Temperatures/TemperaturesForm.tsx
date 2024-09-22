import TemperaturesFormControl from "./TemperaturesFormControl";

import { Box } from "@mui/material";
import { useState } from "react";

export default function TemperaturesForm() {
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
    <Box sx={{ textAlign: "center" }}>
      <TemperaturesFormControl
        name="Celsius"
        adornment="C"
        value={celsius}
        handleChange={handleCelsius}
      />

      <TemperaturesFormControl
        name="Fahrenheit"
        adornment="F"
        value={fahrenheit}
        handleChange={handleFahrenheit}
      />

      <TemperaturesFormControl
        name="Kelvin"
        adornment="K"
        value={kelvin}
        handleChange={handleKelvin}
      />
    </Box>
  );
}
