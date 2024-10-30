import { navData } from "@/utils/constants";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const MainNav = () => {
  return (
    <Flex justify="space-between" align="center">
      <Box>
        <Image src="/logo.svg" width={100} height={100} alt="Logo" />
      </Box>
      <Flex gap={3}>
        {navData.map((d, i) => (
          <Text
            fontSize="lg"
            _hover={{
              color: "primary.400",
              cursor: "pointer",
            }}
            fontWeight="600"
            color="brand.white"
            key={i}
          >
            {d.label}
          </Text>
        ))}
      </Flex>
      <Button
        variant="outline"
        color="brand.white"
        borderRadius="none"
        borderColor="primary.400"
        _hover={{
          bg: "primary.400",
        }}
      >
        View Offer
      </Button>
    </Flex>
  );
};

export default MainNav;
