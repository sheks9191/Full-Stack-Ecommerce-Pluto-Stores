import { useLoaderData } from "react-router-dom"
import { customAPI } from "../utils/utils"
import { ProductsContainer, ProductsTitle, SearchInput } from "../components"


const necklacesQuery =(params) => {
  const {search} = params
  return {queryKey:['necklaces',search ?? ''],
  queryFn:() => customAPI.get(`${productsUrl}?category=necklaces`,{params})}
  
}

const productsUrl ='/products'
export const loader = (queryClient) => async ({request}) => {
   const searchParam = new URL(request.url).searchParams.entries();
  
  const params = Object.fromEntries([...searchParam]);
  const response = await queryClient.ensureQueryData(necklacesQuery(params))

  return response.data
}  

const NeckLaces = () => {
const {products} = useLoaderData();
  return (
    <div className="nav-layout">
      <ProductsTitle title="Authentic Gemstone Necklaces" text="Designed to be layered and loved, these necklaces carry the powerful energy of gemstones. Keep that energy close to your heart, right where it belongs."/>
      <SearchInput/>
     <ProductsContainer products={products}/>
    </div>
  )
}

export default NeckLaces