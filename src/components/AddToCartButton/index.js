import React, { useContext } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useWindowDimensions } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { ThemeContext } from 'styled-components/native'
import * as actions from '../../actions/cartActions'
import { GAME_UNITS_MAX } from '../../utils/consts/gameUnitsLimits'
import { Container, ItemsOnCart, ItemCounter, ButtonText } from './styles'

function AddToCartButton({ item }) {
	const gameUnitsOnCart = useSelector(selectGameUnitsOnCart)
	const dispatch = useDispatch()

	const theme = useContext(ThemeContext)
	const windowWidth = useWindowDimensions().width

	return (
		<Container windowWidth={windowWidth} onPress={addGameToCart}>
			<ItemsOnCart>
				<FontAwesomeIcon
					icon={faCartPlus}
					color={theme.secondaryTextColor}
				/>
				<ItemCounter>{gameUnitsOnCart}</ItemCounter>
			</ItemsOnCart>
			<ButtonText>Adicionar ao carrinho</ButtonText>
		</Container>
	)

	function selectGameUnitsOnCart(state) {
		const cartItem = state.cart.find(
			(cartItem) => cartItem?.game?.id === item.id
		)
		return cartItem?.units ?? 0
	}

	function addGameToCart() {
		if (gameUnitsOnCart < GAME_UNITS_MAX)
			dispatch(actions.addGameToCart(item))
	}
}

export default AddToCartButton
