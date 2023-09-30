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
        <Button colorScheme="blue" type="submit" size="lg">
          First Research
        </Button>
      </form>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          navigate("/file-upload");
        }}
      >
        <Button colorScheme="blue" type="submit" size="lg">
          Add Duns
        </Button>
      </form>

      <Button colorScheme="blue" size="lg">
        Upload
      </Button>
      <PlatformSelector />
      <SearchInput />
      <Image src={logo} boxSize="60px" />
    </HStack>
  );
};

export default NavBar;
