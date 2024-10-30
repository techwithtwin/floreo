import { extendTheme } from "@chakra-ui/react";
import { Space_Grotesk } from "next/font/google";

const space = Space_Grotesk({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const theme = extendTheme({
  fonts: {
    heading: space.style.fontFamily,
  },
  colors: {
    brand: {
      black: "#000000",
      white: "#FFFFFF",
    },

    primary: {
      100: "#E9F6DF",
      200: "#D0EDC1",
      300: "#A1C991",
      400: "#6B9461",
      500: "#2E4E2A",
      600: "#1F431E",
      700: "#153816",
      800: "#0D2D11",
      900: "#08250E",
      default: "#2E4E2A",
    },
  },
});
