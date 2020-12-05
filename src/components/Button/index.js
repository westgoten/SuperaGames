import styled from 'styled-components/native'

export const rippleEffectColor = '#8c2424'

const Button = styled.Pressable`
	background-color: ${(props) => props.theme.primaryColor};
	border-radius: 4px;
	min-height: 36px;
	min-width: 64px;
	padding-vertical: 12px;
	padding-horizontal: 16px;
	flex-direction: row;
	elevation: 1;
	shadow-color: black;
	shadow-offset: 1px 1px;
	shadow-opacity: 0.5;
	shadow-radius: 2px;
`

export default Button
