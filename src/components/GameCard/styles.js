import styled from 'styled-components/native'

export const Card = styled.View`
	background-color: white;
	border-radius: 4px;
	padding: 12px;
	margin-horizontal: 12px;
	margin-top: 16px;
	margin-bottom: ${(props) => (props.isLastCard ? '16px' : 0)};
	elevation: 1;
	shadow-color: black;
	shadow-offset: 1px 1px;
	shadow-opacity: 0.5;
	shadow-radius: 2px;
`

export const ImageWrapper = styled.View`
	margin: 16px auto 28px auto;
`

export const GameImage = styled.Image``

export const Name = styled.Text``

export const Price = styled.Text`
	font-weight: bold;
	font-size: 24px;
	margin-bottom: 12px;
`

export const ScoreWrapper = styled.View`
	position: absolute;
	top: 144px;
	end: -4px;
	min-width: 70px;
	min-height: 50px;
	border: 3px solid ${(props) => props.theme.primaryColor};
	border-radius: 100px;
	padding: 8px;
	margin-top: 4px;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	background-color: #b22e2e;
`

export const Score = styled.Text`
	font-weight: bold;
	font-size: 16px;
	color: ${(props) => props.theme.secondaryTextColor};
	margin-start: 4px;
`
