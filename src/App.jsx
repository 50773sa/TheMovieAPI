import { ReactQueryDevtools } from 'react-query/devtools'
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import PopularMovies from './pages/PopularMoviesPage'
import './assets/scss/App.scss'

function App() {

	return (
		<div id="App">
			<Navigation />

			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="*" element={<NotFound />} />
				<Route path="/popular-movies" element={<PopularMovies />} />
			</Routes>

			<ReactQueryDevtools position='bottom-left' />

		</div>

		
	)
}

export default App
