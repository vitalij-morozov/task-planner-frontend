import Container from '../assets/containers/SingleNoteContainer';
import { BiTask, BiNote } from 'react-icons/bi';
import { MdDeleteOutline, MdOutlineModeEditOutline } from 'react-icons/md';
import { Link } from 'react-router-dom';
import moment from 'moment/moment';
import { useState } from 'react';
import { useEffect } from 'react';

function SingleNote({ _id, noteTitle, noteText, noteType, dueDate, status, createdAt }) {
  console.log('dueDate ===', dueDate, Date.now());

  const [noteStatus, setNoteStatus] = useState(status);

  useEffect(() => {
    if (dueDate > Date.now()) {
      setNoteStatus('expired');
    }
  }, [dueDate]);

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
          {noteType === 'task' ? (
            <div className='content-top'>
              <div className={`status ${noteStatus}`}>{noteStatus}</div>
              <p className='due-date'>
                Due Date: <span className='date'>{dueDate}</span>
              </p>
            </div>
          ) : (
            <div className='content-top'></div>
          )}

          <p className='text' style={{ overflowY: noteText.length > 100 ? 'scroll' : 'hidden' }}>
            {noteText}
          </p>
        </div>
      </div>
      <footer>
        <p className='created'>{moment(+createdAt).format('MMM Do YYYY, h:mm:ss')}</p>
        <div className='actions'>
          <Link to='/add-note' className='edit-btn btn note-btn'>
            Edit <MdOutlineModeEditOutline />
          </Link>
          <button className='btn delete-btn note-btn' type='button'>
            Delete <MdDeleteOutline />
          </button>
        </div>
      </footer>
    </Container>
  );
}

export default SingleNote;
