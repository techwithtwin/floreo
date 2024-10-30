"use client";

import { ChakraProps, Icon } from "@chakra-ui/react";
import { IoIosHome } from "react-icons/io";

const HomeIcon = (props: ChakraProps) => {
  return <Icon as={IoIosHome} {...props} />;
};

export default HomeIcon;
