import { configureStore } from '@reduxjs/toolkit'
import gameListingReducer from './reducers/gameListingReducer'

const reducers = { gamesForSale: gameListingReducer }

const store = configureStore({ reducer: reducers })

export default store
