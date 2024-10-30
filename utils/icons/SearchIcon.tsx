"use client";

import { ChakraProps, Icon } from "@chakra-ui/react";
import { MdOutlineSearch } from "react-icons/md";

const SearchIcon = (props: ChakraProps) => {
  return <Icon as={MdOutlineSearch} {...props} />;
};

export default SearchIcon;
