import styled from 'styled-components/native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSortAmountUp } from '@fortawesome/free-solid-svg-icons'

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
	margin-end: 24px;
`

export const SortGamesIcon = styled(FontAwesomeIcon).attrs((props) => ({
	icon: faSortAmountUp,
	color: props.theme.secondaryTextColor,
	size: containerSize - 2
}))``
