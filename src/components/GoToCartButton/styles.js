import styled from 'styled-components/native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const containerSize = 24

export const Container = styled.Pressable.attrs({
	android_ripple: {
		color: 'lightgrey',
		borderless: true,
		radius: containerSize
	}
})`
	width: ${containerSize}px;
	height: ${containerSize}px;
	justify-content: center;
	align-items: center;
`

export const GoToCartIcon = styled(FontAwesomeIcon).attrs((props) => ({
	icon: faShoppingCart,
	color: props.theme.secondaryTextColor,
	size: containerSize - 2
}))``

export const ItemsOnCart = styled.View`
	position: absolute;
	top: -6px;
	end: -8px;
	min-width: 18px;
	min-height: 18px;
	border-radius: 100px;
	background-color: ${(props) => props.theme.primaryColor};
	align-items: center;
	justify-content: center;
`

export const ItemCounter = styled.Text`
	color: ${(props) => props.theme.secondaryTextColor};
	font-size: 12px;
	padding: 0;
	margin: 0;
`
