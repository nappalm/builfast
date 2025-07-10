import { Box, Stack } from '@chakra-ui/react';
import Topbar from './top-bar';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <Stack>
      <Topbar />
      <Box as="main">
        <Outlet />
      </Box>
    </Stack>
  );
}
