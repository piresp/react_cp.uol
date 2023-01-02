import Body from "../components/Body";
import { ReactComponent as SecondImage } from '../assets/2_window.svg';
import MainText from "../components/MainText";
import Point from "../components/Point";
import ContinueButton from "../components/ContinueButton";
import SkipButton from "../components/SkipButton";
import { useState } from "react";

export default function SecondPage(props) {

  const [value, setValue] = useState(2);

  const handleValueChange = newValue => {
    setValue(newValue);
    props.onValueChange(newValue)
  };

  return (
    <Body>
      <SecondImage />
      <MainText
        title={`Get fast & safe delivery`}
        text={`Get good quality products for your plants`}
      />
      <Point page={value} />
      <ContinueButton onValueChange={handleValueChange} page={value} />
      <SkipButton />
    </Body>
  );
}
