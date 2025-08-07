import { Container, Stack } from "@chakra-ui/react";
import SignUpForm from "../components/SignUpForm";
import useAuth from "../hooks/useAuth";

export default function SignUpPage() {
  const { signUpWithEmail } = useAuth();

  return (
    <Stack justify="center" align="center" h="full">
      <Container maxW="400px">
        <SignUpForm
          onSubmitEmailPassword={({ email, password }) =>
            signUpWithEmail(email, password)
          }
        />
      </Container>
    </Stack>
  );
}
