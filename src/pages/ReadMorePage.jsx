import { useParams } from 'react-router-dom'
import ReadMore from '../components/ReadMore'
import useReadMore from '../hooks/useReadMore'

// bootstrap
import Container from 'react-bootstrap/Container'
import Alert from 'react-bootstrap/Alert'



const ReadMorePage = () => {
	const { id } = useParams() // movie id
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

			{isSuccess && moreInfo &&  ( 
				<ReadMore moreInfo={moreInfo} />	
			)}

		</Container> 
	)
}

export default ReadMorePage