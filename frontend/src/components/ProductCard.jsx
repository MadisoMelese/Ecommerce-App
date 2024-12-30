import { Box, Heading, Image, Text } from "@chakra-ui/react"

const ProductCard = ({products}) => {
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
      <Text
          fontWeight={"bold"} fontSize={"xl"} color={"inherit"} mb={4}
        >
         {products.price}
        </Text>
    </Box>

    </Box>


  )
}

export default ProductCard