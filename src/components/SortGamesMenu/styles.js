import styled from 'styled-components/native'
import Card from '../Card'

const menuCardWidth = 180

export const Container = styled.View`
	flex: 1;
	align-items: center;
	justify-content: center;
`

export const OpacityLayer = styled.Pressable`
	position: absolute;
	top: 0;
	start: 0;
	bottom: 0;
	end: 0;
	background-color: rgba(0, 0, 0, 0.5);
`

export const MenuCard = styled(Card)`
	min-width: ${menuCardWidth}px;
`

export const MenuTitle = styled.Text`
	margin-bottom: 8px;
`

export const MenuOptionButton = styled.Pressable.attrs({
	android_ripple: {
		color: 'lightgrey',
		borderless: false,
		radius: menuCardWidth
	}
})`
	margin-top: 12px;
	padding: 8px;
	background-color: #ededed;
	border-radius: 4px;
`

export const MenuOption = styled.Text``
