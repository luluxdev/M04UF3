import './RollButton.css';

function RollButton(props) {
  return (
    <button className="RollButton" onClick={props.roll_func} >
			Roll!!!
    </button>
  );
}

export default RollButton;
