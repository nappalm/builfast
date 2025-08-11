import {
  Button,
  Card,
  CardBody,
  HStack,
  Stack,
  Tag,
  Text,
} from "@chakra-ui/react";
import {
  IconBrandGoogleFilled,
  IconMailFilled,
  IconPlayerPlay,
} from "@tabler/icons-react";

export default function SettingsForm() {
  return (
    <Stack>
      <Card size="sm">
        <CardBody>
          <HStack justify="space-between">
            <HStack gap={5}>
              <IconMailFilled size={18} />
              <Stack gap={0}>
                <Text fontSize="lg">Email and Password</Text>
                <Text color="gray.500">Authenticate with google</Text>
              </Stack>
            </HStack>
            <Tag size="lg" colorScheme="green">
              Current
            </Tag>
          </HStack>
        </CardBody>
      </Card>
      <Card size="sm">
        <CardBody>
          <HStack justify="space-between">
            <HStack gap={5}>
              <IconBrandGoogleFilled size={18} />
              <Stack gap={0}>
                <Text fontSize="lg">Google</Text>
                <Text color="gray.500">Authenticate with google</Text>
              </Stack>
            </HStack>
            <Button leftIcon={<IconPlayerPlay size={18} />} size="sm">
              Sign In
            </Button>
          </HStack>
        </CardBody>
      </Card>
    </Stack>
  );
}
