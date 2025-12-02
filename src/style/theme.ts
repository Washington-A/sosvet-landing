import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#F42525",
        },
        secondary: {
            main: "#F49D3F",
        },
        text: {
            primary: "#60646E",
            secondary: "#A0A4AD",
        },
        background: {
            default: "#FAFAFB",
            paper: "#FFFFFF",
        },
    },

    typography: {
        fontFamily: "Open Sans, sans-serif",

        h1: {
            fontFamily: "Poppins, sans-serif",
            fontWeight: 700,
        },
        h2: {
            fontFamily: "Poppins, sans-serif",
            fontWeight: 600,
        },
        h3: {
            fontFamily: "Poppins, sans-serif",
            fontWeight: 600,
        },
        h4: {
            fontFamily: "Poppins, sans-serif",
            fontWeight: 600,
        },
        h5: {
            fontFamily: "Poppins, sans-serif",
            fontWeight: 600,
        },
        h6: {
            fontFamily: "Poppins, sans-serif",
            fontWeight: 600,
        },

        body1: {
            fontFamily: "Open Sans, sans-serif",
            fontSize: "1rem",
        },
        body2: {
            fontFamily: "Open Sans, sans-serif",
            fontSize: "0.95rem",
        },
    },
});
