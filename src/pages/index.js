import React from "react";
import { Box, Container } from "@chakra-ui/react";

// components
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import SaveTime from "../components/Savetime";
import ConnectDots from "../components/ConnectDots";
import IntegratesWorkflow from "../components/IntegratesWorkflow";
import Plans from "../components/Plans";
import IntegrateTools from "../components/IntegrateTools";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Container maxW="8xl" paddingY={[3, 3, 8]}>
        {/* large hero section */}
        <Box
          background="brand.primary"
          rounded={[15, 15, 30, 35]}
          paddingX={[2, 5, 8, 5]}
          paddingTop={[8, 5, 8, 5]}
          paddingBottom={[10, 8, 8, 10]}
          marginBottom={[20, 20, 20, 32]}
        >
          <Navigation />
          <Hero />
        </Box>
        {/* save time */}
        <SaveTime />
        <ConnectDots />
        <IntegratesWorkflow />
        <Plans />
        <IntegrateTools />
        <Footer />
      </Container>
    </>
  );
};

export default Home;
