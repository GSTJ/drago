import React from "react";
import { Box, Container, Heading, Text, Flex, Image } from "@chakra-ui/react";
import heart from "../images/heart.svg";
import star from "../images/star.svg";
import polygon from "../images/polygon.svg";

const SaveTime = () => {
  const stats = [
    {
      title: "marketing professionals",
      subtitle: "have already used drago",
      icon: heart,
      value: "5M",
    },
    {
      title: "international awards",
      subtitle: "as the best all-in-one app",
      icon: star,
      value: "18",
    },
    {
      title: "Fortune 800 Companies",
      subtitle: "use drago as their go to app",
      icon: polygon,
      value: "55%",
    },
  ];

  return (
    <Box marginBottom={[20, 20, 20, 32]}>
      <Heading
        fontSize={[20, 20, 35, 50]}
        textAlign="center"
        fontWeight={["600"]}
      >
        Save time with automations
      </Heading>
      <Text
        color="rgba(23,26,34,0.6)"
        textAlign="center"
        maxW={["291px", "291px", "481px", "541px"]}
        marginX="auto"
        marginTop={[3, 3, 5]}
        fontSize={[14, 14, 16, 18]}
      >
        Automate your workflow, save time and increase productivity. Build
        specialized automations that suit your team's needs.
      </Text>
      <Container
        maxW="6xl"
        display="flex"
        flexDirection={["column", "column", "row"]}
        justifyContent="space-between"
        marginTop={[10, 10, 20]}
      >
        {stats.map((item, index) => (
          <Box
            key={index}
            marginBottom={[10, 14, 0]}
            width={["100%", "100%", "30%"]}
          >
            <Flex
              justifyContent="center"
              alignItems="center"
              position="relative"
            >
              <Heading
                position="relative"
                zIndex="1"
                textAlign="center"
                fontSize={[25, 40, 40, 50]}
              >
                {item.value}
              </Heading>
              <Box>
                <Image
                  position="relative"
                  src={item.icon}
                  top={["-10px", "-10px", "-20px"]}
                  left={["-10px", "-10px", "-25px"]}
                  width={["23px", "23px", "39px", "47px"]}
                />
              </Box>
            </Flex>
            <Heading
              textAlign="center"
              fontSize={[14, 18, 18, 20]}
              fontWeight="600"
            >
              {item.title}
            </Heading>
            <Text
              textAlign="center"
              fontSize={[14, 18, 18, 20]}
              fontWeight="400"
              color="rgba(23,26,34,0.6)"
              marginTop={2}
            >
              {item.subtitle}
            </Text>
          </Box>
        ))}
      </Container>
    </Box>
  );
};

export default SaveTime;
