import styled from 'styled-components/native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'

const controlsHeight = 24

export const QuantityWrapper = styled.View`
	flex-direction: row;
	align-items: center;
	width: 120px;
`

const QuantityButton = styled.Pressable.attrs({
	android_ripple: {
		color: 'grey',
		borderless: true,
		radius: 20
	}
})`
	width: ${controlsHeight}px;
	height: ${controlsHeight}px;
	border: 2px solid ${(props) => props.theme.secondaryColor};
	border-radius: 100px;
	align-items: center;
	justify-content: center;
`

export const MinusButton = styled(QuantityButton)`
	margin-end: 8px;
`

export const PlusButton = styled(QuantityButton)`
	margin-start: 8px;
`

const QuantityIcon = styled(FontAwesomeIcon).attrs((props) => ({
	icon: faMinus,
	color: props.theme.secondaryColor,
	size: 16
}))``

export const MinusIcon = styled(QuantityIcon)``

export const PlusIcon = styled(QuantityIcon).attrs({
	icon: faPlus
})``

export const QuantityInput = styled.TextInput`
	color: ${(props) => props.theme.primaryTextColor};
	background-color: white;
	height: ${controlsHeight}px;
	border: none;
	flex: 1;
	text-align: center;
	padding: 0;
	border-radius: 4px;
`
