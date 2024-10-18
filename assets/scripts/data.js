//let savedata;
//{
	//let req=window.indexedDB.open("data",1);
	//req.onerror=(event)=>
	//{
		//console.error(`Database error: ${event.target.error?.message}`);
	//};
	//request.onsuccess=(event)=>
	//{
		//savedata=event.target.result;
	//};
	//request.onupgradeneeded=(event)=>
	//{
		//const dataStruct=event.target.result;
		//db.createObjectStore(
	//}
//}
navigator.storage.persist();
const data=
{
	save:{},
	session:{},
	loadGame()
	{
		data.session.clear();
		data.save.clear();
		const temp=JSON.parse(localStorage.getItem("save"));
		if(!temp)
		{
			return;
		}
		for(const key of Object.keys(temp))
		{
			data.save[key]=temp[key];
		}
	},
	saveGame()
	{
		localStorage.setItem(JSON.stringify(data.save));
	}
};