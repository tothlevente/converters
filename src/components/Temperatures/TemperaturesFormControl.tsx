import { FormControl, InputAdornment, OutlinedInput, Typography } from "@mui/material";

interface TemperaturesFormControlProps {
  name: string;
  adornment: string;
  value: number;
  handleChange: (e: number) => void;
}

export default function TemperaturesFormControl({
  name,
  adornment,
  value,
  handleChange,
}: TemperaturesFormControlProps) {
  return (
    <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
      <Typography variant="body1" sx={{ margin: "7px" }}>
        {name}
      </Typography>
      <OutlinedInput
        id={`${name}-input`}
        value={value}
        endAdornment={<InputAdornment position="end">{adornment}</InputAdornment>}
        aria-describedby={`${name}-input`}
        onChange={(e) => handleChange(Number(e.target.value))}
        inputProps={{
          "aria-label": "weight",
        }}
        fullWidth
      />
    </FormControl>
  );
}
