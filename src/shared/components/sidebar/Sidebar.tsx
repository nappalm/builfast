import { Box, Button, Divider, Stack, Text } from "@chakra-ui/react";
import {
  IconApps,
  IconAppWindow,
  IconBookUpload,
  IconBrandGithubCopilot,
  IconBrandParsinta,
  IconDevicesPc,
  IconGitBranch,
  IconKey,
  IconMail,
  IconMessages,
  IconServer,
  IconSettings,
  IconShape,
  IconShieldCheck,
  IconSquareAsterisk,
  IconTag,
  IconUsers,
  IconWebhook,
} from "@tabler/icons-react";
import { FC, ReactElement } from "react";

type ButtonProps = {
  size: string;
  justifyContent: string;
  variant: string;
};

type IconProps = {
  size: number;
  color: string;
};

const buttonProps: ButtonProps = {
  size: "sm",
  justifyContent: "flex-start",
  variant: "ghost",
};

const iconProps: IconProps = {
  size: 17,
  color: "#718096",
};

const sidebarItems: {
  title: string;
  icon?: ReactElement;
  variant?: string;
  isHeader?: boolean;
}[] = [
  {
    title: "General",
    icon: <IconSettings {...iconProps} />,
    variant: "solid",
  },
  {
    title: "Collaborators",
    icon: <IconUsers {...iconProps} />,
  },
  {
    title: "Moderation options",
    icon: <IconMessages {...iconProps} />,
  },
  {
    title: "Code and automatitation",
    isHeader: true,
  },
  {
    title: "Branchs",
    icon: <IconGitBranch {...iconProps} />,
  },
  {
    title: "Tags",
    icon: <IconTag {...iconProps} />,
  },
  {
    title: "Rules",
    icon: <IconBookUpload {...iconProps} />,
  },
  {
    title: "Actions",
    icon: <IconBrandParsinta {...iconProps} />,
  },
  {
    title: "Models",
    icon: <IconShape {...iconProps} />,
  },
  {
    title: "Webhooks",
    icon: <IconWebhook {...iconProps} />,
  },
  {
    title: "Copilot",
    icon: <IconBrandGithubCopilot {...iconProps} />,
  },
  {
    title: "Environtments",
    icon: <IconServer {...iconProps} />,
  },
  {
    title: "Codespaces",
    icon: <IconDevicesPc {...iconProps} />,
  },
  {
    title: "Pages",
    icon: <IconAppWindow {...iconProps} />,
  },
  {
    title: "Secutiry",
    isHeader: true,
  },
  {
    title: "Advanced Secutiry",
    icon: <IconShieldCheck {...iconProps} />,
  },
  {
    title: "Deploy keys",
    icon: <IconKey {...iconProps} />,
  },
  {
    title: "Secrets and variables",
    icon: <IconSquareAsterisk {...iconProps} />,
  },
  {
    title: "Integrations",
    isHeader: true,
  },
  {
    title: "GitHub Apps",
    icon: <IconApps {...iconProps} />,
  },
  {
    title: "Email notifications",
    icon: <IconMail {...iconProps} />,
  },
];

const Sidebar: FC = () => {
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
