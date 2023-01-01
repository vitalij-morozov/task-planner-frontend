import React, { useEffect } from 'react';
import SingleNote from './SingleNote';
import Container from '../assets/containers/AllNotesContainer';
import { useDispatch, useSelector } from 'react-redux';
import Loading from './Loading';
import { getAllNotes } from '../features/allNotes/allNotesSlice';
import PaginationBtns from './PaginationBtns';
function Notes() {
  const { notes, isLoading, page, totalNotes, pageAmount, searchType, search, searchStatus, sort } = useSelector(
    (store) => store.allNotes
  );
  const { user } = useSelector((store) => store.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllNotes(user._id));
  }, [dispatch, user._id, searchType, search, searchStatus, sort, page]);

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
      <h5>
        {totalNotes} note{notes.length > 1 && 's'} found
      </h5>
      <div className='notes'>
        {notes.map((note) => (
          <SingleNote key={note._id} {...note} />
        ))}
      </div>
      {pageAmount > 1 && <PaginationBtns />}
    </Container>
  );
}

export default Notes;
