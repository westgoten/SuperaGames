import React from 'react'
import {
	Container,
	Title,
	Message,
	GoBackToShoppingButton,
	ButtonText
} from './styles'

function EmptyCartWarning() {
	return (
		<Container>
			<Title>Oops...</Title>
			<Message>Parece que seu carrinho está vazio!</Message>
			<GoBackToShoppingButton>
				<ButtonText>Comece a comprar</ButtonText>
			</GoBackToShoppingButton>
		</Container>
	)
}

export default EmptyCartWarning
