import { FormProvider, RHFInput } from "@/shared";
import { Button, Stack, Text } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

export default function AccountForm() {
  const methods = useForm();

  return (
    <FormProvider methods={methods}>
      <Stack>
        <RHFInput name="name" label="Name" />
        <RHFInput name="email" label="Email" isDisabled />
        <Text fontSize="xs" color="gray.500">
          All of the fields on this page are optional and can be deleted at any
          time, and by filling them out, you're giving us consent to share this
          data wherever your user profile appears. Please see our privacy
          statement to learn more about how we use this information.
        </Text>
        <Button type="submit" w="fit-content" colorScheme="blue">
          Update profile
        </Button>
      </Stack>
    </FormProvider>
  );
}
