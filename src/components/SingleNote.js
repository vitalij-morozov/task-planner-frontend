import Container from '../assets/containers/SingleNoteContainer';
import { BiTask, BiNote } from 'react-icons/bi';
import { MdDeleteOutline, MdOutlineModeEditOutline, MdDateRange } from 'react-icons/md';
import { AiOutlineCalendar } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import moment from 'moment/moment';
import { useState } from 'react';
import { useEffect } from 'react';
import { removeNote, setNoteUpdate } from '../features/note/noteSlice';
import { useDispatch } from 'react-redux';

function SingleNote({ _id, noteTitle, noteText, noteType, dueDate, status, createdAt, userId }) {
  console.log('dueDate ===', dueDate, Date.now());
  const dispatch = useDispatch();
  const [noteStatus, setNoteStatus] = useState(status);

  useEffect(() => {
    if (dueDate > Date.now()) {
      setNoteStatus('expired');
    }
  }, [dueDate]);

  const ids = {
    noteId: _id,
    userId: userId,
  };

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
                Due Date:{' '}
                <span className='date'>
                  <AiOutlineCalendar /> {dueDate}
                </span>
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
        <p className='created'>
          <MdDateRange /> {moment(+createdAt).format('MMM Do YYYY, h:mm:ss')}
        </p>
        <div className='actions'>
          <Link
            to='/add-note'
            className='edit-btn btn note-btn'
            onClick={() => dispatch(setNoteUpdate({ editId: _id, noteTitle, noteText, status }))}
          >
            Edit <MdOutlineModeEditOutline />
          </Link>
          <button className='btn delete-btn note-btn' type='button' onClick={() => dispatch(removeNote(ids))}>
            Delete <MdDeleteOutline />
          </button>
        </div>
      </footer>
    </Container>
  );
}

export default SingleNote;
