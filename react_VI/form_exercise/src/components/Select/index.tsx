import { Container } from "./style";

type Form = {
  label: string;
  type: string;
};

const Input: React.FC<Form> = ({ label, type }) => {
  let max = 0,
    start = 0;
  const options = [];
  if (type === "day") {
    start = 1;
    max = 32;
  }
  if (type === "month") {
    start = 1;
    max = 13;
  }
  if (type === "year") {
    start = 1940;
    max = 2023;
  }

  for (start; start < max; start++) {
    options.push(<option value={start}>{start}</option>);
  }
  return (
    <Container>
      <label>{label}</label>
      <select>{options}</select>
    </Container>
  );
};

export default Input;
