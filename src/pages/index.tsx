import {
	BrowserRouter,
	Link,
	Route,
	Routes,
	useLocation,
} from 'react-router-dom'
import { Heading, Input } from 'theme-ui'
import Home from './Home'

const App = () => {
	const location = useLocation()
	return (
		<>
			<Heading>App</Heading>
			<Input placeholder='wire s' />
			<pre dir='auto'>{location.pathname}</pre>
			<Link to={'/sss'}>go somewhere</Link>
		</>
	)
}

export default () => {
	return (
		<BrowserRouter basename='/main_window'>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='*' element={<h1>NOT FOUND</h1>} />
			</Routes>
		</BrowserRouter>
	)
}
