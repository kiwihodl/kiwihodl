import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    text: {
      black: "#000000",
      orange: "#FF8700",
    },
    background: {
      dark: "#1C1C1E",
      orange: "#FF8700",
      black: "#000000",
    },
  },
  fonts: {
    heading: "Lobster Two",
  },
  components: {
    Heading: {
      baseStyle: {
        fontFamily: "Lobster Two",
      },
      variants: {
        "h1": {
          fontSize: "2xl",
        },
        "h2": {
          fontSize: "xl",
        },
      },
    },
  },
  styles: {
    global: {
      body: {
        backgroundColor: "background.dark",
        color: "white",
      },
    },
  },
});

export default theme;