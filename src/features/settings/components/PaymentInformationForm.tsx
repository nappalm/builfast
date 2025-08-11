import {
  Button,
  Card,
  CardBody,
  CardHeader,
  HStack,
  Stack,
  Tag,
  Text,
} from "@chakra-ui/react";
import {
  IconCreditCardFilled,
  IconInfoCircle,
  IconPencil,
  IconTrash,
} from "@tabler/icons-react";

export default function PaymentInformationForm() {
  return (
    <Stack>
      <Card>
        <CardHeader>
          <HStack align="flex-start">
            <IconInfoCircle style={{ flexShrink: 0 }} />
            <Stack gap={0}>
              <Text fontWeight="bold">Additional information</Text>
              <Text color="gray.500">
                Add specific contact or tax information to your receipts, like
                your full business name, VAT/GST identification number, or
                address of record here. We’ll make sure it shows up on every
                receipt.
              </Text>
            </Stack>
          </HStack>
        </CardHeader>
        <CardBody>
          <Button size="sm" colorScheme="blue">
            Add new payment method
          </Button>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <HStack justify="space-between">
            <HStack gap={5}>
              <IconCreditCardFilled size={18} />
              <Stack gap={0}>
                <HStack>
                  <Text>Visa *4242</Text>
                  <Tag colorScheme="blue" size="sm">
                    Current
                  </Tag>
                </HStack>
                <Text fontSize="sm" color="gray.500">
                  Expires 12/2025
                </Text>
              </Stack>
            </HStack>
            <HStack>
              <Button
                variant="ghost"
                size="sm"
                leftIcon={<IconPencil size={18} />}
              >
                Edit
              </Button>
              <Button
                colorScheme="red"
                variant="ghost"
                size="sm"
                leftIcon={<IconTrash size={18} />}
              >
                Remove
              </Button>
            </HStack>
          </HStack>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <HStack justify="space-between">
            <HStack gap={5}>
              <IconCreditCardFilled size={18} />
              <Stack gap={0}>
                <HStack>
                  <Text>Visa *4242</Text>
                </HStack>
                <Text fontSize="sm" color="gray.500">
                  Expires 12/2025
                </Text>
              </Stack>
            </HStack>
            <HStack>
              <Button
                variant="ghost"
                size="sm"
                leftIcon={<IconPencil size={18} />}
              >
                Edit
              </Button>
              <Button
                colorScheme="red"
                variant="ghost"
                size="sm"
                leftIcon={<IconTrash size={18} />}
              >
                Remove
              </Button>
            </HStack>
          </HStack>
        </CardBody>
      </Card>
    </Stack>
  );
}
