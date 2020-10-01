import React, { useState } from 'react';
import { Container, InputGroup, ListGroup } from 'react-bootstrap';
import questionsAndAnswers from './quizAnswers';
import './Quiz.css';
import Feedback from './Feedback';
function Quiz(props) {
	const [section, setSection] = useState(0); // federal = 0, state = 1, local = 2, judicial = 3, measures = 4, general = 5
	const [count, setCount] = useState(0);
    const [userChoice, setUserChoice] = useState(0);
    let answer = questionsAndAnswers[section].section[count].answer;
    let question = questionsAndAnswers[section].section[count].question;
	const [correct, setCorrect] = useState(false);
	const [submitted, setSubmitted] = useState(false);
    const [submitClass, setSubmitClass] = useState('greySubmit')
	//colors for each option
    const [showAnswer, setShowAnswer] = useState(false)
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
        setTimeout(()=> {
					setShowAnswer(true)
				}, 3000);
        setSubmitClass('submit')
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
let hint = questionsAndAnswers[section].section[count].hint;
	return (
		<Container className='quizContainer'>
			{showAnswer ? (
				<Feedback
					answer={choices[answer]}
					question={question}
					additionalInfo={
						questionsAndAnswers[section].section[count].additionalInfo
					}
				/>
			) : (
				<div>
					<h3 className='question'>{question}</h3>
					<p>{hint ? hint : ''}</p>
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

									<label
										className={'choice ' + colors.color0}
										htmlFor={choices[0]}>
										A. {choices[0]}
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

									<label
										className={'choice ' + colors.color1}
										htmlFor={choices[0]}>
										B. {choices[1]}
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

									<label
										className={'choice ' + colors.color2}
										htmlFor={choices[0]}>
										C. {choices[2]}
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

									<label
										className={'choice ' + colors.color3}
										htmlFor={choices[0]}>
										D. {choices[3]}
									</label>
								</InputGroup>
							</ListGroup.Item>
						</ListGroup>
						<div className='buttons'>
							<button type='submit' className={submitClass}>
								Submit
							</button>
							<button className={submitClass}>Answer</button>
						</div>
					</form>
				</div>
			)}
		</Container>
	);
}

export default Quiz;
