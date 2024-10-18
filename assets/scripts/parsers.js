const parsers=
{
	parseDataLocation(src)
	{
		const type=src.location;
		const ret={};
		ret.name=src.name;
		switch(type)
		{
			case "save":
			{
				ret.get=function()
				{
					return data.save[this.name];
				};
				ret.seret=function(value)
				{
					data.save[this.name]=value;
				};
				break;
			}
			case "session":
			{
				ret.get=function()
				{
					return data.session[this.name];
				};
				ret.seret=function(value)
				{
					data.session[this.name]=value;
				};
				break;
			}
			default:
			{
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
		}
		return ret;
	},
	parseConditon(src)
	{
		const type=src.type;
		const ret={};
		switch(type)
		{
			case "bool":
			{
				ret.loc=parseDataLocation(src);
				ret.get=function()
				{
					return this.loc.get();
				};
				break;
			}
			case "notbool":
			{
				ret.loc=parseDataLocation(src);
				ret.get=function()
				{
					return !this.loc.get();
				};
				break;
			}
			case "and":
			{
				ret.conds=[]
				const l=src.conditions.length;
				for(let i=0;i<l;i++)
				{
					ret.conds.push(this.parseConditon(src.conditions[i]));
				}
				ret.get=function()
				{
					const l=this.conds.length;
					for(let i=0;i<l;i++)
					{
						if(!this.conds[i])
						{
							return false;
						}
					}
					return true
				};
				break;
			}
			case "or":
			{
				ret.conds=[]
				const l=src.conditions.length;
				for(let i=0;i<l;i++)
				{
					ret.conds.push(this.parseConditon(src.conditions[i]));
				}
				ret.get=function()
				{
					const l=this.conds.length;
					for(let i=0;i<l;i++)
					{
						if(this.conds[i])
						{
							return true;
						}
					}
					return false
				};
				break;
			}
			default:
			{
				ret.get=function()
				{
					return false
				}
				break;
			}
		}
		return ret;
	}
}