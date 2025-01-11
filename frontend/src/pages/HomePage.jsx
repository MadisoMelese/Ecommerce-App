import { Container, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/product";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
	const [isLoading, setIsLoading] = useState(false)
	const { fetchProducts, products } = useProductStore();

	useEffect(() => {
			setIsLoading(true)
		const timer = setTimeout(()=>{
			setIsLoading(false)
			fetchProducts();
		}, 2000)
		return () => clearTimeout(timer);
	}, [fetchProducts]);
	// console.log("products", products);

	return (
		<Container maxW='container.xl' py={12}>
			<VStack spacing={8}>
				<Text
					fontSize={"30"}
					fontWeight={"bold"}
					bgGradient={"linear(to-r, cyan.400, blue.500)"}
					bgClip={"text"}
					textAlign={"center"}
				>
					Current Products 🚀
				</Text>

      {isLoading && products.length === 0 ? (
        <h>Loading...</h>
      ) : (
        <>
          {products.length === 0 && isLoading ? (
            <Text fontSize='xl' textAlign='center' fontWeight='bold' color='gray.500'>
              No products found 😢{" "}
              <Link to={"/create"}>
                <Text as='span' color='blue.500' _hover={{ textDecoration: 'underline' }}>
                  Create a product
                </Text>
              </Link>
            </Text>
          ) : (
            <SimpleGrid
              columns={{ base: 1, md: 2, lg: 3 }}
              spacing={10}
              w='full'
            >
              {products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </SimpleGrid>
          )}
        </>
      )}
			</VStack>
		</Container>
	);
};
export default HomePage;
