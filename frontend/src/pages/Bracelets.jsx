import { customAPI} from "../utils/utils"
import { ProductsContainer, ProductsTitle, SearchInput } from "../components"
import { useLoaderData } from "react-router-dom"



const braceletsQuery =(params) => {
  const {search} = params
  return {queryKey:['bracelets',search ?? ''],
  queryFn:() => customAPI.get(`${productsUrl}?category=bracelets`,{params})}
  
}

const productsUrl ='/products'
export const loader = (queryClient) =>  async ({request}) => {
  
   const searchParam = new URL(request.url).searchParams.entries();
  
  const params = Object.fromEntries([...searchParam]);
 
  const response = await queryClient.ensureQueryData(braceletsQuery(params))


  

  return response.data
} 

const Bracelets = () => {
  const {products} = useLoaderData()
  return (
    <div className="nav-layout">
      <ProductsTitle title ="Authentic Gemstone Bracelets" text= "These gemstone bracelets bring more than just style to your wrist - they’re packed with energy and meaning. Roll up your sleeves and let the power of gemstones do the talking."/>
      <SearchInput/>
     <ProductsContainer products={products}/>
    </div>
  )
}

export default Bracelets