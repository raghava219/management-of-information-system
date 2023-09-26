import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <InputGroup width="400px">
      <InputLeftElement children={<BsSearch />} />
      <Input borderRadius={20} placeholder="Search Duns..." variant="filled" />
    </InputGroup>
  );
};

export default SearchInput;
