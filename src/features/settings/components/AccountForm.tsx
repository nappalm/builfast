import { FormProvider, RHFInput, useAuthenticatedUser } from "@/shared";
import { Button, Divider, Stack, Text } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

export default function AccountForm() {
  const { user } = useAuthenticatedUser();
  const methods = useForm({
    defaultValues: {
      // email: user.email,
      // name: user?.user_metadata?.name,
    },
  });

  return (
    <FormProvider methods={methods} onSubmit={methods.handleSubmit(() => {})}>
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
        <Divider my={2} />
        <Text fontSize="lg" fontWeight="bold">
          Permanently Delete Account
        </Text>
        <Text fontSize="sm" color="gray.600">
          This action cannot be undone
        </Text>
        <Text fontSize="xs" color="gray.500">
          Deleting your account will remove all your personal data, settings,
          and history. Once deleted, this information cannot be recovered.
        </Text>

        <Button type="submit" w="fit-content" colorScheme="red" variant="ghost">
          Delete my account
        </Button>
      </Stack>
    </FormProvider>
  );
}
