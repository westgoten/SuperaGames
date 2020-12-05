import React from 'react'
import { useWindowDimensions } from 'react-native'
import {
	Container,
	SubtotalContainer,
	SubtotalText,
	Subtotal,
	ShippingContainer,
	ShippingText,
	Shipping,
	TotalContainer,
	TotalText,
	Total,
	BuyButton,
	ButtonText
} from './styles'

function Checkout({ isCartEmpty }) {
	const windowWidth = useWindowDimensions().width

	return (
		<Container isCartEmpty={isCartEmpty}>
			<SubtotalContainer>
				<SubtotalText>Subtotal</SubtotalText>
				<Subtotal>R$ 0,00</Subtotal>
			</SubtotalContainer>
			<ShippingContainer>
				<ShippingText>Frete</ShippingText>
				<Shipping>R$ 0,00</Shipping>
			</ShippingContainer>
			<TotalContainer>
				<TotalText>Total</TotalText>
				<Total>R$ 0,00</Total>
			</TotalContainer>
			<BuyButton windowWidth={windowWidth}>
				<ButtonText>Comprar tudo</ButtonText>
			</BuyButton>
		</Container>
	)
}

export default Checkout
