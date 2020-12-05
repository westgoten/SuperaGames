import React from 'react'
import { SafeAreaView } from 'react-native'
import ScreenContainer from '../../components/ScreenContainer'
import CartItem from '../../components/CartItem'
import EmptyCartWarning from '../../components/EmptyCartWarning'
import Checkout from '../../components/Checkout'
import { CartCard, CartItemList } from './styles'
import games from '../../data/products'

function CartScreen() {
	const renderItem = ({ item, index }) => (
		<CartItem item={item} isFirstCard={index === 0} />
	)

	return (
		<SafeAreaView>
			<ScreenContainer>
				<CartCard>
					<CartItemList
						data={games}
						renderItem={renderItem}
						keyExtractor={(item) => item.id.toString()}
						ListEmptyComponent={EmptyCartWarning}
						isCartEmpty={false}
					/>
					<Checkout isCartEmpty={false} />
				</CartCard>
			</ScreenContainer>
		</SafeAreaView>
	)
}

export default CartScreen
