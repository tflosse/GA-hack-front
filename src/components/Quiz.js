import React, { useState } from 'react';
import { Container, InputGroup, ListGroup } from 'react-bootstrap';
import questionsAndAnswers from './quizAnswers';
import {Link} from 'react-router-dom';
import './Quiz.css';
import Feedback from './Feedback';
import ResultsPopUp from './ResultsPopUp';
function Quiz({
	setFederal,
	setState,
	setLocal,
	setJudicial,
	setMeasures,
	setBonus,
	federal,
	state,
	local,
	judicial,
	measures,
	bonus,
}) {
	const [section, setSection] = useState(0); // federal = 0, state = 1, local = 2, judicial = 3, measures = 4, general = 5
    const [count, setCount] = useState(0);
    const [numberOfQuestions, setNumberOfQuestions] = useState(0)
	const [userChoice, setUserChoice] = useState(0);
	let answer = questionsAndAnswers[section].section[count].answer ? questionsAndAnswers[section].section[count].answer: 1;
	let question = questionsAndAnswers[section].section[count].question;
	const [correct, setCorrect] = useState(false);
	const [submitted, setSubmitted] = useState(false);
	const [submitClass, setSubmitClass] = useState('greySubmit');
	//SCORES for sections

	//colors for each option
	const [showAnswer, setShowAnswer] = useState(false);
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
		setSubmitClass('submit');
		if (submitted) {
			event.preventDefault();
		}
	}
	const handleNextQuestion = (event) => {
		event.preventDefault();
        setNumberOfQuestions(numberOfQuestions +1)
		setShowAnswer(false);
		setSubmitClass('greySubmit');
        
		if (count === 1) {
			setSection(section + 1);
			setCount(0);
			setSubmitted(false);
			setShowAnswer(false);
		} else {
			setCount(count + 1);
			setSubmitted(false);
			setShowAnswer(false);
		}
		setColors({
			color0: 'normal',
			color1: 'normal',
			color2: 'normal',
			color3: 'normal',
		});
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		setTimeout(() => {
			setShowAnswer(true);
			setSubmitClass('greySubmit');
		}, 1000);

		if (!submitted) {
			setSubmitted(true);
			if (userChoice === answer) {
				setCorrect(true);
				if (section === 0) {
					setFederal(federal + 1);
				} else if (section === 1) {
					setState(state + 1);
				} else if (section === 2) {
					setLocal(local + 1);
				} else if (section === 3) {
					setJudicial(judicial + 1);
				} else if (section === 4) {
					setMeasures(measures + 1);
				} else if (section === 5) {
					setBonus(bonus + 1);
				}

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
			<div className='arrows'>
				<div className='carouselButtonPrev' onClick={handleNextQuestion}></div>
				{(numberOfQuestions === 11) ? <Link to='/results' className='carouselButtonNext'>
					<div onClick={handleNextQuestion}></div>
				</Link> : <div className='carouselButtonNext' onClick={handleNextQuestion}></div>}
			</div>
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
					<p className='hint'>{hint ? hint : ''}</p>
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
						</div>
					</form>
				</div>
			)}
		</Container>
	);
}

export default Quiz;
