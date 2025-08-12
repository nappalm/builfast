import { supabaseClient } from "@/lib";
import { useMutation } from "@tanstack/react-query";

type ChangePasswordPayload = {
  password: string;
};

export const useChangePassword = () => {
  return useMutation({
    mutationFn: async ({ password }: ChangePasswordPayload) => {
      const { data, error } = await supabaseClient.auth.updateUser({
        password,
      });

      if (error) {
        throw new Error(error.message);
      }

      return data;
    },
  });
};
