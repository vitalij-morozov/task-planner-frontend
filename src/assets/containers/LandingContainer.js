import styled from 'styled-components';

const Container = styled.main`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: flex-start;
  }
  .logo {
    margin-top: 1rem;
    width: 15rem;
  }
  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -3rem;
  }
  h1 {
    font-weight: bold;
    span {
      color: var(--primary-600);
    }
  }
  p {
    color: var(--grey-600);
  }
  .main_img {
    display: none;
  }
  @media (min-width: 990px) {
    .page {
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
    }
    .main_img {
      display: block;
      width: 100%;
    }
  }
`;

export default Container;
