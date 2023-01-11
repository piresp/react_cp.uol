import { Container } from "./style";

type Form = {
  state: number;
  id: string;
};

const form = {
  input0: {
    label: "Full Name *",
    type: "text",
    placeholder: "Foo Bar",
    id: "i0",
  },
  input1: {
    label: "Nickname",
    type: "text",
    placeholder: "Juanito",
    id: "i1",
  },
  input2: {
    label: "Email",
    type: "text",
    placeholder: "foo@bar.com",
    id: "i2",
  },
  input3: {
    label: "Phone",
    type: "text",
    placeholder: "(83) 00000-0000",
    id: "i3",
  },
  input4: {
    label: "LinkedIn",
    type: "text",
    placeholder: "https://www.linkedin.com/in/foo-bar-3a0560104/",
    id: "i4",
  },
  input5: {
    label: "Github *",
    type: "text",
    placeholder: "https://github.com/foobar",
    id: "i5",
  },
  input6: {
    label: "Cerficates",
    type: "text",
    placeholder: "https://www.linkedin.com/in/foo-bar-3a0560104/",
    id: "i6",
  },
  input7: {
    label: "Team Name *",
    type: "text",
    placeholder: "https://www.linkedin.com/in/foo-bar-3a0560104/",
    id: "i7",
  },
  input8: {
    label: "Institution *",
    type: "text",
    placeholder: "Universidade Federal da Paraíba",
    id: "i8",
  },
  input9: {
    label: "Graduation *",
    type: "text",
    placeholder: "Ciências da Computação",
    id: "i9",
  },
}

const Input: React.FC<Form> = ({ state }) => {
  return (
    <>
      {form.map((formGroup, index) => {
        // Verifica o valor de formState e retorna os objetos
        // de acordo com a condição
        if (state === 0 && index < 4) {
          return (
            <Container key={index} id={`input${index}`}>
              <label>{formGroup[`input${index}`].label}</label>
              <input key={index} {...formGroup} />
            </Container>
          );
        } else if (state === 1 && index >= 4 && index < 6) {
          return <input key={index} {...formGroup} />;
        } else if (state === 2 && index >= 6) {
          return <input key={index} {...formGroup} />;
        }
        return null;
      })}
    </>
  );
};

export default Input;
