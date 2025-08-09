import { useAuth, useAuthenticatedUser } from "@/features/auth";
import { SETTINGS_PATHS } from "@/features/settings";
import {
  Avatar,
  AvatarBadge,
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { IconChevronDown, IconLogout, IconSettings } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

export default function UserMenu() {
  const navigate = useNavigate();

  const { signOut, loading: loadingLogout } = useAuth();
  const { user, loading } = useAuthenticatedUser();

  const handleNavigate = (path: string) => navigate(path);

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
          <MenuItem
            onClick={() => handleNavigate(SETTINGS_PATHS.base)}
            icon={<IconSettings size={18} />}
          >
            Profile settings
          </MenuItem>
          <MenuDivider />
          <MenuItem
            onClick={signOut}
            icon={<IconLogout size={18} />}
            color="red.500"
          >
            Logout
          </MenuItem>
        </MenuList>
      </Menu>
    </HStack>
  );
}
