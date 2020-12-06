import { createAction } from '@reduxjs/toolkit'

export const addGameToCart = createAction('addGameToCart')
export const removeGameFromCart = createAction('removeGameFromCart')
export const changeGameUnits = createAction(
	'changeGameUnits',
	(gameId, units) => ({
		payload: {
			gameId,
			units
		}
	})
)
