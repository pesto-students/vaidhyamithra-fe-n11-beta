import { createTheme } from "@mui/material";
import { COLORS } from "./colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: COLORS.HIGHLAND,
    },
    secondary: {
      main: COLORS.HIGHLAND,
    },
    text: {
      primary: COLORS.TUNA,
      secondary: COLORS.SLATE_GRAY,
      disabled: COLORS.CASPER,
      hint: COLORS.CASPER,
    },
    background: {
      default: COLORS.WHITE,
      paper: COLORS.WHITE,
    },
    divider: COLORS.ATHENS_GRAY,
  },
  typography: {
    fontFamily: "Inter",
    h1: {
      fontFamily: "Amiko",
      fontSize: 36,
    },
    h2: {
      fontFamily: "Amiko",
      fontSize: 24,
    },
    h3: {
      fontFamily: "Inter",
      fontSize: 18,
      fontWeight: "bold",
      color: COLORS.TUNA,
      marginTop: 12,
      marginBottom: 12,
    },
    p: {
      fontFamily: "Inter",
      fontSize: 16,
      color: COLORS.SLATE_GRAY,
    },
    body1: {
      fontFamily: "Inter",
      fontSize: 16,
      color: COLORS.SLATE_GRAY,
    },
    // TODO: remove this and as it is getting used only in the navbar - we can use styledComp there
    mainTitle: {
      fontFamily: "Lora",
      fontSize: 30,
      fontWeight: "bold",
    },
  },
  spacing: 8,
  shape: {
    borderRadius: 8,
  },
});
