import React from 'react'
import {
	Container,
	Title,
	Message,
	GoBackToHomeButton,
	ButtonText
} from './styles'

function EmptyCartWarning() {
	return (
		<Container>
			<Title>Oops...</Title>
			<Message>Parece que seu carrinho está vazio!</Message>
			<GoBackToHomeButton>
				<ButtonText>Comece a comprar</ButtonText>
			</GoBackToHomeButton>
		</Container>
	)
}

export default EmptyCartWarning
