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

	//colors for each option

	const [colors, setColors] = useState({
		color0: 'normal',
		color1: 'normal',
		color2: 'normal',
		color3: 'normal',
	});
	let choices = questionsAndAnswers[section].section[count].choices;
	function handleChoice(event) {
		let value = parseInt(event.target.value);
		setUserChoice(value);
		if (submitted) {
			event.preventDefault();
		}
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		if (!submitted) {
			setSubmitted(true);
			if (userChoice === answer) {
				setCorrect(true);
				if (userChoice === 0) {
					setColors({
						color0: 'right',
						color1: 'normal',
						color2: 'normal',
						color3: 'normal',
					});
				} else if (userChoice === 1) {
					setColors({
						color0: 'normal',
						color1: 'right',
						color2: 'normal',
						color3: 'normal',
					});
				} else if (userChoice === 2) {
					setColors({
						color0: 'normal',
						color1: 'normal',
						color2: 'right',
						color3: 'normal',
					});
				} else if (userChoice === 3) {
					setColors({
						color0: 'normal',
						color1: 'normal',
						color2: 'normal',
						color3: 'right',
					});
				}
			} else {
				if (userChoice === 0) {
					setColors({
						color0: 'wrong',
						color1: 'normal',
						color2: 'normal',
						color3: 'normal',
					});
				} else if (userChoice === 1) {
					setColors({
						color0: 'normal',
						color1: 'wrong',
						color2: 'normal',
						color3: 'normal',
					});
				} else if (userChoice === 2) {
					setColors({
						color0: 'normal',
						color1: 'normal',
						color2: 'wrong',
						color3: 'normal',
					});
				} else if (userChoice === 3) {
					setColors({
						color0: 'normal',
						color1: 'normal',
						color2: 'normal',
						color3: 'wrong',
					});
				}
			}
		}
	};

	return (
		<Container className='quizContainer'>
			<h3>{questionsAndAnswers[section].section[count].question}</h3>
			<form onSubmit={handleSubmit}>
				<ListGroup className='listGroup'>
					<ListGroup.Item className='item'>
						<InputGroup className='radioInput'>
							<InputGroup.Prepend className='prepend'>
								<input
									type='radio'
									name='choice'
									id='question'
									value={0}
									className={'listGroup' + colors.color0}
									onClick={handleChoice}
								/>
							</InputGroup.Prepend>

							<label className={'choice ' + colors.color0} htmlFor={choices[0]}>
								{choices[0]}
							</label>
						</InputGroup>
					</ListGroup.Item>

					<ListGroup.Item className='item'>
						<InputGroup className='radioInput'>
							<InputGroup.Prepend className='prepend'>
								<input
									type='radio'
									name='choice'
									id='question'
									value={1}
									className={'listGroup' + colors.color1}
									onClick={handleChoice}
								/>
							</InputGroup.Prepend>

							<label className={'choice ' + colors.color1} htmlFor={choices[0]}>
								{choices[1]}
							</label>
						</InputGroup>
					</ListGroup.Item>

					<ListGroup.Item className='item'>
						<InputGroup className='radioInput'>
							<InputGroup.Prepend className='prepend'>
								<input
									type='radio'
									name='choice'
									id='question'
									value={2}
									className={'listGroup' + colors.color2}
									onClick={handleChoice}
								/>
							</InputGroup.Prepend>

							<label className={'choice ' + colors.color2} htmlFor={choices[0]}>
								{choices[2]}
							</label>
						</InputGroup>
					</ListGroup.Item>

					<ListGroup.Item className='item'>
						<InputGroup className='radioInput'>
							<InputGroup.Prepend className='prepend'>
								<input
									type='radio'
									name='choice'
									id='question'
									value={3}
									className={'listGroup' + colors.color3}
									onClick={handleChoice}
								/>
							</InputGroup.Prepend>

							<label className={'choice ' + colors.color3} htmlFor={choices[0]}>
								{choices[3]}
							</label>
						</InputGroup>
					</ListGroup.Item>
				</ListGroup>
				<button type='submit'>Submit</button>
			</form>
		</Container>
	);
}

export default Quiz;
