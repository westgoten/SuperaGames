import React from 'react'
import GoToCartButton from '../GoToCartButton'
import SortGamesButton from '../SortGamesButton'
import { Container } from './styles'

function HeaderButtons() {
	return (
		<Container>
			<SortGamesButton />
			<GoToCartButton />
		</Container>
	)
}

export default HeaderButtons
