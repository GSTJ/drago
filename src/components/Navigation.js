import React from "react";
import {
  Box,
  Flex,
  HStack,
  Container,
  Text,
  Image,
  Link,
  Button,
} from "@chakra-ui/react";
import logo from "../images/logo.svg";
import underline from "../images/underline.svg";

const Navigation = () => {
  const menus = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Pricing",
      path: "/pricing",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <Container maxW="8xl">
      <Flex justifyContent="space-between" alignItems="center">
        {/* hamburger */}
        <Button
          padding={0}
          display={["flex", "flex", "flex", "none"]}
          flexDir="column"
          justifyContent="space-between"
          background="transparent"
          alignItems="flex-start"
          height="25px"
          _hover={{}}
        >
          <Box rounded={2} width="23px" bg="white" height="4px"></Box>
          <Box rounded={2} width="30px" bg="white" height="4px"></Box>
          <Box rounded={2} width="10px" bg="white" height="4px"></Box>
        </Button>
        {/* hamburger */}
        <HStack spacing={24}>
          <Image
            display={["none", "none", "none", "inherit"]}
            src={logo}
            alt="logo"
          />
          <HStack
            display={["none", "none", "none", "inherit"]}
            alignItems="flex-start"
            spacing={10}
          >
            {menus.map((menu) => (
              <Link key={menu.name} href="" _hover={{ textDecoration: "none" }}>
                <Text color="white" fontWeight="600" fontSize="16px">
                  {menu.name}
                </Text>
                {menu.path === "/" && <Image marginTop={2} src={underline} />}
              </Link>
            ))}
          </HStack>
        </HStack>
        <HStack paddingRight={[0, 0, 0, 5]} spacing={8}>
          <Link
            display={["none", "none", "none", "inherit"]}
            href="/signin"
            fontWeight="500"
            color="white"
            fontSize="16"
          >
            Sign in
          </Link>
          <Button
            background="brand.yellow"
            width={["100px", "150px"]}
            height={["35px", "55px"]}
            fontSize={[14, 14, 14, 16]}
            // color="white"
            rounded={7}
          >
            Sign up
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navigation;
