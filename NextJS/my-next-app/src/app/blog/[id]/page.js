import Link from "next/link";
 

export default async function BlogPostPage({params}) {
  
  const { id } =await params;
 
  return (
    <div>
  
      <h3>  Here all blog post {id} article live </h3>
    </div>
  )
}
