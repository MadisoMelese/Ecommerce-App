import React from 'react';
import { Container, Button, Flex, HStack, Text,  } from "@chakra-ui/react"
import { ColorModeProvider, ColorModeButton } from './ui/color-mode';


const Navbar = () => {
  // const { colorMode, toggleColorMode } = useColorMode();
  return (
    <ColorModeProvider>
      <Container maxW="container.xl">
        <Flex justifyContent="space-between" alignItems="center" py={4}>
          <Text fontSize="xl" fontWeight="bold">Logo</Text>
          <HStack spacing={8}>
          <FontAwesomeIcon icon="fa-light fa-plus" />
            <ColorModeButton />
          </HStack>
        </Flex>
      </Container>
    </ColorModeProvider>
  )
}

export default Navbar