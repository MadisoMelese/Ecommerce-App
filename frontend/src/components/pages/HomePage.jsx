import { Container, SimpleGrid, Text, VStack } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { useProductStore } from '../../store/product'
import ProductCard from "../ProductCard";
import { useEffect } from "react";

const HomePage = () => {
  const { fetchProducts, products } = useProductStore();
  useEffect(()=>{
    fetchProducts()
  }, [fetchProducts])
  console.log("products: ", products)
  return (
    <Container>
      <VStack spaceY='8'>
      <Text
          fontSize={{ base: '1.4rem', sm: '1.75rem' }}
          fontWeight="bold"
          textTransform="uppercase"
          textAlign={{ base: 'center', sm: 'left' }}
          bgGradient="to-r" gradientFrom="#00B5D8" gradientTo="#0025F7"
          bgClip="text"
      >
        Current Products
      </Text>

      <SimpleGrid columns={{
        base:1,
        md:2,
        lg:3
      }} gap="2.5rem" width={"full"}>
        {products.map((product)=>(
          <ProductCard
            key={product._id}
            products={product}
          >

          </ProductCard>
        ))}

      </SimpleGrid>

{/* // Page Not Found */}
      <Text
          fontSize={'xl'}
          fontWeight="bold"
          textAlign={{ base: 'center', sm: 'left' }}
          color={"gray.500"}
      >
        No Products Found😉 {' '}
        <Link to={"/create"}>
            <Text as="span" color="blue.500" _hover={{textDecoration:"underline"}}>
              Create A Product
            </Text>
        </Link>
      </Text>

      </VStack>
    </Container>
  )
}

export default HomePage
