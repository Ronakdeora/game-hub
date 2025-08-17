import { Input, InputGroup } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store";

const SearchBar = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (inputRef.current?.value) {
          setSearchText(inputRef.current.value);
        }
      }}
    >
      <InputGroup startElement={<BsSearch />}>
        <Input placeholder="Search games..." borderRadius={20} ref={inputRef} />
      </InputGroup>
    </form>
  );
};

export default SearchBar;
