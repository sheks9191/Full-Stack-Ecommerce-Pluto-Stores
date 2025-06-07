import { Outlet, useNavigation } from "react-router-dom"
import { ComponentLoader, ExploreCategory, Hero, Newest } from "../components"
import { LandingWrapper } from "../styles/LandingStyles"
import { customAPI } from "../utils/utils"

const newProductsQuery = {
  queryKey:['newProducts'],
  queryFn:() => customAPI.get(`${productsUrl}?featured=true`)
}

const productsUrl ='/products'
export const loader = (queryClient) =>  async () => {
  const response = await queryClient.ensureQueryData(newProductsQuery) 
  return response.data
} 

const Landing = () => {

   const navigation = useNavigation()
    const isLoading = navigation.state === 'loading'

 
  return (
    <>
    <LandingWrapper>
      <Hero/>
    </LandingWrapper>
      
      {isLoading ? <div className="component-loader-center"><ComponentLoader/></div>:<Newest/>}
      <ExploreCategory/>  
      
      <Outlet/>
    </>
  
  )
}

export default Landing