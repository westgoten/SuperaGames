import React from 'react'
import { useSelector } from 'react-redux'
import { SafeAreaView, FlatList } from 'react-native'
import ScreenContainer from '../../components/ScreenContainer'
import GameCard from '../../components/GameCard'

function GameListingScreen() {
	const gamesForSale = useSelector((state) => state.gamesForSale)

	const renderItem = ({ item, index }) => (
		<GameCard item={item} isLastCard={index === gamesForSale.length - 1} />
	)

	return (
		<SafeAreaView>
			<ScreenContainer>
				<FlatList
					data={gamesForSale}
					renderItem={renderItem}
					keyExtractor={(item) => item.id.toString()}
				/>
			</ScreenContainer>
		</SafeAreaView>
	)
}

export default GameListingScreen
