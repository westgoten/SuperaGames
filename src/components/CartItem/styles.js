import styled from 'styled-components/native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const deleteItemButtonSize = 18

export const Container = styled.View``

export const ItemInfoContainer = styled.View`
	flex-direction: row;
	align-items: center;
	padding: 8px;
`

export const ItemImage = styled.Image`
	width: 90px;
	height: 90px;
	resize-mode: contain;
	margin-end: 8px;
`

export const TextContainer = styled.View`
	justify-content: center;
	flex: 1;
	margin-end: ${deleteItemButtonSize + 12}px;
`

export const Name = styled.Text``

export const Price = styled.Text`
	font-size: 16px;
	font-weight: bold;
`

export const DeleteItemButton = styled(FontAwesomeIcon).attrs((props) => ({
	icon: faTrash,
	color: props.theme.secondaryColor,
	size: deleteItemButtonSize
}))`
	position: absolute;
	end: 12px;
`

export const SubtotalContainer = styled.View``
