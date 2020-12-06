import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { Cart } from '../../utils/consts/routesNames'
import { Container, GoToCartIcon, ItemsOnCart, ItemCounter } from './styles'

function GoToCartButton() {
	const numberOfGameUnitsOnCart = useSelector(selectNumberOfGameUnitsOnCart)
	const navigation = useNavigation()

	return (
		<Container onPress={navigateToCartScreen}>
			<GoToCartIcon />
			<ItemsOnCart>
				<ItemCounter numberOfLines={1}>
					{numberOfGameUnitsOnCart}
				</ItemCounter>
			</ItemsOnCart>
		</Container>
	)

	function navigateToCartScreen() {
		navigation.navigate(Cart)
	}

	function selectNumberOfGameUnitsOnCart(state) {
		return state.cart.reduce((accumulator, cartItem) => {
			return accumulator + cartItem.units
		}, 0)
	}
}

export default GoToCartButton
