import React from 'react'
import ItemQuantityControls from '../ItemQuantityControls'
import RemoveItemButton from '../RemoveItemButton'
import {
	Container,
	ItemInfoContainer,
	ItemImage,
	Name,
	Price,
	TextContainer,
	SubtotalContainer,
	Subtotal
} from './styles'

function CartItem() {
	return (
		<Container>
			<ItemInfoContainer>
				<ItemImage
					source={require('../../assets/the-witcher-iii-wild-hunt.png')}
				/>
				<TextContainer>
					<Name numberOfLines={2}>The Witcher III Wild Hunt</Name>
					<Price numberOfLines={1}>R$ 119,50</Price>
				</TextContainer>
				<RemoveItemButton />
			</ItemInfoContainer>
			<SubtotalContainer>
				<ItemQuantityControls />
				<Subtotal>R$ 119,50</Subtotal>
			</SubtotalContainer>
		</Container>
	)
}

export default CartItem
