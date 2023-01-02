import { useState } from "react";
import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";
import ThirdPage from "./pages/ThirdPage";

export default function App() {

  const [value, setValue] = useState(0);

  const handleValueChange = newValue => {
    setValue(newValue);
  };
  
  return (
    <div>
      {value === 0 ? <FirstPage onValueChange={handleValueChange} page={value} /> : null}
      {value === 1 ? <SecondPage onValueChange={handleValueChange} page={value} /> : null}
      {value === 2 ? <ThirdPage onValueChange={handleValueChange} page={value} /> : null}
      {value === 3 ? <FirstPage onValueChange={handleValueChange} page={value} /> : null }
    </div>
  );
}
