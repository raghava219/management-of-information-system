import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { Button } from "@chakra-ui/react";
import SearchInput from "./SearchInput";
import PlatformSelector from "./PlatformSelector";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px" />
      <Button colorScheme="blue">First Research</Button>
      <Button colorScheme="blue">Add Duns</Button>
      <Button colorScheme="blue">Upload</Button>
      <PlatformSelector />
      <SearchInput />
      <Image src={logo} boxSize="60px" />
    </HStack>
  );
};

export default NavBar;
