import React from 'react';
import Container from '../assets/containers/StatsContainer';
import StatsCard from './StatsCard';

function Stats({ stats }) {
  const statsCards = [
    { title: 'Tasks In Progress', count: stats.progress, icon: '', name: 'progress' },
    { title: 'Completed Tasks', count: stats.completed, icon: '', name: 'completed' },
    { title: 'Failed Tasks', count: stats.failed, icon: '', name: 'failed' },
  ];

  return (
    <Container>
      {statsCards.map((stat, index) => (
        <StatsCard key={index} {...stat} />
      ))}
    </Container>
  );
}

export default Stats;
