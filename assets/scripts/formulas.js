const formulas=
{
	expToLevel(exp)
	{
		return Math.floor(Math.sqrt(exp/25));
	},
	multiRandomRoll(chance,count)
	{
		return this.choiceMultiRandomRoll(chance,count,Math.random());
	},
	choiceMultiRandomRoll(chance,count,randomNumber)
	{
		return ((randomNumber**(1-chance))**(2/chance))*count;
	},
	timeNow()
	{
		return this.time(Date.now());
	},
	time(input)
	{
		return Math.floor(((input%3600000)*3)/125);
	},
	soundDistance(distance)
	{
		return 1/r;
	}
};