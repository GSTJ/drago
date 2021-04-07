import React from "react";
import {
  Text,
  Heading,
  Image,
  VStack,
  Button,
  Container,
} from "@chakra-ui/react";
import suitcase from "../images/suitcase.svg";

const IntegratesWorkflow = () => {
  return (
    <Container
      maxW={["3xl"]}
      marginTop={[5, 5, 16, 24]}
      marginBottom={[20, 20, 20, 32]}
    >
      <VStack spacing={[5, 5, 5]}>
        <Image src={suitcase} width={[16, 16, 104]} />
        <Heading
          color="#171A22"
          fontSize={["25px", "25px", "35px", "40px"]}
          fontWeight="600"
          textAlign={["left", "center", "center"]}
        >
          Integrates with your workflow
        </Heading>
        <Text
          textAlign={["left", "center", "center"]}
          fontWeight="400"
          fontSize={[14, 14, 13, 18]}
          lineHeight={["30px", "30px", "30px", "35px"]}
          color="rgba(23,26,34,0.6)"
        >
          Drago integrates with 1000+ apps via Zapier and a few built-in native
          integrations. Zapier enables anyone (marketing, support, sales, HR,
          operations, product) to connect the web apps they use to run their
          business, without writing code.
        </Text>
        <Button
          background="brand.primary"
          color="white"
          size="lg"
          fontWeight="400"
          fontSize={16}
          paddingX={39}
        >
          Learn more about drago
        </Button>
      </VStack>
    </Container>
  );
};

export default IntegratesWorkflow;
