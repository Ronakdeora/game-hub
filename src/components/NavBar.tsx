import { Flex, Image, Center } from "@chakra-ui/react";
import logo from "../assets/react.svg";
import { ColorModeButton } from "./ui/color-mode";
import SearchBar from "./SearchBar";
interface Props {
  onSearch: (searchText: string) => void;
}
const NavBar = ({ onSearch }: Props) => {
  return (
    <Flex padding={"8px"} gap={4}>
      <Image src={logo} boxSize="40px" objectFit="contain" cursor={"pointer"} />

      <SearchBar onSearch={onSearch} />
      <Center>
        <ColorModeButton />
      </Center>
    </Flex>
  );
};

export default NavBar;
