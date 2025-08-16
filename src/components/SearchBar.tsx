import { Input, InputGroup } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchBar = ({ onSearch }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (inputRef.current?.value) {
          onSearch(inputRef.current.value);
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
