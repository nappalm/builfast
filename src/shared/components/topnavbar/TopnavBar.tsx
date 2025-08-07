import { HStack, Image } from "@chakra-ui/react";
import ToggleThemeButton from "./ToggleThemeButton";
import UserMenu from "./UserMenu";

export default function Topnavber() {
  return (
    <HStack
      w="full"
      justifyContent="space-between"
      p={3}
      bg="gray.900"
      borderBottom="1px solid"
      borderColor="#cccccc20"
    >
      <Image src="/logo.png" alt="logo" />
      <HStack>
        <ToggleThemeButton />
        <UserMenu />
      </HStack>
    </HStack>
  );
}
