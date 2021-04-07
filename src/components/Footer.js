import {
  Container,
  Divider,
  Text,
  Image,
  Box,
  Flex,
  Heading,
  Link,
  VStack,
  HStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";
import Logo from "../images/full-logo.svg";
import { AccordionArrow } from "./Icons";

const Footer = () => {
  const sections = [
    {
      title: "Company",
      links: [
        {
          name: "About us",
          path: "/about",
        },
        {
          name: "Jobs",
          path: "/jobs",
        },
        {
          name: "Press",
          path: "/press",
        },
        {
          name: "Blog",
          path: "/blog",
        },
      ],
    },
    {
      title: "Support",
      links: [
        {
          name: "Contact us",
          path: "/contact-us",
        },
        {
          name: "Cookies",
          path: "/cookies",
        },
        {
          name: "Privacy & terms",
          path: "/privacy-and-terms",
        },
        {
          name: "Sitemap",
          path: "/sitemap",
        },
      ],
    },
    {
      title: "Community",
      links: [
        {
          name: "Developers",
          path: "/developers",
        },
        {
          name: "Designers",
          path: "/designers",
        },
        {
          name: "Forum",
          path: "/forum",
        },
        {
          name: "UI8",
          path: "/ui8",
        },
      ],
    },
  ];
  return (
    <Container maxW="8xl">
      {/* desktop footer */}
      <Flex
        display={["none", "none", "flex"]}
        justifyContent="space-between"
        marginBottom={10}
      >
        <Box width="30%">
          <Image src={Logo} />
        </Box>
        <HStack width="70%" spacing={[0, 0, 24, 48]}>
          {sections.map((section) => (
            <Box>
              <Heading
                fontSize={16}
                fontWeight="400"
                color="rgba(23,26,34,0.4)"
              >
                {section.title}
              </Heading>
              <VStack spacing={5} alignItems="flex-start" marginTop={10}>
                {section.links.map((item) => (
                  <Link href={item.path}>{item.name}</Link>
                ))}
              </VStack>
            </Box>
          ))}
        </HStack>
      </Flex>

      {/* mobile footer */}
      <Box display={["block", "block", "none"]}>
        <HStack justifyContent="center">
          <Image src={Logo} />
        </HStack>

        <Accordion defaultIndex={[0]} allowMultiple borderColor="transparent">
          {sections.map((section) => (
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <AccordionButton
                    display="flex"
                    justifyContent="space-between"
                    _focus={{ outline: "brand.primary" }}
                    borderBottom={
                      isExpanded ? "1px solid #5956E9" : "1px solid #E3E6E9"
                    }
                    paddingY={5}
                    paddingX={0}
                  >
                    <Text color={isExpanded ? "#6100FF" : "#999FAE"}>
                      {section.title}
                    </Text>
                    <AccordionArrow fill={isExpanded ? "#5956E9" : "#999FAE"} />
                  </AccordionButton>

                  <AccordionPanel paddingX={0}>
                    <VStack spacing={5} alignItems="flex-start" marginTop={5}>
                      {section.links.map((item) => (
                        <Link href={item.path}>{item.name}</Link>
                      ))}
                    </VStack>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          ))}
        </Accordion>
      </Box>
      <Divider display={["none", "none", "block"]} />
      <Text paddingTop={5} color="#999FAE">
        © 2020, DRA LLC.
      </Text>
    </Container>
  );
};

export default Footer;
