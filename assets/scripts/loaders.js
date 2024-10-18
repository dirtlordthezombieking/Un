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
		ret.stereoNode=new StereoPannerNode(globalsaudioContext,{pan:0});
		ret.track.connect(ret.stereoNode).connect(globals.audioContext.destination);
		
		return ret;
	}
}