import styled from 'styled-components';

const Container = styled.nav`
  height: var(--nav-height);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 0px 0px rgba(0, 0, 0, 0.1);
  background-color: #e8c4c4;

  .logo {
    display: flex;
    align-items: center;
    width: 160px;
  }
  .nav-center {
    display: flex;
    width: 90vw;
    align-items: center;
    justify-content: space-between;
  }
  .toggle-btn {
    background: transparent;
    border-color: transparent;
    font-size: 2.3rem;
    color: var(--primary-500);
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  .btn-container {
    position: relative;
  }
  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 0.5rem;
    position: relative;
    box-shadow: var(--shadow-2);
  }
  .user-avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 2px solid var(--green-dark);
  }
  .logo-text {
    display: none;
    margin: 0;
    span {
      color: #850000;
    }
  }
  @media (min-width: 992px) {
    position: sticky;
    top: 0;
    z-index: 100;
    .toggle-btn {
      display: none;
    }
    .nav-center {
      width: 90%;
    }
    .logo {
      display: none;
    }
    .logo-text {
      display: flex;
      align-items: center;
      gap: 0.7rem;
    }
  }
`;
export default Container;
