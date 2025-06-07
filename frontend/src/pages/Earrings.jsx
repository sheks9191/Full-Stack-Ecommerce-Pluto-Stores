import { customAPI } from "../utils/utils"
import { ProductsContainer, ProductsTitle, SearchInput } from "../components"
import { useLoaderData } from "react-router-dom"


const earringsQuery =(params) => {
  const {search} = params
  return {queryKey:['earrings',search ?? ''],
  queryFn:() => customAPI.get(`${productsUrl}?category=earrings`,{params})}
  
}

const productsUrl ='/products'
export const loader = (queryClient) => async ({request}) => {
  
  const searchParam = new URL(request.url).searchParams.entries();
  
  const params = Object.fromEntries([...searchParam]);
  
  const response = await queryClient.ensureQueryData(earringsQuery(params))

  return response.data
}  
const Earrings = () => {
  const {products}=useLoaderData()
  return (
    <div className="nav-layout">
      <ProductsTitle title="Authentic Gemstone Earrings" text="From studs that pop to huggies that hug, these gemstone earrings give you the energy boost you didn’t know you needed."/>
      <SearchInput/>
     <ProductsContainer products={products}/>
    </div>
  )
}

export default Earrings