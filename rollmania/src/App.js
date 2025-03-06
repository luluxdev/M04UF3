import './App.css';
import Title from './Title.js';
import Dice from './Dice.js';
import RollButton from './RollButton.js';
import PlayerName from './PlayerName.js';
import Scores from './Scores.js';

import { useState, useRef } from 'react';

function App() {

	const [roll, setRoll] = useState(false);

	const player_name = useRef("");
	const player_score = useRef(0);

	function roll_dice ()
	{
		setRoll(true);
	}

	function setPlayerName (name) {
		
		if (name == ""){
			alert("No hay nombre de jugador.");
			return;
		}

		/*if (total == 0){
			alert("No hay puntuación.");
			return;
		}*/

		player_name.current = name;

		console.log("El nombre del jugador es:"+name);
	}

	function set_player_score (total) {
		console.log(player_name);

		if (player_name.current == ""){
			alert("No hay nombre de jugador.");
			return;
		}

		player_score.current = total;

		console.log("Puntuación total: "+total);
	}

  return (
		<div className="rollmania">
			<Title title_text="(ﾉ◕ヮ◕)ﾉ *:・ﾟ✧rollmania✧・ﾟ:*" />
			<PlayerName onPlayerNameChange={setPlayerName}/>
			<main className="App">
				<Dice cantidad="3" roll={roll} onTotal={set_player_score}/>
    	</main>
			<RollButton roll_func={roll_dice}/>
			<Scores />
			<h2>︵‿︵‿୨♡୧‿︵‿︵</h2>
		</div>
  );
}

export default App;
