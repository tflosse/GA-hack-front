import React, { useState } from 'react';
import questionsAndAnswers from './quizAnswers';
import { Container, InputGroup, ListGroup } from 'react-bootstrap';
import './Quiz.css';
function Quiz(props) {
	const [section, setSection] = useState(0); // federal = 0, state = 1, local = 2, judicial = 3, measures = 4, general = 5
    const [count, setCount] = useState(0);
	return (
		<Container>
			<h3>{questionsAndAnswers[section].section[count].question}</h3>
			<ListGroup>
				{questionsAndAnswers[section].section[count].choices.map(
					(choice, index) => {
						return (
							<ListGroup.Item key={index} className='item'>
								<InputGroup className='radio'>
									<InputGroup.Prepend className='prepend'>
										<input type='radio' id={index} />
									</InputGroup.Prepend>

									<p className='choice'>{choice}</p>
								</InputGroup>
							</ListGroup.Item>
						);
					}
				)}
			</ListGroup>
			<button>Answer</button>
		</Container>
	);
}

export default Quiz;
