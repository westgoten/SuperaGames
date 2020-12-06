import React from 'react'
import { useRoute } from '@react-navigation/native'
import { GameListing } from '../../utils/consts/routesNames'
import { Container, SortGamesIcon } from './styles'

function SortGamesButton() {
	const route = useRoute()
	const isHidden = route.name !== GameListing

	return (
		<Container isHidden={isHidden}>
			<SortGamesIcon />
		</Container>
	)
}

export default SortGamesButton
