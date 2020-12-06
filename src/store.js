import { configureStore } from '@reduxjs/toolkit'
import gameListingReducer from './reducers/gameListingReducer'
import cartReducer from './reducers/cartReducer'

const reducers = {
	gamesForSale: gameListingReducer,
	cart: cartReducer
}

const store = configureStore({ reducer: reducers })

export default store
