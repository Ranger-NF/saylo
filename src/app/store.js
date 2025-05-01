import {configureStore} from '@reduxjs/toolkit'
import AuthSlice from './blocks/auth/authSlice'
import ProductSlice from './blocks/products/productSlice'
import UserSlice from './blocks/user/userSlice'
import BrandSlice from './blocks/brands/brandSlice'
import CategoriesSlice from './blocks/categories/categoriesSlice'
import CartSlice from './blocks/cart/cartSlice'
import AddressSlice from './blocks/address/addressSlice'
import WishlistSlice from './blocks/wishlist/wishlistSlice'

export const store=configureStore({
    reducer:{
        AuthSlice,
        ProductSlice,
        UserSlice,
        BrandSlice,
        CategoriesSlice,
        CartSlice,
        AddressSlice,
        WishlistSlice
    }
})