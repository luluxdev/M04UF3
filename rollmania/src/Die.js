import './Die.css';

import { useState } from 'react';

let maxNum = 6;
let minNum = 1;

function Die() {
  
	let [number, setNumber] = useState(1);

	function roll ()
	{
		let random = Math.floor(Math.random() * maxNum) + minNum;
		setNumber(random);
	}

	return (
    <button className="Die" onClick={roll}>
			<p className="DieNumber">{number}</p>
    </button>
  );
}

export default Die;
