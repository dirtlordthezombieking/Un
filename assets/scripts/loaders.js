const loaders=
{
	loadSound(src)
	{
		const ret={};
		ret.sound=document.createElement("audio");
		ret.sound.src="assets/audio/sounds/"+src+".ogg";
		ret.sound.type="audio/ogg";
		ret.sound.setAttribute("preload", "auto");
		ret.sound.setAttribute("controls", "none");
		ret.sound.loop=false;
		ret.sound.style.display="none";
		document.body.appendChild(ret.sound);
		ret.track=globals.audioContext.createMediaElementSource(ret.sound);
		ret.panNode=new PannerNode(globalsaudioContext,{coneInnerAngle:360,coneOuterAngle:360,maxDistance:});
		ret.track.connect(ret.panNode).connect(globals.audioContext.destination);
		ret.setPan=function(value)
		{
			this.panNode.pan.value=value;
		}
		return ret;
	}
}