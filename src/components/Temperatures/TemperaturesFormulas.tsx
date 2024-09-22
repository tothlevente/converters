import { Box, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { FormulaLogo } from "../Logo";

import LabelIcon from "@mui/icons-material/Label";

interface FormulaProps {
  name: string;
  formula: string;
}

const formulas: Array<FormulaProps> = [
  {
    name: "Celsius to Fahrenheit",
    formula: "(0°C × 9/5) + 32 = 32°F",
  },
  {
    name: "Celsius to Kelvin",
    formula: "0°C + 273.15 = 273.15K",
  },
  {
    name: "Fahrenheit to Celsius",
    formula: "(0°F − 32) × 5/9 = -17.78°C",
  },
  {
    name: "Fahrenheit to Kelvin",
    formula: "(0°F − 32) × 5/9 + 273.15 = 255.372K",
  },
  {
    name: "Kelvin to Celsius",
    formula: "0K − 273.15 = -273.1°C",
  },
  {
    name: "Kelvin to Fahrenheit",
    formula: "(0K − 273.15) × 9/5 + 32 = -459.7°F",
  },
];

export default function TemperaturesFormulas() {
  return (
    <Box sx={{ marginTop: "50px" }}>
      <FormulaLogo width={50} height={50} color={grey[500]} />
      <Typography variant="h6" sx={{ marginBottom: "10px", fontWeight: "bold" }}>
        Formulas
      </Typography>
      <List dense>
        {formulas.map((item, index) => (
          <ListItem key={index}>
            <ListItemIcon>
              <LabelIcon />
            </ListItemIcon>
            <ListItemText primary={item.name} secondary={item.formula} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
