import { Flex, Image, Text, Spacer, Center } from "@chakra-ui/react";
import logo from "../assets/react.svg";
import { ColorModeButton } from "./ui/color-mode";
const NavBar = () => {
  return (
    <Flex>
      <Image
        src={logo}
        boxSize="40px"
        objectFit="contain"
        margin={"8px"}
        cursor={"pointer"}
      />

      <Text
        fontSize="2xl"
        fontWeight="bold"
        alignSelf="center"
        marginLeft="8px"
      >
        Pink
      </Text>
      <Spacer />
      <Center marginRight={"8px"}>
        <ColorModeButton />
      </Center>
    </Flex>
  );
};

export default NavBar;
