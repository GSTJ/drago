import React from "react";
import {
  Container,
  Heading,
  useRadioGroup,
  useRadio,
  Image,
  Box,
  Text,
  HStack,
  VStack,
  Button,
  Flex,
} from "@chakra-ui/react";
import checked from "../images/radio-checked.svg";
import unchecked from "../images/radio-unchecked.svg";
import { ArrowRight, Check, Cross } from "./Icons";

function RadioCard(props) {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <HStack
        spacing={2}
        {...checkbox}
        cursor="pointer"
        _focus={{
          boxShadow: "none",
        }}
        boxShadow="none"
      >
        <Image src={props.isChecked ? checked : unchecked} />
        <Text
          color={props.isChecked ? "brand.primary" : "rgba(23,26,34,0.6)"}
          fontSize={[10, 10, 16]}
        >
          {props.children}
        </Text>
      </HStack>
    </Box>
  );
}

const RadioSection = () => {
  const options = ["Billed anually - Save 20%", "Billed monthly"];
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "options",
    defaultValue: "Billed anually - Save 20%",
  });

  const group = getRootProps();

  return (
    <HStack spacing={[10, 10, 14, 10]} {...group}>
      {options.map((value) => {
        const radio = getRadioProps({ value });
        return (
          <RadioCard key={value} {...radio}>
            {value}
          </RadioCard>
        );
      })}
    </HStack>
  );
};

const Plans = () => {
  const plans = [
    {
      name: "Enterprise",
      price: "25.5",
      items: [
        {
          name: "Unlimited Collections",
          available: true,
        },
        {
          name: "Apps for iOS and Android",
          available: true,
        },
        {
          name: "Guest accounts",
          available: true,
        },
        {
          name: "10,000 API calls per hour",
          available: true,
        },
        {
          name: "Manage collections",
          available: true,
        },
        {
          name: "SCIM user provisioning",
          available: true,
        },
      ],
    },
    {
      name: "Standard",
      price: "13.6",
      items: [
        {
          name: "Unlimited Collections",
          available: true,
        },
        {
          name: "Apps for iOS and Android",
          available: true,
        },
        {
          name: "Guest accounts",
          available: true,
        },
        {
          name: "10,000 API calls per hour",
          available: true,
        },
        {
          name: "Manage collections",
          available: false,
        },
        {
          name: "SCIM user provisioning",
          available: false,
        },
      ],
    },
    {
      name: "Lite",
      price: "10.2",
      items: [
        {
          name: "Unlimited Collections",
          available: true,
        },
        {
          name: "Apps for iOS and Android",
          available: true,
        },
        {
          name: "Guest accounts",
          available: true,
        },
        {
          name: "10,000 API calls per hour",
          available: false,
        },
        {
          name: "Manage collections",
          available: false,
        },
        {
          name: "SCIM user provisioning",
          available: false,
        },
      ],
    },
  ];
  return (
    <Container
      maxW="5xl"
      marginTop={[5, 5, 16, 24]}
      marginBottom={[20, 20, 24, 24]}
    >
      <VStack spacing={[2, 2, 5]}>
        <Heading
          color="#171A22"
          fontSize={["25px", "25px", "35px", "40px"]}
          fontWeight="600"
        >
          Get the Perfect Plan
        </Heading>
        <Text
          maxWidth="400px"
          textAlign="center"
          fontWeight="400"
          fontSize={[14, 14, 13, 18]}
          lineHeight={["30px", "30px", "30px", "35px"]}
          color="rgba(23,26,34,0.6)"
        >
          Amazing pricing plans for businesses and design teams
        </Text>
        <RadioSection />
        <Box width="100%">
          <Flex
            flexDirection={["column", "column", "column", "row"]}
            alignItems="center"
            justifyContent="space-between"
            marginTop={[10, 14, 10]}
          >
            {plans.map((plan) => (
              <Box
                maxW={["100%", "300px"]}
                width="100%"
                rounded={15}
                background={
                  plan.name === "Enterprise" ? "brand.primary" : "transparent"
                }
                border={plan.name !== "Enterprise" ? "1px solid  #ddd" : "none"}
                marginBottom={[8]}
                padding={["32px 23px"]}
              >
                <Text color={plan.name === "Enterprise" ? "white" : "#171A22"}>
                  {plan.name}
                </Text>
                <HStack marginBottom={2}>
                  <Heading
                    color={
                      plan.name === "Enterprise" ? "white" : "brand.primary"
                    }
                    fontSize={40}
                    fontWeight="500"
                  >
                    ${plan.price}
                  </Heading>{" "}
                  <Text
                    color={
                      plan.name === "Enterprise"
                        ? "#DFCBFF"
                        : "rgba(23,26,34,0.6)"
                    }
                    fontSize={16}
                    fontWeight="400"
                  >
                    /month
                  </Text>
                </HStack>
                <Text
                  color={
                    plan.name === "Enterprise"
                      ? "#DFCBFF"
                      : "rgba(23,26,34,0.6)"
                  }
                  fontSize={10}
                >
                  Billed annually
                </Text>
                <Button
                  marginTop={6}
                  marginBottom={4}
                  fontSize={12}
                  fontWeight={400}
                  paddingX="22px"
                  height="50px"
                  display="flex"
                  justifyContent="space-between"
                  width="100%"
                  color={plan.name === "Enterprise" ? "brand.primary" : "white"}
                  background={
                    plan.name === "Enterprise" ? "white" : "brand.primary"
                  }
                >
                  <Text>Try free for 14 days</Text>
                  <ArrowRight
                    fill={plan.name === "Enterprise" ? "#6100FF" : "white"}
                  />
                </Button>
                <Text
                  color={
                    plan.name === "Enterprise"
                      ? "#DFCBFF"
                      : "rgba(23,26,34,0.6)"
                  }
                  fontSize={10}
                >
                  No credit card required
                </Text>
                <VStack spacing={4} alignItems="flex-start" marginTop={6}>
                  {plan.items.map((item) => (
                    <HStack spacing={5}>
                      {item.available ? <Check /> : <Cross />}
                      <Text
                        color={
                          plan.name === "Enterprise"
                            ? "#fff"
                            : "rgba(23,26,34,0.6)"
                        }
                      >
                        {item.name}
                      </Text>
                    </HStack>
                  ))}
                </VStack>
              </Box>
            ))}
          </Flex>
        </Box>
      </VStack>
    </Container>
  );
};

export default Plans;
