import React from 'react';
import './Feedback.css';
function Feedback({ question, answer, additionalInfo }) {
	return (
		<div className='feedback'>
			<div className='firstColumn'>
				<p className='theQuestion'>{question}</p>
				<p className='correctAnswer'>Correct Answer: {answer}</p>
			</div>

			<div className='vl'></div>
			<div className='secondColumn'>
				<p>
					{additionalInfo}
				</p>
			</div>
		</div>
	);
}

export default Feedback;
