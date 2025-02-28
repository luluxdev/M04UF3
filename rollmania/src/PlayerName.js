import './PlayerName.css'
import { useState, useEffect } from 'react';

function PlayerName(props) {  
	
	let [player_name, setPlayerName] = useState("");
	let [show_name, setShowName] = useState(false);

	let min_name = 3;
	let max_name = 12;

	useEffect( () => {
		if (player_name != "")
			props.onPlayerNameChange(player_name);
	});

	function update_name (event){
		setPlayerName(event.target.value);
		console.log(event.target.value);
	}

	function write_name () {
	let pn_tmp = player_name.trim();
		if (pn_tmp.length < min_name || pn_tmp.length > max_name)
				return;
			setShowName(true);
		
	}

if(!show_name){
	return(
		<p>
			<input type="text" name="player_name" placeholder="Nombre del jugador" value={player_name} onChange={update_name}/>
			<button onClick={write_name}>♡ Save ♡</button>
			</p>
	);
}
else {
	return (
	<h2>{player_name}</h2>
	);
}
}

export default PlayerName;
