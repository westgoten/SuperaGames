import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { Container, ItemsOnCart, ItemCounter, ButtonText } from './styles'

function AddToCartButton() {
	// TO DO: Create a custom ripple effect to be used on both Android and iOS
	return (
		<Container
			android_ripple={{
				color: '#bf3131',
				borderless: false,
				radius: 200
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
