import { Box, Stack } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { TopnavBar } from "../topnavbar";

export default function Layout() {
  return (
    <Stack>
      <Box as="main">
        <TopnavBar />
        <Outlet />
      </Box>
    </Stack>
  );
}
