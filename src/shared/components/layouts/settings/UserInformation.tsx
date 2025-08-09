import { useAuthenticatedUser } from "@/features/auth";
import { Avatar, Heading, HStack, Stack, Text } from "@chakra-ui/react";

export default function UserInformation() {
  const { user } = useAuthenticatedUser();

  return (
    <HStack gap={5}>
      <Avatar size="md" src={user?.user_metadata?.avatar_url} />
      <Stack gap={0}>
        <Heading size="lg">John Doe</Heading>
        <Text color="gray.500">Your personal account</Text>
      </Stack>
    </HStack>
  );
}
