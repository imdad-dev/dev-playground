// in nextjs special type props -> children

import type { PropsWithChildren , ReactNode } from "react"

interface CardProps extends PropsWithChildren {
     title : string;
     footer?: ReactNode;
}


export function Card( {title , children , footer} : CardProps){
    return <div>
         
          <h2 style={{color :"red" }}> {title} </h2>
   <div>{children}</div>
   {footer && <footer> {footer} </footer>}

    </div>
}