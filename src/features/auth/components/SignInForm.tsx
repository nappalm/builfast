import { FormProvider, RHFInput } from "@/shared";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Heading, Link, Stack, Text } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { Link as RouterLink } from "react-router-dom";
import { AUTH_PATHS } from "../router/paths";
import { OnSubmitEmailPassword, OnSubmitOAuth } from "../utils/types";
import { emailPasswordSchema } from "../utils/yup";

type Props = {
  onSubmitEmailPassword: (values: OnSubmitEmailPassword) => void;
  onSubmitOAuth: (provider: OnSubmitOAuth) => void;
};

export default function SignInForm({
  onSubmitEmailPassword,
  onSubmitOAuth,
}: Props) {
  const methods = useForm<OnSubmitEmailPassword>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(emailPasswordSchema),
  });

  const handleSignIn = async ({ email, password }: OnSubmitEmailPassword) => {
    onSubmitEmailPassword({ email, password });
  };

  return (
    <Stack>
      <Heading mb={4}>Sign In</Heading>
      <FormProvider
        methods={methods}
        onSubmit={methods.handleSubmit(handleSignIn)}
      >
        <Stack>
          <RHFInput name="email" label="Email" />
          <RHFInput name="password" label="Password" />
          <Button type="submit" colorScheme="blue">
            Submit
          </Button>
        </Stack>
      </FormProvider>

      <Text mt={4} textAlign="center">
        Or sign in with:
      </Text>

      <Stack mt={4} justify="center">
        <Button onClick={() => onSubmitOAuth("google")}>Google</Button>
      </Stack>
      <Text mt={4} textAlign="center">
        Don't have an account?{" "}
        <Link as={RouterLink} to={AUTH_PATHS.signUp} color="blue.500">
          Sign Up
        </Link>
      </Text>
    </Stack>
  );
}
