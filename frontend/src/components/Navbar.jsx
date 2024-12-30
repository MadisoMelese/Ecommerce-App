import React from 'react';
import { Container, Button, Flex, HStack, Text,  } from "@chakra-ui/react"
import { ColorModeProvider, ColorModeButton } from './ui/color-mode';
import { PlusSquareIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom';

const Navbar = () => {
  // const { colorMode, toggleColorMode } = useColorMode();
  return (
    <ColorModeProvider>
      <Container maxW="container.xl">
        <Flex justifyContent={"space-between" }alignItems="center" py={4}
          h={16} flexDir={{ base: "column", sm: "row" }}>
        <Text
          fontSize={{ base: '22px', sm: '28px' }}
          fontWeight="bold"
          textTransform="uppercase"
          textAlign={{ base: 'center', sm: 'left' }}
          bgGradient="to-r" gradientFrom="#00B5D8" gradientTo="#0025F7"
           bgColor={"linearGradient(to-r, #00B5D8, #0025F7)"}
           bgClip="text"
        >
          <Link to="/">Product Store</Link>
        </Text>
          <HStack spaceX={2} alignItems={"center"} >
            <Link to={"/create"}>
              <button>
               <PlusSquareIcon fontSize={"1.58rem"}/>
              </button>
            </Link>
            <ColorModeButton />
          </HStack>
        </Flex>
      </Container>
    </ColorModeProvider>
  )
}

export default Navbar