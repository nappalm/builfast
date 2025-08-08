import { Box, Container, Grid, Stack } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import { TopnavBar } from "../../topnavbar";
import UserInformation from "./UserInformation";

export default function Layout() {
  return (
    <Stack>
      <Box as="main">
        <TopnavBar />
        <Container maxW="container.xl" pt={5}>
          <UserInformation />
          <Grid
            gridAutoFlow="column"
            gridTemplateColumns="auto minmax(0, calc(100% - 226px - 24px))"
            gridGap="24px"
            py={5}
          >
            <Sidebar />
            <Outlet />
          </Grid>
        </Container>
      </Box>
    </Stack>
  );
}
