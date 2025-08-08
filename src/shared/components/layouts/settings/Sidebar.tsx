import { Box, Button, Collapse, Divider, Stack, Text } from "@chakra-ui/react";
import {
  IconBell,
  IconChevronDown,
  IconChevronUp,
  IconCreditCard,
  IconShieldBolt,
  IconUserCircle,
} from "@tabler/icons-react";
import { FC, ReactElement, useState } from "react";

type ButtonProps = {
  size: string;
  justifyContent: string;
  variant: string;
};

type IconProps = {
  size: number;
  color: string;
};

type SubmenuItem = {
  title: string;
};

type SidebarItem = {
  title: string;
  icon?: ReactElement;
  variant?: string;
  isHeader?: boolean;
  submenu?: SubmenuItem[];
};

const buttonProps: ButtonProps = {
  size: "sm",
  justifyContent: "flex-start",
  variant: "ghost",
};

const iconProps: IconProps = {
  size: 17,
  color: "#52525B",
};

const sidebarItems: SidebarItem[] = [
  {
    title: "Account",
    icon: <IconUserCircle {...iconProps} />,
  },
  {
    title: "Notifications",
    icon: <IconBell {...iconProps} />,
  },
  {
    title: "Plans and security",
    isHeader: true,
  },
  {
    title: "Billing and Plans",
    icon: <IconCreditCard {...iconProps} />,
  },
  {
    title: "Password and Authentication",
    icon: <IconShieldBolt {...iconProps} />,
  },
];

const Sidebar: FC = () => {
  const [openSubmenus, setOpenSubmenus] = useState<Record<string, boolean>>({});

  const handleToggleSubmenu = (title: string) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <Stack width="296px" gap="1px" position="relative">
      {sidebarItems.map((item, index) => {
        if (item.isHeader) {
          return (
            <div key={index}>
              <Divider my={2} />
              <Text fontWeight="bold" fontSize="xs" color="gray.500" pl={3}>
                {item.title}
              </Text>
            </div>
          );
        }

        if (item.submenu) {
          const isOpen = openSubmenus[item.title];
          return (
            <Box key={index} w="full">
              <Button
                {...buttonProps}
                w="inherit"
                rightIcon={
                  isOpen ? (
                    <IconChevronUp size={16} />
                  ) : (
                    <IconChevronDown size={16} />
                  )
                }
                onClick={() => handleToggleSubmenu(item.title)}
                leftIcon={item.icon}
              >
                <Text as="span" w="full" textAlign="left">
                  {item.title}
                </Text>
              </Button>
              <Collapse in={isOpen}>
                <Stack mt={1} gap="1px">
                  {item.submenu.map((subItem) => (
                    <Button
                      {...buttonProps}
                      w="inherit"
                      key={subItem.title}
                      pl={9}
                      fontSize="xs"
                    >
                      {subItem.title}
                    </Button>
                  ))}
                </Stack>
              </Collapse>
            </Box>
          );
        }

        return (
          <Box
            key={index}
            position="relative"
            w="full"
            _before={
              item.variant === "solid"
                ? {
                    content: "''",
                    position: "absolute",
                    w: "4px",
                    h: "70%",
                    bg: "blue.500",
                    left: -2,
                    top: "10%",
                    borderRadius: "full",
                  }
                : undefined
            }
          >
            <Button
              {...buttonProps}
              variant={item.variant || "ghost"}
              leftIcon={item.icon}
              w="inherit"
            >
              {item.title}
            </Button>
          </Box>
        );
      })}
    </Stack>
  );
};

export default Sidebar;
