import { Button } from 'react-bootstrap'

const Pagination = ({ page, totalPages, onPreviousPage, hasPreviousPage, onNextPage, hasNextPage}) => {

	return (
		<div>
			<div className='prevPage d-flex justify-content-between align-items-center'>
				<Button
					variant='primary'
					onClick={onPreviousPage}
					disabled={!hasPreviousPage}
				> Previous
				</Button>

				<div className="currentPage">
					{page} / {totalPages}
				</div>

				<div className="nextPage">
					<Button
						variant="primary"
						onClick={onNextPage}
						disabled={!hasNextPage}
					> Next
					</Button>
				</div>
			</div>
		</div>
	)
}

export default Pagination