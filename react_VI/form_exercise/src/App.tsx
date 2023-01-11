import { Main, Page, Contact, Birthday } from "./style";
import { useState } from "react";
import Pagination from "./components/Pagination";
import Title from "./components/Title";
import Input from "./components/Input";
import Select from "./components/Select";
import Form from "./components/UI/Form";
import Button from "./components/UI/Button";
import Checkbox from "./components/Checkbox";

function App() {
  const [formState, setFormState] = useState(0);

  return (
    <Main>
      <Page>
        <Title content="Team Sign Up" />
        <Form>
          <Pagination />
          <Input state={formState} />
          <Birthday>
            <Select label="Day" type="day" />
            <Select label="Month" type="month" />
            <Select label="Year" type="year" />
          </Birthday>
          <Checkbox title="I accept the terms and privacy" type="checkbox" htmlfor="checkbox" />
          <Button title="Next" type="submit" />
        </Form>
      </Page>
    </Main>
  );
}

export default App;
