import React, { useContext } from 'react'
import { useWindowDimensions } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { ThemeContext } from 'styled-components/native'
import { Container, ItemsOnCart, ItemCounter, ButtonText } from './styles'

function AddToCartButton() {
	const theme = useContext(ThemeContext)
	const windowWidth = useWindowDimensions().width

	// TO DO: Create a custom ripple effect to be used on both Android and iOS
	return (
		<Container
			android_ripple={{
				color: '#8c2424',
				borderless: false,
				radius: windowWidth
			}}>
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
