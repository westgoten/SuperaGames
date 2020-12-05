import styled from 'styled-components/native'
import Button, { rippleEffectColor } from '../Button'

export const Container = styled(Button).attrs((props) => ({
	android_ripple: {
		color: rippleEffectColor,
		borderless: false,
		radius: props.windowWidth
	}
}))`
	padding: 0;
`

export const ItemsOnCart = styled.View`
	flex-direction: row;
	align-items: center;
	padding: 12px;
	background-color: ${(props) => props.theme.secondaryColor};
	border-top-left-radius: 4px;
	border-bottom-left-radius: 4px;
`

export const ItemCounter = styled.Text`
	color: ${(props) => props.theme.secondaryTextColor};
	margin-start: 4px;
`

export const ButtonText = styled.Text`
	color: ${(props) => props.theme.secondaryTextColor};
	text-transform: uppercase;
	align-self: stretch;
	flex: 1;
	text-align: center;
	padding-vertical: 12px;
	margin-end: 8%;
`
