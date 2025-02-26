import { useState, useEffect } from 'react';
import './RollButton.css';

function RollButton(props) {
	// Estado para la cuenta regresiva, inicia en 5
  const [count, setCount] = useState(5);

  useEffect(() => {
    if (count > 0) {
		// Se ejecuta un setTimeout que reduce count en 1 cada segundo
      setTimeout(() => setCount(count - 1), 1000);
    }
	// El efecto se ejecuta cada vez que count cambia
  }, [count]);

  return (
    <button className="RollButton" onClick={props.roll_func}>
      {count > 0 ? count : 'Roll!!!'}
    </button>
  );
}

export default RollButton;

