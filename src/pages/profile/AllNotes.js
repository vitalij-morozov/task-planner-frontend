import React from 'react';
import { Notes, Search } from '../../components';
import Container from '../../assets/containers/AllNotesContainer';

function AllNotes() {
  return (
    <Container>
      <Search />
      <Notes />
    </Container>
  );
}

export default AllNotes;
