import "./ContinueButton.css";

export default function ContinueButton({ value, setValue }) {
  return (
    <div>
      <button className="continue-button" onClick={() => value === 2 ? setValue(0) : setValue(value += 1)}>
        Continue
      </button>
    </div>
  );
}
