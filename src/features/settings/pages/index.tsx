import { Heading, Stack } from "@chakra-ui/react";
import AccountForm from "../components/AccountForm";

export default function Settings() {
  return (
    <Stack w="50%">
      <Heading size="lg" fontWeight={500}>
        Account
      </Heading>
      <AccountForm />
    </Stack>
  );
}
