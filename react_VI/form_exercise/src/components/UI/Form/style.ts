import styled from "styled-components";

export const Container = styled.form`
  width: 80%;
  text-align: center;
  margin: auto;

  @media (max-width: 320px) {
    width: 100%;
  }

  @media (max-width: 768px) {
    width: 90%;
  }

  @media (min-width: 1440px) {
    width: 60%;
  }

  @media (min-width: 2560px) {
    width: 45%;
  }
`;
