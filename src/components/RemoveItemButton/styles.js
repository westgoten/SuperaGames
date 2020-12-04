import styled from 'styled-components/native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const removeItemButtonSize = 24
const removeItemIconSize = 18

export const Container = styled.Pressable.attrs({
	android_ripple: {
		color: 'grey',
		borderless: true,
		radius: removeItemIconSize
	}
})`
	position: absolute;
	end: 16px;
	width: ${removeItemButtonSize}px;
	height: ${removeItemButtonSize}px;
	align-items: center;
	justify-content: center;
`

export const RemoveItemIcon = styled(FontAwesomeIcon).attrs((props) => ({
	icon: faTrash,
	color: props.theme.secondaryColor,
	size: removeItemIconSize
}))``
