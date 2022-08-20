import Person from '../components/Person'
import usePerson from '../hooks/usePerson'
import { useParams } from 'react-router-dom'

// styles
import Container from 'react-bootstrap/Container'
import Alert from 'react-bootstrap/Alert'



const PersonPage = () => {
    const { id } = useParams() // för att den ska veta vilket id den ska hämta
    const { data: person, error, isError, isLoading, isSuccess } = usePerson(id)

	console.log('More INFO: ', person)

  	return (
		<Container className="py-3">

			{isLoading && (<p className="my-3">Loading...</p>)}

			{isError && (
				<Alert variant="danger">
					<h3>Error!</h3>
					<p>{error.message}</p>
				</Alert>)
			}

			{person &&  ( 
				<Person person={person} />	
			)}
            
		</Container> 
	)
}

export default PersonPage