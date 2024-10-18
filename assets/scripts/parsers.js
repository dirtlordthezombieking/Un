const parsers=
{
	parseConditon(src)
	{
		const type=src.type;
		const ret={};
		switch(type)
		{
			case "bool":
				ret.loc=parseDataLocation(src);
				ret.get=function()
				{
					return this.loc.get();
				}
				break;
			case "notbool":
				ret.loc=parseDataLocation(src);
				ret.get=function()
				{
					return !(this.loc.get());
				}
				break;
			case "and":
				const conds=[]
				
				ret.get=function()
				{
					return this.loc.get();
				}
				break;
			default:
				ret.get=function()
				{
					return false
				}
				break;
		}
		return ret;
	},
	parseDataLocation(src)
	{
		const type=src.location;
		const ret={};
		ret name=src.name;
		switch(type)
		{
			case "save":
				ret.get=function()
				{
					return data.save[this.name];
				};
				ret.seret=function(value)
				{
					data.save[this.name]=value;
				};
				break;
			default:
				ret.get=function()
				{
					return undefined;
				};
				ret.seret=function(value)
				{
					return;
				};
				break;
		}
		return ret;
	}
}