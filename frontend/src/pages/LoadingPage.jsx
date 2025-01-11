import React from 'react';
import { Box, Spinner, Text, VStack } from '@chakra-ui/react';

const LoadingPage = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      width="100vw"
      bgGradient="linear(to-r, black, blackAlpha.800)"
    >
      <VStack spacing={4}>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
          animation="spin 2s linear infinite"
        />
        <Text fontSize="2xl" color="white" fontWeight="bold">
          Loading...
        </Text>
      </VStack>
    </Box>
  );
};

export default LoadingPage;
