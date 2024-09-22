import { createTheme } from "@mui/material";
import { green as materialGreen, grey } from "@mui/material/colors";

namespace global {
  export const green = materialGreen[300];
}

const theme = createTheme({
  colorSchemes: {
    light: {
      palette: {
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
    },
    dark: {
      palette: {
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
    },
  },
});

export { global, theme };
