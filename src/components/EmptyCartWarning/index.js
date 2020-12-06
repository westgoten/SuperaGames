import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { GameListing } from '../../utils/consts/routesNames'
import {
	Container,
	Title,
	Message,
	GoBackToShoppingButton,
	ButtonText
} from './styles'

function EmptyCartWarning() {
	const navigation = useNavigation()

	return (
		<Container>
			<Title>Oops...</Title>
			<Message>Parece que seu carrinho está vazio!</Message>
			<GoBackToShoppingButton onPress={navigateToGameListingScreen}>
				<ButtonText>Comece a comprar</ButtonText>
			</GoBackToShoppingButton>
		</Container>
	)

	function navigateToGameListingScreen() {
		navigation.navigate(GameListing)
	}
}

export default EmptyCartWarning
