"use client";

import { ChakraProps, Icon } from "@chakra-ui/react";
import { TiArrowDown } from "react-icons/ti";

const ArrowDownIcon = (props: ChakraProps) => {
  return <Icon as={TiArrowDown} {...props} />;
};

export default ArrowDownIcon;
