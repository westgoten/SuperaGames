import styled from 'styled-components/native'
import Button, { rippleEffectColor } from '../Button'

export const Container = styled.View`
	align-items: center;
	align-self: center;
`

export const Title = styled.Text`
	font-size: 34px;
	margin-bottom: 8px;
`

export const Message = styled.Text`
	margin-bottom: 16px;
`

export const GoBackToShoppingButton = styled(Button).attrs({
	android_ripple: {
		color: rippleEffectColor,
		borderless: false,
		radius: 360
	}
})`
	align-self: stretch;
	align-items: center;
	justify-content: center;
`

export const ButtonText = styled.Text`
	color: ${(props) => props.theme.secondaryTextColor};
	text-transform: uppercase;
`
