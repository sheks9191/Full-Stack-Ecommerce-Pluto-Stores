import { customAPI } from "../utils/utils"
import { ProductsContainer, ProductsTitle, SearchInput } from "../components"
import { useLoaderData } from "react-router-dom"



const ringsQuery =(params) => {
  const {search} = params
  return {queryKey:['rings',search ?? ''],
  queryFn:() => customAPI.get(`${productsUrl}?category=rings`,{params})}
  
}

const productsUrl ='/products'
export const loader = (queryClient) => async ({request}) => {
  
   const searchParam = new URL(request.url).searchParams.entries();
  
  const params = Object.fromEntries([...searchParam]);
  const response = await queryClient.ensureQueryData(ringsQuery(params))

  return response.data
}  


const Rings = () => {
  const {products} = useLoaderData()
  return (
    <div className="nav-layout">
      <ProductsTitle title="Authentic Gemstone Rings" text="Whatever energy you need today, you’ll find beautiful, unique gemstone rings for you. Shop your favorite or try something new - you never know what you might discover."/>
      <SearchInput/>
     <ProductsContainer products={products}/>
    </div>
  )
}

export default Rings