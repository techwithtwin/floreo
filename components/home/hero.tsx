import { Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { TiArrowDown } from "react-icons/ti";
import Navbar from "../navbar";

const HeroSection = () => {
  return (
    <Stack
      minH="100vh"
      bgImage="/hero-img.webp"
      bgSize="cover"
      bgRepeat="no-repeat"
      bgPos="50% 100%"
    >
      <Navbar />
      <Flex flex={1} align="center" justify="center">
        <Stack
          gap={4}
          textAlign="center"
          color="brand.white"
          align="center"
          maxW="2xl"
        >
          <Heading
            fontSize="xl"
            as="h3"
            color="primary.400"
            textTransform="uppercase"
          >
            New Collection
          </Heading>
          <Heading fontSize="5rem">Beautiful Plants For Your Interior</Heading>
          <Text>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit sed quia consequuntur magni dolores eosqui.
          </Text>
          <Button
            bg="primary.400"
            color="brand.white"
            borderRadius="none"
            size="lg"
            rightIcon={<TiArrowDown />}
            _hover={{
              bg: "primary.500",
            }}
          >
            EXPLORE
          </Button>
        </Stack>
      </Flex>
    </Stack>
  );
};

export default HeroSection;
