import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  @media (max-width: 425px) {
    justify-content: center;
  }
  margin: 2em 0em 0em 0;

  & button {
    padding: 0.5em 1em 0.5em 1em;
    margin-bottom: 2em;
    background-color: #074EE8;
    color: #FFFFFF;
    border: none;
    border-radius: 6px;
  }
`;
