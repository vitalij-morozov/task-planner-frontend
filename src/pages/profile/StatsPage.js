import React from 'react';
import { useSelector } from 'react-redux';

function StatsPage() {
  const { notes } = useSelector((state) => state.allNotes);
  const stats = {
    'in-progress': notes.filter((note) => note.status === 'in-progress').length,
    completed: notes.filter((note) => note.status === 'completed').length,
    failed: notes.filter((note) => note.status === 'failed').length,
  };

  // const byMonth = notes.map(note => )

  console.log('stats ===', stats);
  return <div></div>;
}

export default StatsPage;
