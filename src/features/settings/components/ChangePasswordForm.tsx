import { FormProvider, RHFInput } from "@/shared";
import { Button, Stack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

export default function ChangePasswordForm() {
  const methods = useForm();

  return (
    <FormProvider methods={methods}>
      <Stack>
        <RHFInput name="password" label="Password" type="password" />
        <RHFInput name="new_password" label="New passsword" type="password" />
        <RHFInput
          name="repeat_password"
          label="Repeat new password"
          type="password"
        />
        <Button type="submit" w="fit-content" colorScheme="blue">
          Update password
        </Button>
      </Stack>
    </FormProvider>
  );
}
