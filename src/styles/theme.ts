import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { StyleFunctionProps } from "@chakra-ui/theme-tools";
import buttonStyles from "./components/buttonStyles";
import drawerButtonStyles from "./components/drawerButtonStyles";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const styles = {
  styles: {
    global: (props: StyleFunctionProps) => ({
      "html, body": {
        bg: props.colorMode === "dark" ? "gray.800" : "orange.50",
      },
    }),
  },
};

const colors = {
  brand: {
    primary: "#344C5C",
    secondary: "#40B484",
    primaryLight: "#496A80",
  },
  background: {
    primary: "#2C3333",
    secondary: "#4f5757",
  },
  fontcolor: {
    primary: "#C8C5C5",
  },
  CourtSizecolor: {
    btc: "#40B484",
    bt: "#FFFFFF",
    border: "#344C5C",
  },
  footerSwitch: {
    500: "#8FE9C3",
  },
};

const components = {
  CourtSize: {
    baseStyle: () => ({
      width: "255",
      height: "205",
      border: "4px solid #344C5C",
      fontSize: "lg",
      fontWeight: "semibold",
      color: "#344C5C",
      textAlign: "center",
    }),
  },
  Button: { ...buttonStyles },
  Drawer: { ...drawerButtonStyles },
  drawerButtonStyles,
};

const theme = extendTheme({ colors, config, styles, components });

export default theme;
