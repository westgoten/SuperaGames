import { createReducer } from '@reduxjs/toolkit'
import {
	addGameToCart,
	removeGameFromCart,
	clearCart,
	changeGameUnits
} from '../actions/cartActions'
import createCartItem from '../utils/createCartItem'

const initialState = []

const cartReducer = createReducer(
	initialState,
	{
		[addGameToCart]: (state, action) => {
			const newState = state.slice()
			const cartItemIndex = newState.findIndex(
				(cartItem) => cartItem?.game?.id === action.payload.id
			)

			if (cartItemIndex >= 0) {
				const cartItem = newState[cartItemIndex]
				newState[cartItemIndex] = createCartItem(
					cartItem.game,
					cartItem.units + 1
				)
				return newState
			}

			newState.push(createCartItem(action.payload))
			return newState
		},
		[removeGameFromCart]: (state, action) =>
			state.filter((cartItem) => cartItem.game.id !== action.payload),
		[clearCart]: () => [],
		[changeGameUnits]: (state, action) =>
			state.map((cartItem) => {
				const game = cartItem.game
				const payload = action.payload
				if (game.id === payload.gameId)
					return createCartItem(game, payload.units)
				return cartItem
			})
	},
	[],
	(state) => state
)

export default cartReducer
