import React from 'react'
import { SafeAreaView, FlatList } from 'react-native'
import GameCard from '../../components/GameCard'
import { Container } from './styles'
import games from '../../data/products'

function GameListingScreen() {
	const renderItem = ({ item, index }) => (
		<GameCard data={item} isLastCard={index === games.length - 1} />
	)

	return (
		<SafeAreaView>
			<Container>
				<FlatList
					data={games}
					renderItem={renderItem}
					keyExtractor={(item) => item.id.toString()}
				/>
			</Container>
		</SafeAreaView>
	)
}

export default GameListingScreen
