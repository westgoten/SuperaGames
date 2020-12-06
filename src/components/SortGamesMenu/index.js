import React from 'react'
import { useDispatch } from 'react-redux'
import {
	sortByScore,
	sortByLowestPrice,
	sortByHighestPrice,
	sortAlphabetically
} from '../../actions/gameListingActions'
import {
	Container,
	OpacityLayer,
	MenuCard,
	MenuTitle,
	MenuOptionButton,
	MenuOption
} from './styles'

function SortGamesMenu({ closeModal }) {
	const dispatch = useDispatch()

	return (
		<Container>
			<OpacityLayer onPress={closeModal} />
			<MenuCard>
				<MenuTitle>Ordenar por:</MenuTitle>
				<MenuOptionButton
					onPress={() => sortGamesByOption(sortByScore)}>
					<MenuOption>Popularidade</MenuOption>
				</MenuOptionButton>
				<MenuOptionButton
					onPress={() => sortGamesByOption(sortByLowestPrice)}>
					<MenuOption>Menor preço</MenuOption>
				</MenuOptionButton>
				<MenuOptionButton
					onPress={() => sortGamesByOption(sortByHighestPrice)}>
					<MenuOption>Maior preço</MenuOption>
				</MenuOptionButton>
				<MenuOptionButton
					onPress={() => sortGamesByOption(sortAlphabetically)}>
					<MenuOption>Ordem alfabética</MenuOption>
				</MenuOptionButton>
			</MenuCard>
		</Container>
	)

	function sortGamesByOption(createSortingAction) {
		dispatch(createSortingAction())
		closeModal()
	}
}

export default SortGamesMenu
