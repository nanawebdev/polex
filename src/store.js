import { configureStore } from '@reduxjs/toolkit';
import accountReducer from './pages/Account/accountSlice'

export default configureStore({
    reucer: {
        account: accountReducer
    }
})