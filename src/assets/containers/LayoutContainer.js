import styled from 'styled-components';

const Container = styled.section`
  .profile {
    display: grid;
    grid-template-columns: 1fr;
  }
  .profile-page {
    width: 90vw;
    margin: 0 auto;
    padding: 2rem 0;
  }
  @media (min-width: 992px) {
    .profile {
      grid-template-columns: auto 1fr;
    }
    .profile-page {
      width: 90%;
    }
  }
`;
export default Container;
