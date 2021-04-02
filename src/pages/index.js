import React from "react";
import { Box } from "@chakra-ui/react";

// components
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <>
      <Box padding={[3, 3, 8]}>
        <Box
          background="brand.primary"
          rounded={[15, 15, 30, 35]}
          paddingX={[2, 5, 8, 5]}
          paddingTop={[8, 5, 8, 5]}
          paddingBottom={[10, 8, 8, 10]}
        >
          <Navigation />
          <Hero />
        </Box>
      </Box>
    </>
  );
};

export default Home;
