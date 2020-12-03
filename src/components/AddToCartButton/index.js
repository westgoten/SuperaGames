import React from 'react'
import { useWindowDimensions } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { Container, ItemsOnCart, ItemCounter, ButtonText } from './styles'

function AddToCartButton() {
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
				<FontAwesomeIcon icon={faCartPlus} color='white' />
				<ItemCounter>0</ItemCounter>
			</ItemsOnCart>
			<ButtonText>Add to cart</ButtonText>
		</Container>
	)
}

export default AddToCartButton
