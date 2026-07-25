import axios , {type  AxiosResponse   } from "axios";

interface Todos {
    userId : number ;
    id : number;
    title : string ;
    completed : boolean;
}

 console.log("it's work")
const url ="https://jsonplaceholder.typicode.com/todos/1";

const fetchData = async (url : string ) => {
    try {
        
  const resoponse : AxiosResponse<Todos> = await axios.get(url)
    
  console.log("Todo:" , resoponse.data)

    } catch (error :any) {
       
        if(axios.isAxiosError(error )){
            console.log("Axios Error" , error.message);

         if(error.response){
            console.log("Error Response : " , error.response.headers);
            
         }
        }
    
    }
}


fetchData(url);

 