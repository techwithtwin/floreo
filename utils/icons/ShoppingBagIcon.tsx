"use client";

import { ChakraProps, Icon } from "@chakra-ui/react";
import { RiShoppingBag4Fill } from "react-icons/ri";

const ShoppingBagIcon = (props: ChakraProps) => {
  return <Icon as={RiShoppingBag4Fill} {...props} />;
};

export default ShoppingBagIcon;
