import React from 'react'
import { useWindowDimensions } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { GameListing } from '../../utils/consts/routesNames'
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
	const navigation = useNavigation()
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
			<BuyButton windowWidth={windowWidth} onPress={buyAll}>
				<ButtonText>Comprar tudo</ButtonText>
			</BuyButton>
		</Container>
	)

	function buyAll() {
		navigateToGameListingScreen()
	}

	function navigateToGameListingScreen() {
		navigation.navigate(GameListing)
	}
}

export default Checkout
