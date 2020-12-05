import React, { useContext } from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { ThemeContext } from 'styled-components/native'
import GameListingScreen from './screens/GameListingScreen'
import CartScreen from './screens/CartScreen'
import HeaderButtons from './components/HeaderButtons'
import { GameListing, Cart } from './utils/consts/routesNames'

const Stack = createStackNavigator()

function Routes() {
	const theme = useContext(ThemeContext)

	return (
		<NavigationContainer>
			<StatusBar
				barStyle='light-content'
				backgroundColor={theme.statusBarColor}
			/>
			<Stack.Navigator
				initialRouteName={GameListing}
				screenOptions={{
					title: 'Supera Games',
					headerStyle: {
						backgroundColor: theme.headerColor
					},
					headerTintColor: theme.headerTintColor,
					headerRight: () => <HeaderButtons />
				}}>
				<Stack.Screen
					name={GameListing}
					component={GameListingScreen}
				/>
				<Stack.Screen name={Cart} component={CartScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default Routes
