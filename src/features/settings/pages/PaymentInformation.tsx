import { Heading, Stack } from "@chakra-ui/react";
import PaymentInformationForm from "../components/PaymentInformationForm";

export default function PaymentInformation() {
  return (
    <Stack>
      <Heading fontWeight={500} size="lg">
        Payment Information
      </Heading>
      <PaymentInformationForm />
    </Stack>
  );
}
