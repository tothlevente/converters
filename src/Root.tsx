import Header from "./components/Header";
import Footer from "./components/Footer";

import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { theme } from "./theme";

export default function Root({ element }: any) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      {element}
      <Footer />
    </ThemeProvider>
  );
}
