import { HStack, Image, useColorModeValue } from "@chakra-ui/react";
import ToggleThemeButton from "./ToggleThemeButton";
import UserMenu from "./UserMenu";

export default function Topnavbar() {
  const bg = useColorModeValue("transparent", "whiteAlpha.200");
  const borderColor = useColorModeValue("gray.200", "gray.700");

  return (
    <HStack
      w="full"
      justifyContent="space-between"
      p={3}
      bg={bg}
      borderBottom="1px solid"
      borderColor={borderColor}
    >
      <Image src="/logo.png" alt="logo" />
      <HStack>
        <ToggleThemeButton />
        <UserMenu />
      </HStack>
    </HStack>
  );
}
