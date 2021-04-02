import React from "react";
import {
  Box,
  Container,
  Image,
  Text,
  Heading,
  Input,
  Button,
  Flex,
  HStack,
} from "@chakra-ui/react";
import Apps from "../images/apps.png";

import firefox from "../images/firefox.svg";
import hangout from "../images/hangout.svg";
import slack from "../images/slack.svg";
import tinder from "../images/tinder.svg";
import telegram from "../images/telegram.svg";
import vk from "../images/vk.svg";

const Hero = () => {
  const companies = [
    {
      name: "Firefox",
      logo: firefox,
    },
    {
      name: "Hangout",
      logo: hangout,
    },
    {
      name: "Slack",
      logo: slack,
    },
    {
      name: "Tinder",
      logo: tinder,
    },
    {
      name: "Telegram",
      logo: telegram,
    },
    {
      name: "VK",
      logo: vk,
    },
  ];
  return (
    <Container maxW="6xl" marginTop={[12, 12, 10]}>
      <Flex justifyContent="space-between" alignItems="center">
        <Box width={["100%", "100%", "100%", "50%"]}>
          <Heading
            color="white"
            fontSize={["25px", "25px", "40px", "65px"]}
            lineHeight={["32px", "32px", "50px", "71px"]}
          >
            The most agile all-in-one app
          </Heading>
          <Text
            color="#DAC3FF"
            fontSize={["14px", "14px", "16px"]}
            fontWeight="500"
            marginTop={[6, 6, 4]}
            lineHeight={["23px"]}
            maxW="530px"
          >
            Collaborative writing, planning, and organisation for your specific
            ways of working. Regardless if you’re a newbie, team leader or the
            CEO.
          </Text>
          <Flex
            maxWidth={["100%", 388, 501]}
            marginTop={[8]}
            background="white"
            height={["54px", "54px", "60px", "80px"]}
            rounded={[8, 8, 10, 15]}
            alignItems="center"
            paddingX={[2, 2, 2, 5]}
          >
            <Input
              height={["38px", "38px", "44px", "55px"]}
              border="none"
              _focus={{}}
            />
            <Button
              width={[100, 100, 150]}
              height={["38px", "38px", "44px", "55px"]}
              background="brand.yellow"
              rounded={[6, 6, 7]}
            >
              Signup
            </Button>
          </Flex>
        </Box>
        <Box
          width={["100%", "100%", "100%", "50%"]}
          display={["none", "none", "none", "block"]}
        >
          <Image src={Apps} width="100%" />
        </Box>
      </Flex>
      <Container marginTop={[10, 10, 20]}>
        <Text color="white" textAlign="center" fontSize={[14, 14, 14, 16]}>
          Thousand of teams worldwide are using{" "}
          <span style={{ color: "#FFB444" }}>drago!</span>
        </Text>
        <HStack
          spacing={[5, 5, 10, 10]}
          justifyContent="center"
          marginTop={["20px", "20px", "28px"]}
        >
          {companies.map((item) => (
            <Image
              src={item.logo}
              alt={item.name}
              width={["28px", "28px", "28px", "50px"]}
            />
          ))}
        </HStack>
      </Container>
    </Container>
  );
};

export default Hero;
