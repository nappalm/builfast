import { Text } from "@chakra-ui/react";

interface Props {
  error?: string;
}

export default function RHFError({ error }: Props) {
  if (!error) return null;
  return (
    <Text pt="2px" fontSize="12px" color="red.500">
      {error}
    </Text>
  );
}
