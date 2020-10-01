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
					"California has two senators in the United States Senate and 53 representatives in the United States House of Representatives. The United States is divided into 435 congressional districts, each with a population of about 710,000 individuals. Each district elects a representative to the House of Representatives for a two-year term. Representatives are also called congressmen/congresswomen. Americans in the United States’s six territories are represented in the House of Representatives by an additional six non-voting delegates. Your district is California's 33rd Congressional Distrit and is representated by Ted Lieu. Kamala Harris and Dianne Feinstein are California's senators. Candidates running for U.S. House of Representatives - California 33rd Congressional District are Ted Lieu and James Bradley",
			},
			{
				question:
					'Not sure if you’ve heard, but there are people running for President of the United States this year! Which one of these individuals is not on the ballot?',
				choices: ['Kanye West', 'Howie Hawkins', 'Donald Trump', 'Joe Biden'],
				answer: 1,
				additionalInfo:
					'The President is the chief executive of the country, possessing many powers including signing bills into law, vetoing legislation, appointing federal judges and executive department heads, issue executive orders, and conducting foreign policy. Candidates running for this office are: Donald Trump, Joe Biden, Howie Hawkins, Jo Jorgensen',
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
					'The California State Assembly is the lower chamber of the California State Legislature. Alongside the California State Senate, it forms the legislative branch of the California state government and works alongside the governor of California to create laws and establish a state budget. Legislative authority and responsibilities of the California State Assembly include passing bills on public policy matters, setting levels for state spending, raising and lowering taxes, and voting to uphold or override gubernatorial vetoes.Candidates running for this office in your district are: Autumn Burke and Robert Steele',
			},
			{
				question: 'California State Assembly consists of how many members?',
				choices: ['12', '150', '80', '37'],
				answer: 3,
				additionalInfo:
					'In 2020, all 80 assembly seats are up for election. Members of the California State Assembly serve two-year terms, with every seat up for election each even-numbered year.',
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
				additionalInfo:
					'The District Attorney is the chief legal representative of the county. Incumbent Jackie Lacey and George Gascón are running in the general election for Los Angeles County District Attorney on November 3, 2020.',
			},
			{
				question:
					'Palos Verdes Library District Board is up for election. Which of these candidates is not running for this position?',
				choices: ['Jim Jones', 'Bob Nelson', 'Ray Randall', 'Ray Randall'],
				answer: 0,
				additionalInfo:
					'Member of a board responsible for overseeing library operations within the district.',
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
				additionalInfo:
					"The California judiciary consists of the supreme court, the courts of appeal, and the superior court. According to California's constitution, judges of the supreme court and courts of appeal are nominated by the governor and must be confirmed by the commission on judicial appointments, which consists of the chief justice, the attorney general, and a presiding justice of the courts of appeal.",
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
				additionalInfo:
					'California has 58 trial courts, one in each county. Superior courts have trial jurisdiction over all criminal and civil cases. The 1,535 judges of the California Superior Courts compete in nonpartisan races in even-numbered years. If a candidate receives more than 50 percent of the vote in the June primary election, he or she is declared the winner; if no candidate receives more than 50 percent of the vote, a runoff between the top two candidates is held during the November general election. If an incumbent judge is running unopposed in an election, his or her name does not appear on the ballot. The judge is automatically re-elected following the general election.',
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
				additionalInfo:
					'Prop 15 taxes such properties based on current market value, instead of purchase price. Fiscal Impact: Increased property taxes on commercial properties worth more than $3 million providing $6.5 billion to $11.5 billion in new funding to local governments and schools. A "YES" vote on Proposition 15 means: Property taxes on most commercial properties worth more than $3 million would go up in order to provide new funding to local governments and schools. A "NO" vote on Proposition 15 means: Property taxes on commercial properties would stay the same. Local governments and schools would not get new funding.',
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
				additionalInfo:
					'Prop 21 Allows local governments to establish rent control on residential properties over 15 years old. Local limits on rate increases may differ from statewide limit. Fiscal Impact: Overall, a potential reduction in state and local revenues in the high tens of millions of dollars per year over time. Depending on actions by local communities, revenue losses could be less or more. A "YES" vote on Proposition 21 means: State law would allow cities and counties to apply more kinds of rent control to more properties than under current law. A "NO" vote on Proposition 21 means: State law would maintain current limits on rent control laws cities and counties can apply.',
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
				additionalInfo:
					'In California, polls are open from 7:00 a.m. to 8:00 p.m',
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
				additionalInfo:
					'In California, mail-in voter registeration deadline is October 19. In-person voters can register to vote on the Election Day, November 3rd.',
			},
		],
	},
];

export default questionsAndAnswers;
