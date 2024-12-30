import { create } from 'zustand'

export const useProductStore = create((set) =>({
  products: [],
  setProducts: (products) => set({ products }),  // setProducts is a function that takes a products array and sets the products state to that array and is the same as useState in React 
  // like const [products, setProducts] = useState([])
  createProduct: async (newProduct) =>{
    if(!newProduct.name || !newProduct.price || !newProduct.image){
      return {success: false, message: "Please fill all fields"}
    }
    const res = await fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newProduct)
    })
    const data = await res.json()
    set((state) =>({products: [...state.products, data.data]}))
    return {success : true, message: "Product created successfully"}
  },
  fetchProducts: async () =>{
    const res = await fetch("/api/products");
    const data = await res.json();
    set({products: data.data})
  }
}))