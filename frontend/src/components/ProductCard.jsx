import React from 'react'; import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { DeleteIcon, EditIcon } from "@chakra-ui/icons"
import { Box, Heading, HStack, IconButton, Image, Text } from "@chakra-ui/react"
import { useProductStore } from '../store/product'
import { useColorModeValue  } from './ui/color-mode';
import { toaster, Toaster } from "./ui/toaster"


const ProductCard = ({products}) => {
  const textColor = useColorModeValue("gray.600", "gray.200")
  const bg = useColorModeValue("white", "gray.800")
  const { deleteProduct } = useProductStore()
  const handleDelete = async (pid) =>{
    const {success, message} = await deleteProduct(pid);
    toaster.create({
      description: message,
      duration: 1000,
      removeDelay: 200,
      type: success ? "success" : "error",
      position: 'bottom',
    })
    console.log("deleted")
  }
  return (
    <Box
    shadow={'lg'}
    rounded={'lg'}
    overflow={'hidden'}
    transition={'all 0.3s'}
    _hover={{
      transform: "translateY(-5px)",
      shadow: 'xl'
    }}
    bg={bg}
    >
      <Image src={products.image} alt={products.name} h={48} w={"full"} objectFit={"cover"}/>
      <Box p={'4'}>
      <Heading
        as={'h3'}
        size={'md'}
        mb={'2'}
      >
         {products.name}

      </Heading>
      <Toaster />

      <Text
          fontWeight={"bold"} fontSize={"xl"} color={textColor} mb={4}
        >
         ${products.price}
        </Text>

        <HStack spacing={4} > 
       <FontAwesomeIcon title='Edit product' icon={faEdit} style={
        { 
          fontSize:'1.5rem', 
          cursor: 'pointer', 
          color: 'teal',
        }} 
      /> 
      <FontAwesomeIcon title='Delete product' icon={faTrashAlt} style={
        {
          fontSize:'1.5rem', 
          cursor: 'pointer', 
          color: 'red' 
        }} 
        onClick={() => handleDelete(products._id)}
      />

       </HStack>
    </Box>
    </Box>
  )
}

export default ProductCard