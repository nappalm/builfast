import { FormProvider, RHFInput, useAuthenticatedUser } from "@/shared";
import { Button, Stack, Text } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useChangePassword } from "../hooks/useChangePassword";
import { OnSubmitChangePassword } from "../utils/types";
import { changePasswordSchema } from "../utils/yup";

export default function ChangePasswordForm() {
  const methods = useForm<OnSubmitChangePassword>({
    resolver: yupResolver(changePasswordSchema),
    defaultValues: {
      password: "",
      repeat_password: "",
    },
  });

  const { user } = useAuthenticatedUser();

  const { mutate, isPending } = useChangePassword();

  const onSubmit = ({ password }: OnSubmitChangePassword) => {
    mutate({
      password,
    });
  };

  const isEmail = user?.app_metadata.providers.includes("email");

  if (!isEmail) {
    return (
      <Stack>
        <Text fontWeight="bold">
          Tu contraseña se gestiona desde tu proveedor de inicio de sesión.
        </Text>
        <Text color="gray.500">
          Dado que accedes a esta cuenta a través de un servicio externo (
          {user?.app_metadata.provider}), no podemos modificar tu contraseña
          desde aquí.
        </Text>
      </Stack>
    );
  }

  return (
    <FormProvider methods={methods} onSubmit={methods.handleSubmit(onSubmit)}>
      <Stack>
        <RHFInput name="password" label="New passsword" type="password" />
        <RHFInput
          name="repeat_password"
          label="Repeat new password"
          type="password"
        />
        <Button
          type="submit"
          w="fit-content"
          colorScheme="blue"
          isLoading={isPending}
        >
          Update password
        </Button>
      </Stack>
    </FormProvider>
  );
}
