import { createMuiTheme } from "@material-ui/core/styles";

const primary = "#223443";
const secondary = "#FFF";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: primary,
    },
    secondary: {
      main: secondary,
    },
  },

  typography: {
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: "500",
      fontSize: "1rem",
    },
    h1: {
      color: primary,
      fontFamily: "Raleway",
      fontWeight: 400,
      fontSize: "3rem",
    },
    h2: {
      color: primary,
      fontFamily: "Raleway",
      fontWeight: 400,
      fontSize: "2rem",
    },
    h3: {
      color: primary,
      fontFamily: "Raleway",
      fontWeight: 400,
      fontSize: "1.5rem",
    },
    body1: {
      color: primary,
      fontFamily: "Raleway",
      fontSize: "1.2rem",
    }
  },
});

export default theme;
