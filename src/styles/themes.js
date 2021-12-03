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
  },
  spacing: 8,
  shape: {
    borderRadius: 8,
  },
});
