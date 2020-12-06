import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Cart } from '../../utils/consts/routesNames'
import { Container, GoToCartIcon, ItemsOnCart, ItemCounter } from './styles'

function GoToCartButton() {
	const navigation = useNavigation()

	return (
		<Container onPress={navigateToCartScreen}>
			<GoToCartIcon />
			<ItemsOnCart>
				<ItemCounter numberOfLines={1}>0</ItemCounter>
			</ItemsOnCart>
		</Container>
	)

	function navigateToCartScreen() {
		navigation.navigate(Cart)
	}
}

export default GoToCartButton
