import { Box,  Container, Heading, Input, VStack, For, HStack } from '@chakra-ui/react'
import { toaster, Toaster } from "../ui/toaster"
import { Button } from '../ui/button'
import { useState } from 'react'
import { useColorModeValue } from '../ui/color-mode'
import { useProductStore } from '../../store/product'
const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({ 
    name: '', 
    price:"", 
    image: '', 
  })
  const { createProduct } = useProductStore()

  const handleAddProduct = async () => {
    const {success, message} = await createProduct(newProduct)
    toaster.create({
      description: message,
      duration: 1000,
      removeDelay: 200,
      type: success ? "success" : "error",
      position: 'bottom',
    })
    console.log("success", success, "message", message)
    setNewProduct({ name: '', price: '', image: '' })
  }
  return (
    <Container maxW={'xl'} >
      <VStack spaceY='8'>
       <Heading 
          as={"h1"}
          size={"4xl"}
          textAlign={"center"}
          mb={8}
        >
          Create New Product
        </Heading>

        <Box
          w={'full'}
          bg={useColorModeValue('white', 'gray.700')}
          p={6} rounded={'lg'} shadow={'md'}
          >
          <VStack spaceY="4" 
          >
            <Input
              name='name'
              placeholder="Product Name"
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
            />
            <Input
              type="number"
              name='price'
              placeholder="Product Price"
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: e.target.value })
              }
            />
            <Input
              type="text"
              name='image'
              placeholder="Product Image_URL"
              value={newProduct.image}
              onChange={(e) =>
                setNewProduct({ ...newProduct, image: e.target.value })
              }
            />
            <Toaster />
            <Button colorPalette="cyan" variant="solid"
               size="sm"
               width="full" onClick={handleAddProduct}>
                  Add Product
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  )
}

export default CreatePage
