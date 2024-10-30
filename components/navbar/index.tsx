import { Stack, StackDivider } from "@chakra-ui/react";
import React from "react";
import TopNav from "./top-nav";
import MainNav from "./main";
import { marginX } from "@/utils/constants";

const Navbar = () => {
  return (
    <Stack marginX={marginX}>
      <TopNav />
      <StackDivider bg="primary.400" h=".01rem" mb=".8rem" />
      <MainNav />
    </Stack>
  );
};

export default Navbar;
