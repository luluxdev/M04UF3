import './Scores.css';
import ScoreItem from './ScoreItem.js'
;
function Scores(props) {
  
		let scores_json = localStorage.getItem("scores");
		
		let score_list = [];

		let scores_parsed = JSON.parse(scores_json);

		for (let i = 0; i < scores_parsed.length; i++){
			
			let name = scores_parsed[i].nombre;
			let score = scores_parsed[i].Score;

			score_list.push(<ScoreItem player_name={name} player_score={score} key={i} />);
		}

	return (
    <section className="Scores">
			<h2>♡ Scores ♡</h2>
    
		<ol>
			{score_list}
		</ol>

		</section>
  );
}

export default Scores;
