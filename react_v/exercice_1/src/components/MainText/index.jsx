import "./MainText.css";

export default function MainText(props) {
  return (
    <div className="div-text">
      <h1 className="title"> {props.title} </h1>
      <p className="subtitle"> {props.text} </p>
    </div>
  );
}
