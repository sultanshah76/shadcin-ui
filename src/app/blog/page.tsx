// "use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import dayjs from "dayjs"
import { Badge } from "@/components/ui/badge"

const apidata=async () => {
const res= await fetch("https://api.slingacademy.com/v1/sample-data/blog-posts?offset=0&limit=100")
if(!res.ok){
    throw new Error("blog post not found")
}
return await res.json()
}

export default  async function Blogapp() {
const app= await apidata();
console.log("🚀 ~ Blogapp ~ apidata:", apidata)
return (
  <div className='p-10 flex flex-col' >
    {app.blogs.length > 0 ? (
      
      <div className='flex gap-5 flex-wrap'>
        <h1 className="font-bold text-6xl" >100 Best Examples of Beautiful Blogs posts.</h1> 
      
        {app.blogs.map((post1: any,) => (
          <Link href={`./blog/${post1.id}`} key={post1.id}>
            <Card>
            <Badge variant="default" className="capitalize">{post1.category}</Badge>
  <CardHeader>
    <CardTitle>{post1.title}</CardTitle>
    <CardDescription>{post1.description}</CardDescription>
  </CardHeader>
  <CardContent>
  <Image  src={post1.photo_url} alt="blog post" width={300} height={500} className="object-cover"/>
  </CardContent>
  <CardFooter>
    <p className='font-bold'>POSTED:{dayjs(post1.created_at).format("DD-MMMM-YYYY")}</p>
  </CardFooter>
</Card>
           </Link>
        ))}
      </div>
    ) : (
      <div>DATA NOT FOUND</div>
    )}
  </div>
);
}
// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardTitle,
// } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import dayjs from "dayjs";

// const getBlogs = async () => {
//   const res = await fetch(
//     "https://api.slingacademy.com/v1/sample-data/blog-posts?offset=0&limit=50"
//   );
//   if (!res.ok) {
//     throw new Error("Could not retrieve blog posts");
//   }
//   return await res.json();
// };

// async function BlogsPage() {
//   const blogs = await getBlogs();

//   return (
//     <div className="p-10 flex flex-col justify-center items-center">
//       {blogs.blogs.length > 0 ? (
//         <div className="flex gap-5 flex-wrap">
//           {blogs.blogs.map((post: any) => (
//             <Link href={`/blogs/${post.id}`} key={post.id}>
//               <Card>
//                 <CardContent className="max-w-xs flex flex-col gap-1 p-4">
//                   <Image
//                     src={post.photo_url}
//                     alt={post.title}
//                     width={400}
//                     height={400}
//                     className="object-cover"
//                   />
//                   <CardTitle>{post.title}</CardTitle>
//                   <CardDescription>{post.description}</CardDescription>
//                   <div className="flex justify-between items-center">
//                     <Badge variant="default" className="capitalize">
//                       {post.category}
//                     </Badge>
//                     <p className="font-bold">
//                       Posted:{dayjs(post.created_at).format("DD-MMM-YY")}
//                     </p>
//                   </div>
//                 </CardContent>
//               </Card>
//             </Link>
//           ))}
//         </div>
//       ) : (
//         <div>No Blog Found</div>
//       )}
//     </div>
//   );
// }

// export default BlogsPage;
