import React from "react";
import {
  Container,
  Heading,
  Text,
  Flex,
  VStack,
  Image,
  Link,
} from "@chakra-ui/react";
import dropbox from "../images/dropbox.svg";
import slack from "../images/slack.svg";
import googleDrive from "../images/google-drive.svg";

const IntegrateTools = () => {
  const integrations = [
    {
      name: "Dropbox",
      summary: "Attach files directly from Dropbox to any card in Drago.",
      icon: dropbox,
      background: "#FFF9F9",
    },
    {
      name: "Slack",
      summary:
        "Post updates from Drago directly to your chosen Slack channels.",
      icon: slack,
      background: "#F9F9FF",
    },
    {
      name: "Drive",
      summary: "Attach files directly from Google Drive to any card in Drago.",
      icon: googleDrive,
      background: "#F9FFFF",
    },
  ];
  return (
    <Container maxW="7xl" marginBottom={[20, 20, 24, 24]}>
      <VStack paddingX={[10, 10, 40, 64]} spacing={5}>
        <Heading
          color="#171A22"
          fontSize={["25px", "25px", "35px", "40px"]}
          fontWeight="600"
          textAlign="center"
        >
          Integrate with the tools you love
        </Heading>
        <Text
          textAlign="center"
          fontWeight="400"
          fontSize={[14, 14, 13, 18]}
          lineHeight={["30px", "30px", "30px", "35px"]}
          color="rgba(23,26,34,0.6)"
        >
          Automate your workflow, save time and increase productivity.Build
          specialized automations that suit your team's needs.
        </Text>
      </VStack>
      <Flex
        justifyContent="space-between"
        flexDirection={["column", "column", "column", "row"]}
        alignItems="center"
        marginTop={10}
      >
        {integrations.map((item) => (
          <VStack
            marginBottom={8}
            spacing={5}
            paddingY={14}
            paddingX={16}
            rounded={15}
            background={item.background}
            maxWidth={["300px", "350px", "300px", "29%"]}
          >
            <Image src={item.icon} />
            <Text
              textAlign="center"
              fontSize={[16, 16, 16, 18]}
              fontWeight="400"
              color="rgba(23,26,34,0.6)"
            >
              {item.summary}
            </Text>
            <Link fontSize={[16]} color="#171A22">
              Read more
            </Link>
          </VStack>
        ))}
      </Flex>
    </Container>
  );
};

export default IntegrateTools;
