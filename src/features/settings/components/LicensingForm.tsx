import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  HStack,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import {
  IconCheck,
  IconInfinity,
  IconPentagon,
  IconX,
} from "@tabler/icons-react";

export default function LicensingForm() {
  return (
    <Stack gap={5}>
      <Card size="sm">
        <CardHeader>
          <HStack justify="space-between">
            <HStack gap={3}>
              <IconPentagon />
              <Stack gap={0}>
                <Text fontWeight="bold">Github Copilot</Text>
                <Text color="gray.500">Your AI pair programmer</Text>
              </Stack>
            </HStack>
            <Button size="sm" colorScheme="blue">
              Upgrade pro
            </Button>
          </HStack>
        </CardHeader>
        <CardBody>
          <Stack>
            <Text fontWeight="bold">Active subscription</Text>
            <Text>Buildfast Free</Text>
          </Stack>
        </CardBody>
        <CardFooter>
          <Text>
            You can upgrade to Copilot Pro at any time. Check out this
            documentation for more details.
          </Text>
        </CardFooter>
      </Card>
      {/* ----------------------------------------------------------------------- */}
      <Card size="sm">
        <CardHeader>
          <HStack justify="space-between">
            <HStack gap={3}>
              <IconPentagon />
              <Stack gap={0}>
                <Text fontWeight="bold">Github Free</Text>
                <Text color="gray.500">The basics for all developers</Text>
              </Stack>
            </HStack>
          </HStack>
        </CardHeader>
        <CardBody>
          <SimpleGrid columns={2} gap={5}>
            <List spacing={2}>
              <ListItem>
                <ListIcon as={IconInfinity} color="blue.500" />
                Unlimited public/private repos
              </ListItem>
              <ListItem>
                <ListIcon as={IconInfinity} color="blue.500" />
                Unlimited collaborators
              </ListItem>
              <ListItem>
                <ListIcon as={IconCheck} color="blue.500" />
                2,000 Actions minutes/month
              </ListItem>
              <ListItem>
                <ListIcon as={IconCheck} color="blue.500" />
                500MB of Packages storage
              </ListItem>
              <ListItem>
                <ListIcon as={IconCheck} color="blue.500" />
                120 core-hours of Codespaces compute per developer
              </ListItem>
              <ListItem>
                <ListIcon as={IconCheck} color="blue.500" />
                15GB of Codespaces storage per developer
              </ListItem>
              <ListItem>
                <ListIcon as={IconCheck} color="blue.500" />{" "}
                <ListIcon as={IconCheck} color="blue.500" />
                Community support
              </ListItem>
            </List>
            <Stack>
              <Text color="gray.500">Not included</Text>
              <List spacing={2}>
                <ListItem>
                  <ListIcon as={IconX} color="red.500" />
                  Free Codespaces usage per organization
                </ListItem>
                <ListItem>
                  <ListIcon as={IconX} color="red.500" />
                  Protected branches on all repos
                </ListItem>
                <ListItem>
                  <ListIcon as={IconX} color="red.500" />
                  Increase Codespaces spend limits
                </ListItem>
                <ListItem>
                  <ListIcon as={IconX} color="red.500" />
                  Multiple reviewers in pull requests
                </ListItem>
                <ListItem>
                  <ListIcon as={IconX} color="red.500" />
                  Required status checks
                </ListItem>
                <ListItem>
                  <ListIcon as={IconX} color="red.500" />
                  Code owners
                </ListItem>
                <ListItem>
                  <ListIcon as={IconX} color="red.500" />
                  Required reviewers
                </ListItem>
                <ListItem>
                  <ListIcon as={IconX} color="red.500" />
                  Pages for static website hosting
                </ListItem>
                <ListItem>
                  <ListIcon as={IconX} color="red.500" />
                  Web-based support
                </ListItem>
              </List>
            </Stack>
          </SimpleGrid>
        </CardBody>
      </Card>
    </Stack>
  );
}
