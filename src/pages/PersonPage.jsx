import { useParams } from 'react-router-dom'
import Person from '../components/Person'
import usePerson from '../hooks/usePerson'

// bootstrap
import Container from 'react-bootstrap/Container'
import Alert from 'react-bootstrap/Alert'



const PersonPage = () => {
    const { id } = useParams() // actors id
    const { data: person, error, isError, isLoading, isSuccess } = usePerson(id)


  	return (
		<Container className="py-3">

			{isLoading && (<p>Loading...</p>)}

			{isError && (
				<Alert variant="danger">
					<h3>Error!</h3>
					<p>{error.message}</p>
				</Alert>)
			}

			{isSuccess &&  ( 
				<Person person={person} />	
			)}
            
		</Container> 
	)
}

export default PersonPage