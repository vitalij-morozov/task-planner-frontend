import React, { useEffect } from 'react';
import SingleNote from './SingleNote';
import Container from '../assets/containers/AllNotesContainer';
import { useDispatch, useSelector } from 'react-redux';
import Loading from './Loading';
import { getAllNotes } from '../features/allNotes/allNotesSlice';
function Notes() {
  const { notes, isLoading } = useSelector((store) => store.allNotes);
  const { user } = useSelector((store) => store.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllNotes(user._id));
  }, [dispatch, user._id]);

  if (isLoading) {
    return <Loading />;
  }
  if (notes.length === 0) {
    return (
      <Container>
        <h2>No Notes Found</h2>
      </Container>
    );
  }

  return (
    <Container>
      <div className='notes'>
        {notes.map((note) => (
          <SingleNote key={note._id} {...note} />
        ))}
      </div>
    </Container>
  );
}

export default Notes;
