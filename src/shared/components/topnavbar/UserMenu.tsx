import { useAuth, useAuthenticatedUser } from "@/features/auth";
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
import { IconChevronDown } from "@tabler/icons-react";

export default function UserMenu() {
  const { signOut, loading: loadingLogout } = useAuth();
  const { user, loading } = useAuthenticatedUser();

  return (
    <HStack>
      <Avatar
        src={user?.user_metadata?.avatar_url}
        size="xs"
        name={user?.user_metadata?.name}
      >
        <AvatarBadge boxSize="1em" bg="green.500" />
      </Avatar>
      <Menu>
        <MenuButton
          as={Button}
          size="sm"
          isLoading={loading || loadingLogout}
          rightIcon={<IconChevronDown size={16} />}
        >
          {user?.user_metadata?.name}
        </MenuButton>
        <MenuList>
          <MenuItem onClick={signOut}>Logout</MenuItem>
        </MenuList>
      </Menu>
    </HStack>
  );
}
