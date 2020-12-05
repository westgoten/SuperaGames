import React from 'react'
import { Container, GoToCartIcon, ItemsOnCart, ItemCounter } from './styles'

function GoToCartButton() {
	return (
		<Container>
			<GoToCartIcon />
			<ItemsOnCart>
				<ItemCounter numberOfLines={1}>0</ItemCounter>
			</ItemsOnCart>
		</Container>
	)
}

export default GoToCartButton
