import { Heading, Stack } from "@chakra-ui/react";
import LicensingForm from "../components/LicensingForm";

export default function Licensing() {
  return (
    <Stack>
      <Heading fontWeight={500} size="lg">
        Licensing
      </Heading>
      <LicensingForm />
    </Stack>
  );
}
