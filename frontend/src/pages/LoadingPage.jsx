import React from 'react';
import { Box, Spinner, Text, VStack } from '@chakra-ui/react';

const LoadingPage = () => {
  return (
    <Box
      d="flex"
      alignItems="center"
      justifyContent="center"
      h="100vh"
      bgGradient="linear(to-r, teal.300, blue.500)"
    >
      <VStack spacing={4}>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
        <Text fontSize="2xl" color="white" fontWeight="bold">
          Loading...
        </Text>
      </VStack>
    </Box>
  );
};

export default LoadingPage;
