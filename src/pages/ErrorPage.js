import { Link } from 'react-router-dom';
import image from '../assets/notFound.png';
import Container from '../assets/containers/ErrorContainer';

function ErrorPage() {
  return (
    <Container className='full-page'>
      <div>
        <img src={image} alt='not found' />
        <h3>Sorry, Page is Not Found!</h3>
        <p>Page you are looking for is unfortunately not found...</p>
        <Link to='/'>Go Back Home</Link>
      </div>
    </Container>
  );
}

export default ErrorPage;
