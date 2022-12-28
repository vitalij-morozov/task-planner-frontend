import React from 'react';
import Container from '../assets/containers/StatsContainer';
import StatsCard from './StatsCard';

function Stats({ stats }) {
  const statsCards = [
    { title: 'Tasks In Progress', count: stats.progress, icon: '', color: '', background: '' },
    { title: 'Completed Tasks', count: stats.completed, icon: '', color: '', background: '' },
    { title: 'Failed Tasks', count: stats.failed, icon: '', color: '', background: '' },
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
