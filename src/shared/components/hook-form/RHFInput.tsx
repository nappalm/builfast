import {
  InputGroupProps,
  InputProps,
  InputRightElement,
} from "@chakra-ui/react";
import {
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import type { ReactNode, RefObject } from "react";
import { Controller, useFormContext } from "react-hook-form";
import RHFError from "./RHFError";
import RHFLabel from "./RHFLabel";

type Props = {
  label?: string;
  description?: string;
  name?: string;
  icon?: ReactNode;
  rightElement?: ReactNode;
  inputGroup?: InputGroupProps;
  inputRef?: RefObject<HTMLInputElement>;
} & Omit<InputProps, "icon" | "name" | "ref" | "type"> & {
    type?: InputProps["type"] | "amount";
  };

export default function RHFInput({
  label,
  icon,
  name = "field",
  description,
  inputGroup,
  inputRef,
  isRequired,
  rightElement,
  ...input
}: Props) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Stack spacing="2px" w="full">
          <RHFLabel
            label={label}
            error={error?.message}
            isRequired={isRequired}
          />
          <InputGroup {...inputGroup}>
            {icon && (
              <InputLeftElement pointerEvents="none">{icon}</InputLeftElement>
            )}
            <Input {...field} {...input} ref={inputRef} />
            {rightElement && (
              <InputRightElement pointerEvents="none">
                {rightElement}
              </InputRightElement>
            )}
          </InputGroup>
          <RHFError error={error?.message} />
          <Text fontSize="10px" opacity="0.8">
            {description}
          </Text>
        </Stack>
      )}
    />
  );
}
