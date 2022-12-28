import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../assets/containers/SearchContainer';
import FormRow from './FormRow';
import FormRowSelect from './FormRowSelect';

function Search() {
  const { isLoading, search, searchStatus, searchType, sort, sortOptions } = useSelector((store) => store.allNotes);
  const { noteTypeOptions, statusOptions } = useSelector((store) => store.note);
  const dispatch = useDispatch();

  const handleSearch = (e) => {};
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <form className='form'>
        <h4>Search</h4>
        <div className='form-center'>
          <FormRow type='text' name='search' value={search} handleChange={handleSearch} />
          <FormRowSelect
            labelText='status'
            name='searchStatus'
            value={searchStatus}
            handleChange={handleSearch}
            list={['all', ...statusOptions]}
          />
          <FormRowSelect name='sort' value={sort} handleChange={handleSearch} list={sortOptions} />
          <button className='btn btn-block' disabled={isLoading} onClick={handleSubmit}>
            clear filters
          </button>
        </div>
      </form>
    </Container>
  );
}

export default Search;
