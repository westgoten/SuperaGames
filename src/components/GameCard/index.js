import React from 'react'
import AddToCartButton from '../AddToCartButton'
import { Card, GameImage, Name, Price } from './styles'

function GameCard(props) {
	return (
		<Card>
			<GameImage
				source={require('../../assets/the-witcher-iii-wild-hunt.png')}
			/>
			<Name>The Witcher III Wild Hunt</Name>
			<Price>R$ 119,50</Price>
			<AddToCartButton />
		</Card>
	)
}

export default GameCard
