import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SerachInput from "./SerachInput";
const NavBar = () => {
  return (
    <HStack padding="15px">
      <Image src={logo} boxSize="60px" />
      <SerachInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
