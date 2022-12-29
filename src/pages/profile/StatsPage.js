import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Stats, Charts } from '../../components';
import Loading from '../../components/Loading';

function StatsPage() {
  const { notes } = useSelector((state) => state.allNotes);
  const stats = {
    progress: notes.filter((note) => note.status === 'in-progress' && note.noteType === 'task').length,
    completed: notes.filter((note) => note.status === 'completed' && note.noteType === 'task').length,
    failed: notes.filter((note) => note.status === 'failed' && note.noteType === 'task').length,
  };
  const { isLoading } = useSelector((state) => state.allNotes);
  const dispatch = useDispatch();

  if (isLoading) {
    return <Loading center />;
  }

  // const byMonth = notes.map(note => )

  console.log('stats ===', stats);
  return (
    <div>
      <Stats stats={stats} />
      <Charts />
    </div>
  );
}

export default StatsPage;
