import React from "react";
import { ChakraProvider, extendTheme, CSSReset } from "@chakra-ui/react";
import Fonts from "./Fonts";

import Home from "./pages/index"; // home

// extend theme
const theme = extendTheme({
  // fonts
  fonts: {
    heading: "Inter",
    body: "Inter",
  },
  // colors
  colors: {
    brand: {
      primary: "#6100FF",
      yellow: "#FFDC60",
    },
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Fonts />
      <Home />
    </ChakraProvider>
  );
}

export default App;
