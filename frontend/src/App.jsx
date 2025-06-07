
import { createBrowserRouter,  RouterProvider} from "react-router-dom";

import { QueryClient,QueryClientProvider } from "@tanstack/react-query"
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools"



import { Account,Admin,AdminOrders,AdminProducts,AdminReviews,AdminUsers,Bracelets,Cart,CheckOut,Contact,ContactForm,Earrings,Error,Explore,Faq,HomeLayout,Landing,Login,NeckLaces,ProtectedRoutes,Register,Reviews,Rings,Settings,SingleProduct,WishList } from "./pages";

import { loader as exploreLoader } from "./pages/Explore";
import { loader as necklacesLoader } from "./pages/NeckLaces";
import { loader as ringsLoader } from "./pages/Rings";
import { loader as earringsLoader } from "./pages/Earrings";
import { loader as braceletsLoader } from "./pages/Bracelets";
import { loader as singleProductLoader } from "./pages/SingleProduct";
import { loader as LandingPageLoader } from "./pages/Landing";
import { loader as ReviewsLoader } from "./pages/Reviews";
import { loader as WishlistsLoader } from "./pages/WishList";
import { loader as HomeLayoutLoader } from "./pages/HomeLayout";
import { loader as AdminReviewsLoader } from "./pages/AdminReviews";
import { loader as AdminProductsLoader } from "./pages/AdminProducts";
import { loader as AdminUsersLoader } from "./pages/AdminUsers";
import { loader as AdminOrdersLoader } from "./pages/AdminOrders";
import { action as registerAction } from "./pages/Register";
import { action as loginAction } from "./pages/Login";
import { action as singleProductAction } from "./pages/SingleProduct";
import { action as addWishlistAction } from "./pages/AddWishlist";
import { action as deleteWishlistAction } from "./pages/DeleteWishlist";
import { action as deleteReviewAction } from "./pages/DeleteReview";
import { action as deleteProductAction } from "./pages/DeleteProduct";
import { action as deleteOrderAction } from "./pages/DeleteOrder";
import { action as checkoutAction } from "./pages/CheckOut";


import { store } from "./store";
import axiosInterceptor from "./utils/utils";

const queryClient = new QueryClient({
  defaultOptions: {
    queries:{
      staleTime:1000 * 60 * 5
    }
  }
})

const router = createBrowserRouter([
    {
        path:'/',
        element:<HomeLayout/>,
        errorElement:<Error/>,
        loader:HomeLayoutLoader(store),
        children:[
          {
            // index:true,
            element:<Landing/>,
            loader:LandingPageLoader(queryClient),
            children:[

              {
                index:true,
                element:<Reviews/>,
                loader:ReviewsLoader,

              }
            ]
          },
          {
            path:'account/',
            element:<Account/>,
            children:[
              {
                index:true,
                element:<Login/>,
                action:loginAction(store),
              },

               {
                path:'register',
                element:<Register/>,
                action:registerAction,
              },

            ]
          },
           {
            path:'bracelets',
            element:<Bracelets/>,
            loader:braceletsLoader(queryClient),
          },
           {
            path:'cart',
            element:<Cart/>
          },
           {
            path:'checkout',
            element:<CheckOut/>,
            action:checkoutAction(store),
          },
           {
            path:'contact',
            element:<Contact/>
          },
           {
            path:'contact-form',
            element:<ContactForm/>
          },
           {
            path:'earrings',
            element:<Earrings/>,
            loader:earringsLoader(queryClient),

          },
           {
            path:'explore',
            element:<Explore/>,
            loader:exploreLoader,
          },

           {
            path:'single-product/:id',
            element:<SingleProduct/>,
            loader:singleProductLoader,
            action:singleProductAction(store),
            
          },

           {
            path:'faq',
            element:<Faq/>
          },
           {
            path:'necklaces',
            element:<NeckLaces/>,
            loader:necklacesLoader(queryClient),
            
          },
           
           {
            path:'rings',
            element:<Rings/>,
            loader:ringsLoader(queryClient),
          },
           
           {
            path:'settings',
            element:<Settings/>,
          },
           {
            path:'wishlist',
            element:<WishList/>,
            loader:WishlistsLoader(store),
          },

          {
            path:'add-wishlist/:id',
            action:addWishlistAction,
            
          },

           {
            path:'delete-wishlist/:id',
            action:deleteWishlistAction,
            
          },

        ]
    },

    {
      path:'admin',

      element: <ProtectedRoutes>
        <Admin/>
      </ProtectedRoutes>,
      errorElement:<Error/>,
      children:[
        {
          index:true,
          element:<AdminOrders/>,
          loader:AdminOrdersLoader,
        },
        {
            path:'delete-order/:id',
            action:deleteOrderAction,
            
          },
         {
          path:'admin-users',
          element:<AdminUsers/>,
          loader:AdminUsersLoader,
        },
         {
          path:'admin-reviews',
          element:<AdminReviews/>,
          loader:AdminReviewsLoader,
        },

         {
            path:'delete-review/:id',
            action:deleteReviewAction,
            
          },

         {
          path:'admin-products',
          element:<AdminProducts/>,
          loader:AdminProductsLoader,
        },
         {
            path:'delete-product/:id',
            action:deleteProductAction,
            
          },
      ]
    }
])


const App = () => {
  
  axiosInterceptor(store)
  return (
      <QueryClientProvider client={queryClient}>
      {/* <ReactQueryDevtools initialIsOpen={false}/> */}
     <RouterProvider router={router}/>
    </QueryClientProvider>
  )
}

export default App