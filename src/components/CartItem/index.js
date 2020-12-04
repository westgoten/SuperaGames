import React from 'react'
import {
	Container,
	ItemInfoContainer,
	ItemImage,
	Name,
	Price,
	TextContainer,
	DeleteItemButton
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
				<DeleteItemButton />
			</ItemInfoContainer>
		</Container>
	)
}

export default CartItem
