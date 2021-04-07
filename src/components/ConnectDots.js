import React from "react";
import { Container, Heading, Text } from "@chakra-ui/layout";

const ConnectDots = () => {
  return (
    <Container
      maxW={["100%", "100%", "3xl", "6xl"]}
      background="#FAF6FF"
      rounded={[15, 15, 20]}
      padding={["41px 33px", "41px 33px", "41px 37px", "41px 72px"]}
      marginTop={[5, 5, 16, 24]}
      marginBottom={[20, 20, 20, 32]}
    >
      <Heading
        color="#171A22"
        fontSize={["25px", "25px", "28px", "50px"]}
        width={["100%", "100%", "270px", "440px"]}
        marginBottom={["15px", "15px", "16px", "20px"]}
        fontWeight="600"
      >
        Connect·the·dots with relations
      </Heading>
      <Text
        fontWeight="400"
        fontSize={[14, 14, 13, 18]}
        lineHeight={["30px", "30px", "30px", "35px"]}
        color="rgba(23,26,34,0.6)"
      >
        A task, goal or objective can be shared between different teams and
        managers by living on several planning boards at the same time. This
        allows cross team collaboration in one place, without complex
        configuration or unnecessary dependencies. It also allows managers to
        see where things are, without interfering with the team's daily work.
        This way of setting up and organically building your teams and
        organization reflects reality and improves productivity.
      </Text>
    </Container>
  );
};

export default ConnectDots;
