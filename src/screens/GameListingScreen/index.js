import React from 'react'
import { SafeAreaView, ScrollView } from 'react-native'
import GameCard from '../../components/GameCard'
import { Container } from './styles'

function GameListingScreen() {
	return (
		<SafeAreaView>
			<Container>
				{/* TO DO: Replace with FlatList */}
				<ScrollView>
					<GameCard />
				</ScrollView>
			</Container>
		</SafeAreaView>
	)
}

export default GameListingScreen
