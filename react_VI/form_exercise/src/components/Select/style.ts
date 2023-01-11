import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 426px) {
    margin: 2em 1em;
  }
  @media (min-width: 768px) {
    margin: 2em 1em;
  }

  & label {
    font-size: 0.8em;
    color: #767676;
    display: flex;
    margin-bottom: 0.5em;
  }

  & select {
    padding: 0.5em;
    width: 100%;
  }
`;
