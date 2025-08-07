import { HStack, Image } from "@chakra-ui/react";
import UserMenu from "./UserMenu";

export default function Topnavber() {
  return (
    <HStack w="full" justifyContent="space-between" p={2}>
      <Image src="/logo.png" alt="logo" />
      <UserMenu />
    </HStack>
  );
}
