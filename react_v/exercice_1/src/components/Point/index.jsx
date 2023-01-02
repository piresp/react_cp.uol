import './Point.css';

export default function Point(props) {
  return (
    <div className='custom-radio'>
      <input type="radio" id="radio-1" checked={props.page === 1} disabled={props.page !== 1} readOnly />
      <input type="radio" id="radio-2" checked={props.page === 2} disabled={props.page !== 2} readOnly />
      <input type="radio" id="radio-3" checked={props.page === 3} disabled={props.page !== 3} readOnly />
    </div>
  );
}