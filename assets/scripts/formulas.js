const formulas=
{
	expToLevel(exp)
	{
		return Math.floor(Math.sqrt(exp/25));
	},
	multiRandomRoll(chance,count)
	{
		return choiceMultiRandomRoll(chance,count,Math.random());
	},
	choiceMultiRandomRoll(chance,count,randomNumber)
	{
		return ((randomNumber**(1-chance))**(2/chance))*count;
	}
};