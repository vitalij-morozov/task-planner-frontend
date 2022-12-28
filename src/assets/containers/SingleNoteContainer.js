import styled from 'styled-components';

const Container = styled.div`
  background: var(--white);
  border-radius: var(--borderRadius);
  display: grid;
  grid-template-rows: 1fr auto;
  box-shadow: var(--shadow-2);
  .note-btn {
    svg {
      font-size: 1rem;
    }
  }
  header {
    padding: 1rem 1.5rem 0.5rem;
    border-bottom: 1px solid var(--grey-200);
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    h5 {
      letter-spacing: 0;
    }
  }
  .title {
    margin: 0;
    font-weight: 700;
    font-size: 1.6rem;
  }
  .top {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .text {
    margin: 0.5rem 0;
    min-height: 3.5rem;
  }
  .content-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
      margin: 0;
    }
    margin-top: 0.7rem;
    min-height: 30px;
  }
  .main-icon {
    display: grid;
    place-items: center;
    background: var(--primary-500);
    border-radius: var(--borderRadius);
    font-size: 2.5rem;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--white);
  }
  h5 {
    margin: 0;
  }
  .in-progress {
    background-color: #9b6c00;
    color: #fcefc7;
  }
  .completed {
    background-color: #e0e8f9;
    color: #647acb;
  }
  .failed {
    color: #d66a6a;
    background-color: #ffeeee;
  }
  .content {
    padding: 0.5rem 1.5rem;
  }
  .content-center {
    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;
  }

  .status {
    border-radius: var(--borderRadius);
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
    text-align: center;
    width: 100px;
    height: 30px;
  }
  .due-date {
    display: flex;
    gap: 0.5rem;
  }
  .date {
    display: flex;
    align-items: center;
    font-size: 0.9rem;
    gap: 0.2rem;
    font-weight: 600;
    color: var(--primary-700);
  }
  footer {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1.5rem 1rem;

    p {
      margin: 0;
    }
  }
  .created {
    display: flex;
    font-size: 0.9rem;
    align-items: center;
    gap: 0.3rem;
    color: var(--grey-800);
  }
  .actions {
    display: flex;
    justify-content: flex-end;
  }
  .edit-btn,
  .delete-btn {
    letter-spacing: var(--letterSpacing);
    cursor: pointer;
    height: 30px;
  }
  .edit-btn {
    color: var(--green-dark);
    background: var(--green-light);
    margin-right: 0.5rem;
  }
  .delete-btn {
    color: var(--red-dark);
    background: var(--red-light);
  }
  &:hover .actions {
    visibility: visible;
  }
`;
export default Container;
