import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../assets/containers/PaginationContainer';
import { changePage } from '../features/allNotes/allNotesSlice';

function PaginationBtns() {
  const { pageAmount, page } = useSelector((store) => store.allNotes);
  const dispatch = useDispatch();
  const pages = Array.from({ length: pageAmount }, (_, index) => {
    return index + 1;
  });
  console.log('page ===', page);
  console.log('pageAmount ===', pageAmount);
  const prevPage = () => {
    let newPage = page - 1;
    if (newPage < 1) {
      newPage = pageAmount;
    }
    dispatch(changePage(newPage));
  };
  const nextPage = () => {
    let newPage = page + 1;
    if (newPage > pageAmount) {
      newPage = 1;
    }
    dispatch(changePage(newPage));
  };
  return (
    <Container>
      <button type='button' className='prev-btn' onClick={prevPage}>
        prev
      </button>
      <div className='btn-container'>
        {pages.map((num) => {
          return (
            <button
              type='button'
              key={num}
              className={num === page ? 'pageBtn active' : 'pageBtn'}
              onClick={() => dispatch(changePage(num))}
            >
              {num}
            </button>
          );
        })}
      </div>

      <button type='button' className='next-btn' onClick={nextPage}>
        next
      </button>
    </Container>
  );
}

export default PaginationBtns;
