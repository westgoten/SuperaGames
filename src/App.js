import 'react-native-gesture-handler'
import React from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import GameListingScreen from './screens/GameListingScreen'
import CartScreen from './screens/CartScreen'

const Stack = createStackNavigator()

function App() {
	return (
		<NavigationContainer>
			<StatusBar barStyle='light-content' backgroundColor='#000' />
			<Stack.Navigator
				initialRouteName='GameListing'
				screenOptions={{
					title: 'Supera Games',
					headerStyle: {
						backgroundColor: '#000'
					},
					headerTintColor: '#fff'
				}}>
				<Stack.Screen
					name='GameListing'
					component={GameListingScreen}
				/>
				<Stack.Screen name='Cart' component={CartScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default App
