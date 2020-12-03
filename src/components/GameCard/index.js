import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import AddToCartButton from '../AddToCartButton'
import {
	Card,
	ImageWrapper,
	GameImage,
	Name,
	Price,
	ScoreWrapper,
	Score
} from './styles'

function GameCard(props) {
	return (
		<Card>
			<ImageWrapper>
				<GameImage
					source={require('../../assets/the-witcher-iii-wild-hunt.png')}
				/>
				<ScoreWrapper>
					<FontAwesomeIcon icon={faStar} color='#fff432' />
					<Score>250</Score>
				</ScoreWrapper>
			</ImageWrapper>
			<Name numberOfLines={1}>The Witcher III Wild Hunt</Name>
			<Price numberOfLines={1}>R$ 119,50</Price>
			<AddToCartButton />
		</Card>
	)
}

export default GameCard
