import { Heading, Stack } from "@chakra-ui/react";
import AuthenticationForm from "../components/AuthenticationForm";

export default function Authentication() {
  return (
    <Stack>
      <Heading fontWeight={500} size="lg">
        Password And Authentication
      </Heading>
      <AuthenticationForm />
    </Stack>
  );
}
