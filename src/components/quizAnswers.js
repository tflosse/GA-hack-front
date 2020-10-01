const questionsAndAnswers = [
	{
		section: [
			{
				question: 'Who is your representative?',
				hint:
					'Hint: your district is California’s 33rd Congressional District.',
				choices: [
					'Ted Lieu',
					'Arnold Schwarzenegger',
					'Kamala Harris',
					'Dianne Feinstein',
				],
				answer: 0,
				additionalInfo:
					'The District Attorney is the chief legal representative of the county. Incumbent Jackie Lacey and George Gascón are running in the general election for Los Angeles County District Attorney on November 3, 2020.',
			},
			{
				question:
					'Not sure if you’ve heard, but there are people running for President of the United States this year! Which one of these individuals is not on the ballot?',
				choices: ['Kanye West', 'Howie Hawkins', 'Donald Trump', 'Joe Biden'],
				answer: 1,
				additionalInfo:
					'Member of a board responsible for overseeing library operations within the district.',
			},
		],
	},
	{
		section: [
			{
				question:
					'What is the name of the lower house of the California State Legislature?',
				choices: [
					'California State Council',
					'California State Assembly',
					'Los Angelos County Assembly',
					'California State House',
				],
				answer: 1,
				additionalInfo:
					'In 2020, all 80 assembly seats are up for election. Members of the California State Assembly serve two-year terms, with every seat up for election each even-numbered year.',
			},
			{
				question: 'California State Assembly consists of how many members?',
				choices: ['12', '150', '80', '37'],
				answer: 3,
				additionalInfo:
					'The District Attorney is the chief legal representative of the county. Incumbent Jackie Lacey and George Gascón are running in the general election for Los Angeles County District Attorney on November 3, 2020.',
			},
		],
	},
	{
		section: [
			{
				question:
					'Who is the chief legal representative of the Los Angelos county?',
				choices: [
					'Superior Court Judge',
					'District Attorney',
					'Mayor',
					'City Council',
				],
				answer: 1,
			},
			{
				question:
					'Palos Verdes Library District Board is up for election. Which of these candidates is not running for this position?',
				choices: ['Jim Jones', 'Bob Nelson', 'Ray Randall', 'Ray Randall'],
				answer: 0,
			},
		],
	},
	{
		section: [
			{
				question:
					'Do you know who gets to nominate State Judges in California?',
				choices: [
					'The President of the United States',
					'The Attorney General',
					'The People',
					'The Governor',
				],
				answer: 3,
			},
			{
				question: 'California has how many trial courts?',
				choices: [
					'482, for each city',
					'53, for each district',
					'4, for each district court',
					'58, for each county',
				],
				answer: 3,
			},
		],
	},
	{
		section: [
			{
				question:
					'Proposition 15 increases funding sources for public schools, community colleges, and local government services by changing tax assessment of commercial and industrial property. What does voting YES on this measure mean?',
				choices: [
					'Commercial properties will continue to be assessed based on purchase value.',
					'Property taxes on commercial properties would stay the same.',
					'Property taxes on commercial properties worth more than certain market value would go up in order to provide new funding to local governments and schools.',
					'Property taxes an all commercial properties would go up in order to provide new funding to local government and schools.',
				],
				answer: 2,
			},
			{
				question:
					"Proposition 21 expands local governments' authority to enact rent control on residential property. What is one possible consequence of this measure if it passes?",
				choices: [
					'State law would remove all rent control on properties over 15 years old.',
					'State law would allow cities and counties to apply more kinds of rent control to more properties than under current law.',
					'A potential increase in all rent prices.',
					'A potential increase in state and local revenues.',
				],
				answer: 1,
			},
		],
	},
	{
		section: [
			{
				question: 'What are the polling place hours?',
				choices: [
					'7:00 am to 8:00 pm',
					'6:00 am to 5:00 pm',
					'12:00 am to 10:00 pm',
					'9:00 am to 6:00 pm',
				],
				answer: 2,
			},
			{
				question: 'When is the deadline for voter registration in California?',
				choices: [
					'Election Day',
					'10 days before the Election Day',
					'15 days before the Election Day',
					'20 Days before the Election Day',
				],
				answer: 1,
			},
		],
	},
];

export default questionsAndAnswers;
