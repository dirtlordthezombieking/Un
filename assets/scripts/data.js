const save={};
const session={};
//let data;
//{
	//let req=window.indexedDB.open("data",1);
	//req.onerror=(event)=>
	//{
		//console.error(`Database error: ${event.target.error?.message}`);
	//};
	//request.onsuccess=(event)=>
	//{
		//data=event.target.result;
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
	load()
	{
		session.clear();
		save.clear();
		const temp=
		for(const key of Object.keys(temp))
		{
			save[key]=temp[key];
		}
	}
};