import styled from 'styled-components/native'

export const Container = styled.View`
	flex-direction: row;
	padding-horizontal: 16px;
	background-color: ${(props) => props.theme.headerColor};
	flex: 1;
	align-items: center;
`
