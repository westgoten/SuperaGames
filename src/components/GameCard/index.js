import React from 'react'
import { Card, GameImage, Name, Price, AddToCartButton } from './styles'

function GameCard(props) {
	return (
		<Card>
			<GameImage
				source={require('../../assets/the-witcher-iii-wild-hunt.png')}
			/>
			<Name>Game Name</Name>
			<Price>Game Price</Price>
		</Card>
	)
}

export default GameCard
