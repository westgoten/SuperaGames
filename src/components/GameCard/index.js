import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import AddToCartButton from '../AddToCartButton'
import imageReferences from '../../utils/consts/imageReferences'
import formatNumberToBRL from '../../utils/formatNumberToBRL'
import {
	Container,
	ImageWrapper,
	GameImage,
	Name,
	Price,
	ScoreWrapper,
	Score
} from './styles'

function GameCard({ item, isLastCard }) {
	return (
		<Container isLastCard={isLastCard}>
			<ImageWrapper>
				<GameImage source={imageReferences[item.image]} />
				<ScoreWrapper>
					<FontAwesomeIcon icon={faStar} color='#fff432' />
					<Score>{item.score}</Score>
				</ScoreWrapper>
			</ImageWrapper>
			<Name numberOfLines={1}>{item.name}</Name>
			<Price numberOfLines={1}>{formatNumberToBRL(item.price)}</Price>
			<AddToCartButton item={item} />
		</Container>
	)
}

export default GameCard
