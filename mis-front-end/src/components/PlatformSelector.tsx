import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const PlatformSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Actions
      </MenuButton>
      <MenuList>
        <MenuItem value={"company"}>Company</MenuItem>
        <MenuItem value={"industry"}>Industry</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
