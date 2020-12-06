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
				<ItemImage source={imageReferences[item.game.image]} />
				<TextContainer>
					<Name numberOfLines={2}>{item.game.name}</Name>
					<Price numberOfLines={1}>
						{formatNumberToBRL(item.game.price)}
					</Price>
				</TextContainer>
				<RemoveItemButton gameId={item.game.id} />
			</ItemInfoContainer>
			<SubtotalContainer>
				<ItemQuantityControls item={item} />
				<Subtotal>{formatNumberToBRL(calculateSubtotal())}</Subtotal>
			</SubtotalContainer>
		</Container>
	)

	function calculateSubtotal() {
		return item.game.price * item.units
	}
}

export default CartItem
