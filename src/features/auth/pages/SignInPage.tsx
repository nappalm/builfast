import { Container, Stack } from "@chakra-ui/react";
import SignInForm from "../components/SignInForm";
import useAuth from "../hooks/useAuth";

export default function SignInPage() {
  const { signInWithEmail, signInWithOAuth } = useAuth();

  return (
    <Stack justify="center" align="center" h="full">
      <Container maxW="400px">
        <SignInForm
          onSubmitOAuth={signInWithOAuth}
          onSubmitEmailPassword={({ email, password }) =>
            signInWithEmail(email, password)
          }
        />
      </Container>
    </Stack>
  );
}
