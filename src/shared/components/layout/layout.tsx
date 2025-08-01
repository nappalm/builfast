import { Box, Stack } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <Stack>
      <Box as="main">
        <Outlet />
      </Box>
    </Stack>
  );
}
