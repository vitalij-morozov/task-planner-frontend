import Container from '../assets/containers/SingleNoteContainer';
import { BiTask, BiNote } from 'react-icons/bi';
import { Link } from 'react-router-dom';

function SingleNote({ _id, noteTitle, noteText, noteType, dueDate, status, createdAt }) {
  return (
    <Container>
      <header>
        <div className='top'>
          <div className='main-icon'>{noteType === 'task' ? <BiTask /> : <BiNote />}</div>
          <h5>{noteType}</h5>
        </div>
        <h3 className='title'>{noteTitle}</h3>
      </header>
      <div className='content'>
        <div className='content-center'>
          <div className={`status ${status}`}>{status}</div>
          <p className='text'>{noteText}</p>
        </div>
      </div>
      <footer>
        <div className='actions'>
          <Link to='/add-note' className='edit-btn btn'>
            Edit
          </Link>
          <button className='btn delete-btn' type='button'>
            Delete
          </button>
        </div>
      </footer>
    </Container>
  );
}

export default SingleNote;
