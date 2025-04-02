import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: "#001d3d",
    secondary: "#004592",
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "bold",
        borderRadius: "md",
      },
      sizes: {
        md: {
          height: "48px",
          padding: "0 24px",
        },
      },
      variants: {
        custom: {
          bg: "primary",
          color: "white",
          _hover: {
            bg: "secondary",
          },
          _active: {
            bg: "#002c4f",
          },
          _focus: {
            boxShadow: "none",
          },
          _disabled: {
            bg: "#e0e0e0",
            color: "#b0b0b0",
          },
        },
        remove: {
          color: "white",
          _hover: {
            bg: "red",
          },
        },
      },
    },
    Text: {
      baseStyle: {
        color: "#333333",
      },
    },
  },
});

export default theme;
