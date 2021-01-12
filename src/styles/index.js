import {
    makeStyles,
    createMuiTheme,
    responsiveFontSizes,
  } from "@material-ui/core/styles";

  export const buttonStyles = makeStyles({
    root: {
      display: "flex",
      alignItems: "center",
      textTransform: "none",
      margin: "3px",
      marginBottom: "8px",
      border: 0,
      borderRadius: 6,
      padding: "8px 20px",
      cursor: "pointer",
    },
    notActive: {
      background: "white",
      color: "black",
      opacity: 0.5,
      "&:hover": {
        background: "rgba(88, 212, 115, 0.3)",
      },
    },
    warn: {
      background: "white",
      color: "black",
      opacity: 0.5,
      "&:hover": {
        background: "#fd7c7c",
      },
    },
    active: {
      background: "#58D573",
      color: "white",
      "& a": {
        color: "white",
      },
      "&:hover": {
        background: "#58D573",
      },
    },
    single: {
      justifyContent: "center",
      textAlign: "center",
      background: "#58D573",
      color: "white",
      "& a": {
        color: "white",
      },
      "&:hover": {
        background: "#58D573",
      },
    },
    rsvpRoot: {
      height: "30px",
      width: "100px",
      borderRadius: "5px",
      color: "white",
      fontWeight: "bolder",
      cursor: "pointer",
      border: "none",
      opacity: ".6",
      margin: "0px 3px",
    },
    rsvpActive: {
      border: "1px solid black",
      opacity: "1",
    },
    icon: {
      background: "#E8E8E8",
      width: "45px",
      height: "45px",
    },
    iconGreen: {
      background: "#58D573",
      width: "45px",
      height: "45px",
      "&:hover": {
        background: "#58D573",
      },
    },
  });

export const theme = responsiveFontSizes(
    createMuiTheme({
      overrides: {
        MuiButton: {
          root: {
            "&$disabled": {
              opacity: ".4",
              background: "rgba(88, 212, 115, 0.6)",
            },
          },
        },
      },
      breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 700,
          lg: 1280,
          xl: 1920,
        },
      },
      typography: {
        h1: {
          fontSize: "5rem",
        },
        h2: {
          fontSize: "4.5rem",
        },
        h3: {
          fontSize: "3.5rem",
        },
        h4: {
          fontSize: "3rem",
        },
        h5: {
          fontSize: "2.4rem",
        },
        h6: {
          fontSize: "1.8rem",
        },
        caption: {
          fontSize: "1.5rem",
        },
        body1: {
          fontSize: "1.7rem",
        },
        body2: {
          fontSize: "1.2rem",
        },
      },
      palette: {
        textSecondary: { color: "rgba(0, 0, 0, 0.6)" },
      },
    }))