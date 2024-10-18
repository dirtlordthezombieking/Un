const loaders=
{
	loadSound(src)
	{
		const ret=document.createElement("audio");
		ret.src=""+src+".ogg";
		ret.type="audio/ogg";
		ret.setAttribute("preload", "auto");
		ret.setAttribute("controls", "none");
		ret.loop=false;
		ret.style.display="none";
		document.body.appendChild(ret);
		return ret;
	}
}