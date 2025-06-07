import { configureStore } from "@reduxjs/toolkit";

import uiReducer from "./features/ui/uiSlice";
import filterReducer from "./features/filter/filterSlice";
import  authReducer  from "./features/auth/authSlice";
import cartReducer from "./features/cart/cartSlice";
import adminReducer from "./features/admin/adminSlice";


export const store = configureStore({

    reducer: {
        ui:uiReducer,
        filter:filterReducer,
        auth:authReducer,
        cart:cartReducer,
        admin:adminReducer,
    }
})