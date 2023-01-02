import { useState } from "react";

import { ReactComponent as FirstImage } from "./assets/1_window.svg";
import { ReactComponent as SecondImage } from "./assets/2_window.svg";
import { ReactComponent as ThirdImage } from "./assets/3_window.svg";

import Body from "./components/Body";
import MainText from "./components/MainText";
import Point from "./components/Point";
import ContinueButton from "./components/ContinueButton";
import SkipButton from "./components/SkipButton";

export default function App() {
  const pages = [
    {
      firstPage: [
        <FirstImage />,
        <MainText
          title={`Plant lover Community`}
          text={`Find gardening enthusiasts from all over the world`}
        />,
      ],
      secondPage: [
        <SecondImage />,
        <MainText
          title={`Get fast & safe delivery`}
          text={`Get good quality products for your plants`}
        />,
      ],
      thirdPage: [
        <ThirdImage />,
        <MainText
          title={`Buy & Sell Tools`}
          text={`Buy & sell good quality products for your beautiful plants`}
        />,
      ],
    },
  ];

  const firstPage = pages[0].firstPage;
  const secondPage = pages[0].secondPage;
  const thirdPage = pages[0].thirdPage;

  const [value, setValue] = useState(0);

  const handleValueChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <Body>
      {value === 0
        ? firstPage.map((component) => component)
        : value === 1
        ? secondPage.map((component) => component)
        : value === 2
        ? thirdPage.map((component) => component)
        : null}
      <Point page={value} />
      <ContinueButton onValueChange={handleValueChange} page={value} />
      <SkipButton />
    </Body>
  );
}
