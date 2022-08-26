import { ReactQueryDevtools } from 'react-query/devtools'
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import NotFound from './pages/NotFound'
import PopularMovies from './pages/PopularMoviesPage'
import TopRatedMovies from './pages/TopRatedMoviesPage'
import LatestMovies from './pages/LatestMoviesPage'
import MoviesByGenre from './pages/MoviesByGenrePage'
import ReadMore from './pages/ReadMorePage'
import Person from './pages/PersonPage'
import './assets/scss/App.scss'

function App() {

	return (
		<div id="App">
			<Navigation />

			<Routes>
				<Route path="/" element={<PopularMovies />} />
				<Route path="/top-rated-movies" element={<TopRatedMovies />} />
				<Route path="/latest-movies" element={<LatestMovies />} />
				<Route path="/genres" element={<MoviesByGenre />} />				
				<Route path="/movies/:id" element={<ReadMore />} />
				<Route path="/person/:id" element={<Person />} />
				<Route path="*" element={<NotFound />} />

			</Routes>

			<ReactQueryDevtools position='bottom-left' />

		</div>
	)
}

export default App
