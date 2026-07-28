import './App.css'
import { Card } from './components/Card.tsx';
import { ChaiCard } from './components/ChaiCart'
import { ChaiList } from './components/ChaiList.tsx';
import { Counter } from './components/Counter'
import { OrderForm } from './components/OrderForm.tsx';
import type { Chai } from './types.ts';



const menu : Chai[]= [
  {id : 1 , name : "masala" , price : 25} ,
  {id : 2 , name : "Lemon" , price : 40} ,
  {id : 3 , name : "Ginger" , price : 20} ,
]


function App() {
 

  return (
    <>
        <h1>Get started</h1>

      <div>

        <ChaiCard 
         name="Headphones"
         price={5000}
         isSpecial ={true}
        />

        <ChaiCard 
         name="Smart Watch"
         price={50000}
         isSpecial ={true}
        />

        <Counter />
      </div>

      <div>
        <ChaiList items={menu}/>
      </div>

      <div> 
        <OrderForm 
          onSubmit={(order)=>{
            console.log("Placed" , order.name , order.cups)
          }}
        />
      </div>

      <div>
        <Card 
          title ="Learn TypeScript Finally"
          footer ={ <button> It's Good </button>}
        />
      </div>
    </>
  )
}

export default App
