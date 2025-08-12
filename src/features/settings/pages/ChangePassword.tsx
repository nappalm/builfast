import { Heading, Stack } from "@chakra-ui/react";
import ChangePasswordForm from "../components/ChangePasswordForm";

export default function ChangePassword() {
  return (
    <Stack w="50%">
      <Heading fontWeight={500} size="lg">
        Change Password
      </Heading>
      <ChangePasswordForm />
    </Stack>
  );
}
