import styled from 'styled-components/native'
import { StyleSheet } from 'react-native'
import Card from '../../components/Card'

export const CartCard = styled(Card)`
	flex: 1;
`

const contentContainerStyle = StyleSheet.create({
	style: {
		flex: 1,
		justifyContent: 'center'
	}
})

export const CartItemList = styled.FlatList.attrs((props) => {
	return props.isListEmpty
		? { contentContainerStyle: contentContainerStyle.style }
		: {}
})`
	flex: 1;
`
