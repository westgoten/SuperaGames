import React from 'react'
import { Image } from 'react-native'
import { Card, Name, Price, AddToCartButton } from './styles'

function GameCard() {
	return (
		<Card>
			<Image />
			<Name>Game Name</Name>
			<Price>Game Price</Price>
			<AddToCartButton title='ADD TO CART' />
		</Card>
	)
}

export default GameCard
