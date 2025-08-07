import {
  Avatar,
  AvatarBadge,
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";

export default function UserMenu() {
  return (
    <HStack>
      <Avatar bg="gray.900">
        <AvatarBadge boxSize="1em" bg="green.500" />
      </Avatar>
      <Menu>
        <MenuButton as={Button} size="sm">
          manuel@thincrs.com
        </MenuButton>
        <MenuList>
          <MenuItem>Logout</MenuItem>
        </MenuList>
      </Menu>
    </HStack>
  );
}
