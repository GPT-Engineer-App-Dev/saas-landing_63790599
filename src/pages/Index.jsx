import { Box, Button, Container, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { FaArrowRight, FaCloud, FaLock, FaRocket } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between" minH="100vh" p={10}>
        <VStack align="flex-start" spacing={5} w={{ base: "full", md: "50%" }}>
          <Heading as="h1" size="2xl" fontWeight="bold">
            Elevate Your Business with Our Cloud Solutions
          </Heading>
          <Text fontSize="lg" color="gray.600">
            Discover the power of scalability and security with our top-notch SaaS offerings.
          </Text>
          <Button rightIcon={<FaArrowRight />} colorScheme="blue" size="lg">
            Get Started
          </Button>
        </VStack>
        <Image src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMHRlY2hub2xvZ3l8ZW58MHx8fHwxNzEzNzExNjgzfDA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="500px" objectFit="cover" w={{ base: "full", md: "50%" }} mt={{ base: 10, md: 0 }} />
      </Flex>

      <Flex direction="column" align="center" justify="center" py={10}>
        <Heading as="h2" size="xl" mb={5}>
          Why Choose Us?
        </Heading>
        <Flex direction={{ base: "column", md: "row" }} spacing={10}>
          <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
            <FaCloud size="3em" />
            <Heading as="h3" size="lg">
              Scalable
            </Heading>
            <Text mt={4}>Scale your operations seamlessly with our flexible cloud infrastructure.</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
            <FaLock size="3em" />
            <Heading as="h3" size="lg">
              Secure
            </Heading>
            <Text mt={4}>Protect your data with state-of-the-art security measures.</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
            <FaRocket size="3em" />
            <Heading as="h3" size="lg">
              Fast
            </Heading>
            <Text mt={4}>Boost your productivity with our high-performance solutions.</Text>
          </Box>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Index;
