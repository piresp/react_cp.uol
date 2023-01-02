import './Body.css'

export default function Body(props) {
  return (
    <div className='body'>
      <div className='main'>
        {props.children}
      </div>
    </div>
  );
}