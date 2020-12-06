import 'react-native-gesture-handler'
import React from 'react'
import { ThemeProvider } from 'styled-components/native'
import { Provider } from 'react-redux'
import store from './store'
import Routes from './routes'
import appTheme from './utils/appTheme'

function App() {
	return (
		<ThemeProvider theme={appTheme}>
			<Provider store={store}>
				<Routes />
			</Provider>
		</ThemeProvider>
	)
}

export default App
