import { Container } from "./style";

type Props = {
  type: string;
  title: string;
  htmlfor: string;
};

const Checkbox: React.FC<Props> = ({ type, title, htmlfor }) => {
  return (
    <Container>
      <input type={type} />
      <label htmlFor={htmlfor}>{title}</label>
    </Container>
  );
};

export default Checkbox;
