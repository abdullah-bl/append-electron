import * as React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages'
import { ThemeProvider } from 'theme-ui'
import { theme } from './theme'

const root = ReactDOM.createRoot(document.querySelector('#app'))

root.render(
	<ThemeProvider theme={theme}>
		<App />
	</ThemeProvider>
)
