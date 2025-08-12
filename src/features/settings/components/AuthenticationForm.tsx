import { useAuth, useAuthenticatedUser } from "@/shared";
import {
  Button,
  Card,
  CardBody,
  HStack,
  Stack,
  Tag,
  Text,
} from "@chakra-ui/react";
import { IconBrandGoogleFilled, IconMailFilled } from "@tabler/icons-react";

export default function AuthenticationForm() {
  const { user } = useAuthenticatedUser();
  const { signInWithOAuth } = useAuth();

  return (
    <Stack>
      <Card size="sm">
        <CardBody>
          <HStack justify="space-between">
            <HStack gap={5}>
              <IconMailFilled size={18} />
              <Stack gap={0}>
                <HStack>
                  <Text fontSize="lg">Email and Password</Text>
                  {user?.app_metadata.providers.includes("email") && (
                    <Tag colorScheme="blue">Active</Tag>
                  )}
                </HStack>
                <Text color="gray.500">Authenticate with google</Text>
              </Stack>
            </HStack>
          </HStack>
        </CardBody>
      </Card>
      <Card size="sm">
        <CardBody>
          <HStack justify="space-between">
            <HStack gap={5}>
              <IconBrandGoogleFilled size={18} />
              <Stack gap={0}>
                <HStack>
                  <Text fontSize="lg">Google</Text>
                  {user?.app_metadata.providers.includes("google") && (
                    <Tag colorScheme="blue">Active</Tag>
                  )}
                </HStack>
                <Text color="gray.500">Authenticate with google</Text>
              </Stack>
            </HStack>
            {!user?.app_metadata.providers.includes("google") && (
              <Button size="sm" onClick={() => signInWithOAuth("google")}>
                Sign In
              </Button>
            )}
          </HStack>
        </CardBody>
      </Card>
    </Stack>
  );
}
