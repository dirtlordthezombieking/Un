const parsers=
{
	parseConditon(src)
	{
		const type=src["type"];
		const ret={};
		switch(type)
		{
			case "bool":
				ret.loc=parseDataLocation(src);
				break;
		}
		return ret;
	},
	parseDataLocation(src)
	{
		const type=src["location"];
		const ret={};
		ret["name"]=src["name"];
		switch(type)
		{
			case "save":
				ret.
				break;
		}
		return ret;
	}
}