import React, { useContext } from 'react'
import { useWindowDimensions } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { ThemeContext } from 'styled-components/native'
import { Container, ItemsOnCart, ItemCounter, ButtonText } from './styles'

function AddToCartButton() {
	const theme = useContext(ThemeContext)
	const windowWidth = useWindowDimensions().width

	return (
		<Container windowWidth={windowWidth}>
			<ItemsOnCart>
				<FontAwesomeIcon
					icon={faCartPlus}
					color={theme.secondaryTextColor}
				/>
				<ItemCounter>0</ItemCounter>
			</ItemsOnCart>
			<ButtonText>Adicionar ao carrinho</ButtonText>
		</Container>
	)
}

export default AddToCartButton
