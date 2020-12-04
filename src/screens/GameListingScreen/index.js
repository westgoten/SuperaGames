import React from 'react'
import { SafeAreaView, FlatList } from 'react-native'
import ScreenContainer from '../../components/ScreenContainer'
import GameCard from '../../components/GameCard'
import games from '../../data/products'

function GameListingScreen() {
	const renderItem = ({ item, index }) => (
		<GameCard data={item} isLastCard={index === games.length - 1} />
	)

	return (
		<SafeAreaView>
			<ScreenContainer>
				<FlatList
					data={games}
					renderItem={renderItem}
					keyExtractor={(item) => item.id.toString()}
				/>
			</ScreenContainer>
		</SafeAreaView>
	)
}

export default GameListingScreen
