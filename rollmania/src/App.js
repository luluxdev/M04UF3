import './App.css';
import Title from './Title.js';
import Dice from './Dice.js';
import RollButton from './RollButton.js';
import PlayerName from './PlayerName.js';


import { useState } from 'react';

function App() {

	let [roll, setRoll] = useState(false);

	function roll_dice ()
	{
		setRoll(true);
	}

  return (
		<div className="rollmania">
			<Title title_text="(ﾉ◕ヮ◕)ﾉ *:・ﾟ✧rollmania✧・ﾟ:*" />
			<PlayerName />
			<main className="App">
				<Dice cantidad="3" roll={roll} />
    	</main>
			<RollButton roll_func={roll_dice}/>
			<h2>"︵‿︵‿୨♡୧‿︵‿︵"</h2>
		</div>
  );
}

export default App;
