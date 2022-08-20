import { ReactQueryDevtools } from 'react-query/devtools'
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import PopularMovies from './pages/PopularMoviesPage'
import TopRatedMovies from './pages/TopRatedMoviesPage'
import ReadMore from './pages/ReadMorePage'
import './assets/scss/App.scss'

function App() {

	return (
		<div id="App">
			<Navigation />

			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="*" element={<NotFound />} />
				<Route path="/popular-movies" element={<PopularMovies />} />
				<Route path="/top-rated-movies" element={<TopRatedMovies />} />
				<Route path="/movies/:id" element={<ReadMore />} />
			</Routes>

			<ReactQueryDevtools position='bottom-left' />

		</div>

		
	)
}

export default App
