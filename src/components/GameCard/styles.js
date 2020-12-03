import styled from 'styled-components/native'

// TO DO: Add Score style

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

export const GameImage = styled.Image`
	margin: 16px auto 28px auto;
`

export const Name = styled.Text``

export const Price = styled.Text`
	font-weight: bold;
	font-size: 24px;
	margin-bottom: 12px;
`
