import React, { useState } from 'react'
import { Modal } from 'react-native'
import { useRoute } from '@react-navigation/native'
import SortGamesMenu from '../SortGamesMenu'
import { GameListing } from '../../utils/consts/routesNames'
import { Container, SortGamesIcon } from './styles'

function SortGamesButton() {
	const [isModalOpen, setModalOpen] = useState(false)
	const route = useRoute()
	const isHidden = route.name !== GameListing

	return (
		<Container isHidden={isHidden} onPress={openModal}>
			<SortGamesIcon />
			<Modal
				animationType='fade'
				transparent={true}
				visible={isModalOpen}
				onRequestClose={closeModal}>
				<SortGamesMenu closeModal={closeModal} />
			</Modal>
		</Container>
	)

	function openModal() {
		setModalOpen(true)
	}

	function closeModal() {
		setModalOpen(false)
	}
}

export default SortGamesButton
