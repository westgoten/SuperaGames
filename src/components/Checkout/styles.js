import styled from 'styled-components/native'
import Button, { rippleEffectColor } from '../Button'

export const Container = styled.View`
	padding-top: 24px;
	display: ${(props) => (props.isCartEmpty ? 'none' : 'flex')};
`

const TextContainer = styled.View`
	flex-direction: row;
	justify-content: space-between;
`

export const SubtotalContainer = styled(TextContainer)``

const SmallText = styled.Text.attrs({
	numberOfLines: 1
})``

export const SubtotalText = styled(SmallText)``

export const Subtotal = styled(SmallText)`
	margin-start: 16px;
`

export const ShippingContainer = styled(TextContainer)`
	margin-bottom: 24px;
`

export const ShippingText = styled(SmallText)``

export const Shipping = styled(SmallText)``

const BigText = styled.Text.attrs({
	numberOfLines: 1
})`
	font-size: 20px;
`

export const TotalContainer = styled(TextContainer)`
	margin-bottom: 16px;
`

export const TotalText = styled(BigText)``

export const Total = styled(BigText)``

export const BuyButton = styled(Button).attrs((props) => ({
	android_ripple: {
		color: rippleEffectColor,
		borderless: false,
		radius: props.windowWidth
	}
}))`
	justify-content: center;
	align-items: center;
`

export const ButtonText = styled.Text`
	color: ${(props) => props.theme.secondaryTextColor};
	text-transform: uppercase;
`
