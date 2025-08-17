import { Flex, Image, Center } from "@chakra-ui/react";
import logo from "../assets/react.svg";
import { ColorModeButton } from "./ui/color-mode";
import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <Flex padding={"8px"} gap={4}>
      <Image src={logo} boxSize="40px" objectFit="contain" cursor={"pointer"} />

      <SearchBar />
      <Center>
        <ColorModeButton />
      </Center>
    </Flex>
  );
};

export default NavBar;
