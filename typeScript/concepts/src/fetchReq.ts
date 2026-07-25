interface Todos {
    userId : number ;
    id : number;
    title : string ;
    completed : boolean;
}

 
const url ="https://jsonplaceholder.typicode.com/todos/5";

const fetchData = async (url : string ) => {
    try {
        
  const resoponse = await fetch(url);
      
  if(! resoponse.ok){
     throw new Error(`HTTP error :${resoponse.status}`)
  }
 
  const data = await resoponse.json();
  console.log("Data :" , data)

    } catch (error :any) {
       console.log(error.message)
    
    }
}


fetchData(url);

 