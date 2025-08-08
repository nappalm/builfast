import { mainApiClient } from "@/lib/axios";

export const SETTINGS_ENDPOINT = "/home";
export const getSettingsData = async () => {
  const response = await mainApiClient.get(SETTINGS_ENDPOINT);
  return response.data;
};
