import ReadMore from '../components/ReadMore'
import useReadMore from '../hooks/useReadMore'
import { useParams } from 'react-router-dom'

// styles
import Container from 'react-bootstrap/Container'
import Alert from 'react-bootstrap/Alert'



const ReadMorePage = () => {
    const { id } = useParams() // för att den ska veta vilket id den ska hämta
    const { data: moreInfo, error, isError, isLoading, isSuccess } = useReadMore(id)


  	return (
		<Container className="py-3">

			{isLoading && (<p className="my-3">Loading...</p>)}

			{isError && (
				<Alert variant="danger">
					<h3>Error!</h3>
					<p>{error.message}</p>
				</Alert>)
			}

			{moreInfo &&  ( 
				<ReadMore moreInfo={moreInfo} />	
			)}


		

		
		</Container> 
	)
}

export default ReadMorePage