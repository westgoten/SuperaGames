import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import AddToCartButton from '../AddToCartButton'
import imageReferences from '../../utils/consts/imageReferences'
import {
	Container,
	ImageWrapper,
	GameImage,
	Name,
	Price,
	ScoreWrapper,
	Score
} from './styles'

function GameCard({ data, isLastCard }) {
	const numberFormatter = new Intl.NumberFormat('pt-BR', {
		style: 'currency',
		currency: 'BRL'
	})

	return (
		<Container isLastCard={isLastCard}>
			<ImageWrapper>
				<GameImage source={imageReferences[data.image]} />
				<ScoreWrapper>
					<FontAwesomeIcon icon={faStar} color='#fff432' />
					<Score>{data.score}</Score>
				</ScoreWrapper>
			</ImageWrapper>
			<Name numberOfLines={1}>{data.name}</Name>
			<Price numberOfLines={1}>
				{numberFormatter.format(data.price).split('$').join('$ ')}
			</Price>
			<AddToCartButton />
		</Container>
	)
}

export default GameCard
