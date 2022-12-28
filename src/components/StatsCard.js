import React from 'react';
import Container from '../assets/containers/StatsCardContainer';

function StatsCard({ title, count, icon, name }) {
  const date = new Date();
  console.log('date ===', date.getMonth());
  return (
    <Container className={`${name}`}>
      <header>
        <span className='count'>{count}</span>
        <span className='icon'>{icon}</span>
      </header>
      <h5 className='title'>{title}</h5>
    </Container>
  );
}

export default StatsCard;
