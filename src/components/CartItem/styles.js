import styled from 'styled-components/native'
import { removeItemButtonSize } from '../RemoveItemButton/styles'

export const Container = styled.View`
	margin-top: ${(props) => (props.isFirstCard ? '16px' : '24px')};
`

export const ItemInfoContainer = styled.View`
	flex-direction: row;
	align-items: center;
	padding-horizontal: 16px;
`

export const ItemImage = styled.Image`
	width: 72px;
	height: 72px;
	resize-mode: contain;
	margin-end: 16px;
`

export const TextContainer = styled.View`
	flex: 1;
	margin-end: ${removeItemButtonSize + 16}px;
`

export const Name = styled.Text``

export const Price = styled.Text`
	font-size: 16px;
	font-weight: bold;
`

export const SubtotalContainer = styled.View`
	background-color: #ededed;
	padding: 8px;
	flex-direction: row;
	margin-top: 16px;
	border-radius: 4px;
`

export const Subtotal = styled(Price)`
	margin-start: auto;
`
