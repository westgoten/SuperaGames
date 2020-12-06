import React from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { useWindowDimensions } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { GameListing } from '../../utils/consts/routesNames'
import { clearCart } from '../../actions/cartActions'
import formatNumberToBRL from '../../utils/formatNumberToBRL'
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

const SHIPPING_COST_PER_UNIT = 10
const FREE_SHIPPING_THRESHOLD = 250

function Checkout({ isCartEmpty }) {
	const dispatch = useDispatch()
	const [subtotal, totalGameUnits] = useSelector(
		selectCartCosts,
		shallowEqual
	)

	const navigation = useNavigation()
	const windowWidth = useWindowDimensions().width

	return (
		<Container isCartEmpty={isCartEmpty}>
			<SubtotalContainer>
				<SubtotalText>Subtotal</SubtotalText>
				<Subtotal>{formatNumberToBRL(subtotal)}</Subtotal>
			</SubtotalContainer>
			<ShippingContainer>
				<ShippingText>Frete</ShippingText>
				<Shipping>
					{formatNumberToBRL(calculateShippingCost())}
				</Shipping>
			</ShippingContainer>
			<TotalContainer>
				<TotalText>Total</TotalText>
				<Total>{formatNumberToBRL(calculateTotal())}</Total>
			</TotalContainer>
			<BuyButton windowWidth={windowWidth} onPress={buyAll}>
				<ButtonText>Comprar tudo</ButtonText>
			</BuyButton>
		</Container>
	)

	function selectCartCosts(state) {
		return state.cart.reduce(
			(accumulator, cartItem) => {
				accumulator[0] += cartItem.game.price * cartItem.units
				accumulator[1] += cartItem.units
				return accumulator
			},
			[0, 0]
		)
	}

	function calculateShippingCost() {
		return subtotal > FREE_SHIPPING_THRESHOLD
			? 0
			: SHIPPING_COST_PER_UNIT * totalGameUnits
	}

	function calculateTotal() {
		return subtotal + calculateShippingCost()
	}

	function buyAll() {
		dispatch(clearCart())
		navigateToGameListingScreen()
	}

	function navigateToGameListingScreen() {
		navigation.navigate(GameListing)
	}
}

export default Checkout
