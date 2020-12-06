import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { SafeAreaView } from 'react-native'
import ScreenContainer from '../../components/ScreenContainer'
import CartItem from '../../components/CartItem'
import EmptyCartWarning from '../../components/EmptyCartWarning'
import Checkout from '../../components/Checkout'
import { CartCard, CartItemList } from './styles'

function CartScreen() {
	const cart = useSelector((state) => state.cart)
	const isCartEmpty = cart.length === 0

	const renderItem = ({ item, index }) => (
		<CartItem item={item} isFirstCard={index === 0} />
	)

	return (
		<SafeAreaView>
			<ScreenContainer>
				<CartCard>
					<CartItemList
						data={cart}
						renderItem={renderItem}
						keyExtractor={(item) => item.game.id.toString()}
						ListEmptyComponent={EmptyCartWarning}
						isCartEmpty={isCartEmpty}
					/>
					<Checkout isCartEmpty={isCartEmpty} />
				</CartCard>
			</ScreenContainer>
		</SafeAreaView>
	)
}

export default CartScreen
