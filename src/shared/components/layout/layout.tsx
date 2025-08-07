import { Box, Container, Grid, Stack } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../sidebar";
import { TopnavBar } from "../topnavbar";

export default function Layout() {
  return (
    <Stack>
      <Box as="main">
        <TopnavBar />
        <Container maxW="container.xl">
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
