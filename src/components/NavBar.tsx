import { Flex, Image, Text, Spacer, Center } from "@chakra-ui/react";
import logo from "../assets/react.svg";
import { ColorModeButton } from "./ui/color-mode";
const NavBar = () => {
  return (
    <Flex padding={"8px"}>
      <Image src={logo} boxSize="40px" objectFit="contain" cursor={"pointer"} />

      <Text
        fontSize="2xl"
        fontWeight="bold"
        alignSelf="center"
        marginLeft="8px"
      >
        Pink
      </Text>
      <Spacer />
      <Center>
        <ColorModeButton />
      </Center>
    </Flex>
  );
};

export default NavBar;
