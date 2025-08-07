import { IconButton, useColorMode } from "@chakra-ui/react";
import { IconMoon, IconSun } from "@tabler/icons-react";

export default function ToggleThemeButton() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      aria-label="toggle theme"
      variant="ghost"
      onClick={toggleColorMode}
      size="sm"
      icon={
        colorMode === "light" ? <IconMoon size={18} /> : <IconSun size={18} />
      }
    />
  );
}
