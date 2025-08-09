import { HStack, Image, useColorModeValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ToggleThemeButton from "./ToggleThemeButton";
import UserMenu from "./UserMenu";

export default function Topnavbar() {
  const bg = useColorModeValue("transparent", "gray.900");
  const borderColor = useColorModeValue("gray.200", "gray.800");

  return (
    <HStack
      w="full"
      justifyContent="space-between"
      p={3}
      bg={bg}
      borderBottom="1px solid"
      borderColor={borderColor}
    >
      <Link to="/">
        <Image src="/logo.png" alt="logo" />
      </Link>
      <HStack>
        <ToggleThemeButton />
        <UserMenu />
      </HStack>
    </HStack>
  );
}
