import Header from "./components/Header";

import { createTheme, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { grey } from "@mui/material/colors";

const theme = createTheme({
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
  },
  palette: {
    mode: "light",
    primary: {
      main: grey[800],
    },
    secondary: {
      main: grey[600],
    },
    background: {
      default: grey[300],
    },
  },
});

export default function Root({ element }: any) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      {element}
    </ThemeProvider>
  );
}
