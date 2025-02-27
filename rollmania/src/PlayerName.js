import './PlayerName.css'
import { useState } from 'react';

function PlayerName(props) {
  
	let [player_name, setPlayerName] = useState("");

	return (
	
	if(player_name = ""){
		<form>
			<p><input type="text" name="player_name" placeholder="Nombre del jugador" />
			<button>Guardar</button></p>
	  </form>
	}

	else {
		<h2> {player_name} </h2>
	}

				);
}

export default PlayerName;
