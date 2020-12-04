import styled from 'styled-components/native'

export const Container = styled.Pressable`
	background-color: ${(props) => props.theme.primaryColor};
	border-radius: 4px;
	flex-direction: row;
	elevation: 1;
	shadow-color: black;
	shadow-offset: 1px 1px;
	shadow-opacity: 0.5;
	shadow-radius: 2px;
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
	margin-start: 8px;
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
