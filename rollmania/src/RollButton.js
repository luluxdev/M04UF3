import { useState, useEffect } from 'react';
import './RollButton.css';

function RollButton(props) {

  let [count, setCount] = useState(5);

  useEffect(() => {	
      setTimeout(() => {
					setCount(count - 1);
  			}, 1000);
	});

  return (
    <button className="RollButton"
		onClick={props.roll_func}
		disabled={count > 0 ? "disabled" : ""}
		>
      {count > 0 ? count : "˗ˏˋ ꒰ ROLL! ꒱ ˎˊ˗"}
    </button>
  );
}

export default RollButton;

