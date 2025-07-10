import { useAuthenticatedUser } from '@/features/auth';
import { Avatar, Box, HStack, Image, Text } from '@chakra-ui/react';

export default function Topbar() {
  const { user } = useAuthenticatedUser();

  return (
    <Box>
      <HStack justify="space-between" p={5}>
        <HStack>
          <Image src="/logo.png" alt="logo" width="30px" />
          <Text>BuildFast</Text>
        </HStack>
        <HStack>
          <Avatar />
          <Text>{user?.email}</Text>
        </HStack>
      </HStack>
    </Box>
  );
}
