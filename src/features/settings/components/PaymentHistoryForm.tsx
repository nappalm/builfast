import {
  HStack,
  IconButton,
  Table,
  TableContainer,
  Tag,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { IconCreditCard, IconDownload } from "@tabler/icons-react";

export default function PaymentHistoryForm() {
  return (
    <TableContainer>
      <Table size="sm">
        <Thead>
          <Tr>
            <Th>Date</Th>
            <Th>Id</Th>
            <Th>Payment Method</Th>
            <Th isNumeric>Amount</Th>
            <Th isNumeric>Status</Th>
            <Th>Receipt</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>2024-08-11</Td>
            <Td>#12345</Td>
            <Td>
              <HStack>
                <IconCreditCard size={18} />
                <Text>Visa **** 1234</Text>
              </HStack>
            </Td>
            <Td isNumeric>$50.00</Td>
            <Td isNumeric>
              <Tag colorScheme="blue">Success</Tag>
            </Td>
            <Td>
              <IconButton
                size="sm"
                variant="ghost"
                aria-label="Download receipt"
                icon={<IconDownload size={18} />}
              />
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
}
