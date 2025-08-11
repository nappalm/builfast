import { Heading, Stack } from "@chakra-ui/react";
import PaymentHistoryForm from "../components/PaymentHistoryForm";

export default function PaymentHistory() {
  return (
    <Stack>
      <Heading fontWeight={500} size="lg">
        Payment History
      </Heading>
      <PaymentHistoryForm />
    </Stack>
  );
}
