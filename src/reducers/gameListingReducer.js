import { createReducer } from '@reduxjs/toolkit'
import {
	sortByScore,
	sortByLowestPrice,
	sortByHighestPrice,
	sortAlphabetically
} from '../actions/gameListingActions'
import games from '../data/products'

const gameListingReducer = createReducer(
	games,
	{
		[sortByScore]: (state) =>
			state.slice().sort((game1, game2) => game2.score - game1.score),
		[sortByLowestPrice]: (state) =>
			state.slice().sort((game1, game2) => game1.price - game2.price),
		[sortByHighestPrice]: (state) =>
			state.slice().sort((game1, game2) => game2.price - game1.price),
		[sortAlphabetically]: (state) =>
			state.slice().sort((game1, game2) => {
				if (game1.name < game2.name) return -1
				if (game1.name > game2.name) return 1
				return 0
			})
	},
	[],
	(state) => state
)

export default gameListingReducer
