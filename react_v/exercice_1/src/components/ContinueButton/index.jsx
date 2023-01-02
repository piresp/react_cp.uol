import { useState } from 'react';
import './ContinueButton.css';

export default function ContinueButton(props) {

  const [value, setValue] = useState(props.page);

  const onClickHandler = () => {
    setValue((value + 1) > 2 ? value - 2 : value + 1);
    props.onValueChange(value);
    console.log(value);
  }

  return (
    <div>
      <button className="continue-button" onClick={onClickHandler} >Continue</button>
    </div>
  );
}