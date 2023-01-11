import { Container } from "./style";

type Props = {
  title: string;
  type: "submit";
};

const Button: React.FC<Props> = ({ title, type }) => {
  return (
    <Container>
      <button type={type}>{title}</button>
    </Container>
  );
};

export default Button;
