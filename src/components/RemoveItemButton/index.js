import React from 'react'
import { useDispatch } from 'react-redux'
import { removeGameFromCart } from '../../actions/cartActions'
import { Container, RemoveItemIcon } from './styles'

function RemoveItemButton({ gameId }) {
	const dispatch = useDispatch()

	return (
		<Container onPress={removeItem}>
			<RemoveItemIcon />
		</Container>
	)

	function removeItem() {
		dispatch(removeGameFromCart(gameId))
	}
}

export default RemoveItemButton
