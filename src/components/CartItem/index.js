import React from 'react'
import ItemQuantityControls from '../ItemQuantityControls'
import RemoveItemButton from '../RemoveItemButton'
import imageReferences from '../../utils/consts/imageReferences'
import formatNumberToBRL from '../../utils/formatNumberToBRL'
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

function CartItem({ item, isFirstCard }) {
	return (
		<Container isFirstCard={isFirstCard}>
			<ItemInfoContainer>
				<ItemImage source={imageReferences[item.image]} />
				<TextContainer>
					<Name numberOfLines={2}>{item.name}</Name>
					<Price numberOfLines={1}>
						{formatNumberToBRL(item.price)}
					</Price>
				</TextContainer>
				<RemoveItemButton />
			</ItemInfoContainer>
			<SubtotalContainer>
				<ItemQuantityControls />
				<Subtotal>R$ 0,00</Subtotal>
			</SubtotalContainer>
		</Container>
	)
}

export default CartItem
