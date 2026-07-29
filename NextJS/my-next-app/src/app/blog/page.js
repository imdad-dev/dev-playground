import { Content } from "next/font/google"
import Link from "next/link"


export default async  function BlogPost (){

      const data = await fetch('https://jsonplaceholder.typicode.com/posts' , { next : { 
        revalidate : 120
      }})   // catch only 2 minute
  const posts = await data.json()
     
    return <>



 <h2 className="text-center text-amber-300">All Blog Post </h2>

    <div className=" flex flex-wrap gap-5">
    { posts.map( (post) =>(
    <div key={post.id} className="border p-4">
    
    <Link href={`/blog/${post.id}`}> 
       <h1 className="text-indigo-400">{post.title}</h1>
    </Link>
        <p className="bg-gray-300 text-black">{post.body}</p>
     </div>

    ))}

    </div>
      
    </>
}