import { Flex, Image } from "@chakra-ui/react";
import logo from "../assets/react.svg";
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

      {/* <Text
        fontSize="2xl"
        fontWeight="bold"
        alignSelf="center"
        marginLeft="8px"
      >
        Pink
      </Text> */}
      {/* <Spacer />
      <Button
        colorScheme="pink"
        variant="solid"
        alignSelf="center"
        marginRight="8px"
      >
        Login
      </Button> */}
    </Flex>
  );
};

export default NavBar;
