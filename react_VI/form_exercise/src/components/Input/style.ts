import styled from "styled-components";

type Props = {
  id: string | undefined;
};

export const Container = styled.div<Props>`
  display: flex;
  flex-direction: column;
  @media (max-width: 426px) {
    margin: ${(props) =>
      props.id === "email" || props.id === "phone"
        ? "2em 2em 0 1em"
        : "2em 2em 0 1em"};
  }
  @media (min-width: 767px) {
    margin: ${(props) =>
      props.id === "email" || props.id === "phone" ? "0em 1em" : "2em 1em"};
  }

  & label {
    font-size: 0.8em;
    color: #767676;
    display: flex;
    margin-bottom: 0.5em;
  }

  & input {
    display: flex;
    @media (min-width: 767px) {
      flex: ${(props) => (props.id === "email" ? "2" : "0")};
    }
    padding: 0.5em;
    width: 100%;
  }
`;
