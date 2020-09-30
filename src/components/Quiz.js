import React, { useState } from 'react';
import { Container, InputGroup, ListGroup } from 'react-bootstrap';
import questionsAndAnswers from './quizAnswers';
import './Quiz.css';
function Quiz(props) {
	const [section, setSection] = useState(0); // federal = 0, state = 1, local = 2, judicial = 3, measures = 4, general = 5
	const [count, setCount] = useState(0);
	const [userChoice, setUserChoice] = useState(0);
	let answer = questionsAndAnswers[section].section[count].answer;
	const [correct, setCorrect] = useState(false);
	const [submitted, setSubmitted] = useState(false);

	function handleChoice(event) {
        
		let value = parseInt(event.target.value);
        setUserChoice(value);
        if(submitted){
            event.preventDefault();
        }
	}
	const handleSubmit = (event) => {
		event.preventDefault();
		if (!submitted) {
			setSubmitted(true);
			if (userChoice === answer) {
				setCorrect(true);
			}
		}
	};
	let color;
	if (submitted && correct) {
		color = 'right';
	} else if (submitted === false && correct === false) {
		color = 'normal';
	} else if (submitted === true && correct === false) {
		color = 'wrong';
	}

	return (
		<Container>
			<h3>{questionsAndAnswers[section].section[count].question}</h3>
			<form onSubmit={handleSubmit}>
				<ListGroup>
					{questionsAndAnswers[section].section[count].choices.map(
						(choice, index) => {
							return (
								<ListGroup.Item key={index} className='item'>
									<InputGroup className='radioInput'>
										{console.log(index)}
										<InputGroup.Prepend className='prepend'>
											<input
												type='radio'
												name='choice'
												id='question'
												value={index}
												className={color}
												onClick={handleChoice}
											/>
										</InputGroup.Prepend>

										<label className={'choice ' + color} htmlFor={index}>
											{choice}
										</label>
									</InputGroup>
								</ListGroup.Item>
							);
						}
					)}
				</ListGroup>
				<button type='submit'>Submit</button>
				<button>Answer</button>
			</form>
		</Container>
	);
}

export default Quiz;
