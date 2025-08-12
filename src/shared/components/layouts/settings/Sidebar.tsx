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
import { Link, useLocation } from "react-router-dom";

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
  path?: string;
};

type SidebarItem = {
  title: string;
  path?: string;
  icon?: ReactElement;
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
    path: "/settings",
  },
  {
    title: "Notifications",
    icon: <IconBell {...iconProps} />,
    path: "/settings/notifications",
  },
  {
    title: "Plans and security",
    isHeader: true,
  },
  {
    title: "Billing and Plans",
    icon: <IconCreditCard {...iconProps} />,
    submenu: [
      {
        title: "Licensing",
        path: "/settings/billing-plans/licensing",
      },
      {
        title: "Payment information",
        path: "/settings/billing-plans/payment-information",
      },
      {
        title: "Payment history",
        path: "/settings/billing-plans/payment-history",
      },
    ],
  },
  {
    title: "Password and Authentication",
    icon: <IconShieldBolt {...iconProps} />,
    submenu: [
      {
        title: "Authentication",
        path: "/settings/password-authentication/authentication",
      },
      {
        title: "Change password",
        path: "/settings/password-authentication/change-password",
      },
    ],
  },
];

const Sidebar: FC = () => {
  const { pathname } = useLocation();
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
          const isSubmenuActive = item.submenu.some(
            (sub) => sub.path === pathname,
          );
          const isOpen = openSubmenus[item.title] ?? isSubmenuActive;

          return (
            <Box key={index} w="full">
              <Button
                {...buttonProps}
                w="full"
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
                  {item.submenu.map((subItem) => {
                    return (
                      <Link to={subItem.path ?? "/"} key={subItem.title}>
                        <Button
                          {...buttonProps}
                          w="full"
                          pl={9}
                          fontSize="xs"
                          variant={
                            pathname === subItem.path ? "solid" : "ghost"
                          }
                        >
                          {subItem.title}
                        </Button>
                      </Link>
                    );
                  })}
                </Stack>
              </Collapse>
            </Box>
          );
        }

        const isActive = pathname === item.path;

        return (
          <Box
            key={index}
            position="relative"
            w="full"
            _before={{
              content: "''",
              position: "absolute",
              w: "4px",
              h: "70%",
              bg: "blue.500",
              left: -2,
              top: "10%",
              borderRadius: "full",
              opacity: isActive ? 1 : 0,
              transition: "opacity 0.2s ease-in-out",
            }}
          >
            <Link to={item.path ?? "/"}>
              <Button
                {...buttonProps}
                variant={isActive ? "solid" : "ghost"}
                leftIcon={item.icon}
                w="full"
              >
                {item.title}
              </Button>
            </Link>
          </Box>
        );
      })}
    </Stack>
  );
};

export default Sidebar;
