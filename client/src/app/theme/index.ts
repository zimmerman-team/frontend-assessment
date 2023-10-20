import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000",
    },
    secondary: {
      main: "#fff",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: "Roboto",
    h1: {
      fontSize: "64px",
      fontWeight: "400",
      main: "#000",
    },
    h2: {
      fontSize: "48px",
      fontWeight: "400",
      color: "#000",
    },
    h3: {
      fontSize: "36px",
      fontWeight: "400",
      color: "#000",
    },
    h4: {
      fontSize: "32px",
      fontWeight: "400",
      color: "#000",
    },
    h5: {
      fontSize: "24px",
      fontWeight: "700",
      color: "#000",
    },
    h6: {
      fontSize: "16px",
      fontWeight: "700",
      color: "#000",
    },
    subtitle1: {
      fontSize: "16px",
      fontWeight: "700",
      color: "#000",
    },
    subtitle2: {
      fontSize: "14px",
      fontWeight: "700",
      color: "#000",
    },
    body1: {
      fontSize: "16px",
      fontWeight: "400",
      color: "#000",
    },
    body2: {
      fontSize: "14px",
      fontWeight: "400",
      color: "#000",
    },
    button: {
      fontSize: "14px",
      fontWeight: "700",
      color: "#000",
    },
    overline: {
      fontSize: "12px",
      fontWeight: "400",
      color: "#000",
    },
  },
});

export default theme;
