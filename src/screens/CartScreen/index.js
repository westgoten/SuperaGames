import React from 'react'
import { SafeAreaView } from 'react-native'
import ScreenContainer from '../../components/ScreenContainer'
import CartItem from '../../components/CartItem'
import { CartCard } from './styles'

function CartScreen() {
	return (
		<SafeAreaView>
			<ScreenContainer>
				<CartCard>
					<CartItem />
				</CartCard>
			</ScreenContainer>
		</SafeAreaView>
	)
}

export default CartScreen
