import Body from "../components/Body";
import { ReactComponent as ThirdImage } from '../assets/3_window.svg';
import MainText from "../components/MainText";
import Point from "../components/Point";
import ContinueButton from "../components/ContinueButton";
import SkipButton from "../components/SkipButton";
import { useState } from "react";

export default function ThirdPage(props) {

  const [value, setValue] = useState(3);

  const handleValueChange = newValue => {
    setValue(newValue);
    props.onValueChange(newValue)
  };

  return (
    <Body>
      <ThirdImage />
      <MainText
        title={`Buy & Sell Tools`}
        text={`Buy & sell good quality products for your beautiful plants`}
      />
      <Point page={value} />
      <ContinueButton onValueChange={handleValueChange} page={value} />
      <SkipButton />
    </Body>
  );
}
