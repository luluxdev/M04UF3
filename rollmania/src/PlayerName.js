import './PlayerName.css'
import { useState } from 'react';

function PlayerName(props) {  
	
	let [player_name, setPlayerName] = useState("");
	let [show_name, setShowName] = useState(false);

	function update_name (event){
		setPlayerName(event.target.value);
		console.log(event.target.value);
	}

	function write_name () {
		console.log("Nombre: "+player_name);
		setShowName(true);
	}

	if(!show_name){
	return(
		<p>
			<input type="text" name="player_name" placeholder="Nombre del jugador" value={player_name} onChange={update_name}/>
			<button onClick={write_name}>Save</button>
			</p>
			);
		}
	else{
	<p>{player_name}</p>
}
}

export default PlayerName;
