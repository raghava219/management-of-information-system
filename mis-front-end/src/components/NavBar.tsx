import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { Button } from "@chakra-ui/react";
import SearchInput from "./SearchInput";
import PlatformSelector from "./PlatformSelector";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px" />

      <form
        onSubmit={(event) => {
          event.preventDefault();
          navigate("/first-research");
        }}
      >
        <Button colorScheme="blue" type="submit">
          First Research
        </Button>
      </form>
      <Button colorScheme="blue">Add Duns</Button>
      <Button colorScheme="blue">Upload</Button>
      <PlatformSelector />
      <SearchInput />
      <Image src={logo} boxSize="60px" />
    </HStack>
  );
};

export default NavBar;
