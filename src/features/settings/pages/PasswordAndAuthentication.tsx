import { Heading, Stack } from "@chakra-ui/react";
import SettingsForm from "../components/SettingsForm";

export default function PasswordAndAuthentication() {
  return (
    <Stack>
      <Heading fontWeight={500} size="lg">
        Password And Authentication
      </Heading>
      <SettingsForm />
    </Stack>
  );
}
