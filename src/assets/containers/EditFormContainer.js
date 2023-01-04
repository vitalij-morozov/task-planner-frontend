import styled from 'styled-components';

const Container = styled.form`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  max-height: 100%;
  background-color: white;
  padding: 1rem;
  .form-label {
    font-size: 0.8rem;
  }
  input {
    width: 100%;
  }
  textarea {
    width: 100%;
    resize: none;
    height: 3.2rem;
  }
  .buttons {
    margin-top: 0.5rem;
    display: flex;
    justify-content: flex-end;
    .btn {
      font-size: 0.8rem;
      padding: 0.4rem;
    }
    .btn.cancel {
      background-color: var(--red-dark);
      color: var(--grey-100);
    }
    .btn.cancel:hover {
      background-color: var(--black);
    }
  }
`;
export default Container;
