import { Container } from "./style";

interface Props {
  children: React.ReactNode;
}

const Form: React.FC<Props> = ({ children }) => {
  return (
    <form>
      <Container>{children}</Container>
    </form>
  );
};

export default Form;
