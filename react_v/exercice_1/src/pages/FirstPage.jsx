import Body from "../components/Body";
import { ReactComponent as FirstImage } from '../assets/1_window.svg';
import MainText from "../components/MainText";
import Point from "../components/Point";
import ContinueButton from "../components/ContinueButton";
import SkipButton from "../components/SkipButton";
import { useState } from "react";

export default function FirstPage(props) {

  const [value, setValue] = useState(1);

  const handleValueChange = newValue => {
    setValue(newValue);
    props.onValueChange(newValue)
  };

  return (
    <Body>
      <FirstImage />
      <MainText
        title={`Plant lover Community`}
        text={`Find gardening enthusiasts from all over the world`}
      />
      <Point page={value} />
      <ContinueButton onValueChange={handleValueChange} page={value} />
      <SkipButton />
    </Body>
  );
}
