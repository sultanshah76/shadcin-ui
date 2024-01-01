
import Link from "next/link";

const Blog = () => {
  return (
    <div className="text-2xl">
      This is Blog Page
      <div className="flex gap-5 py-2">
        <Link href={`/blog/${1}`}>slug:1 </Link>
        <Link href={`/blog/${2}`}>slug:2 </Link>
        <Link href={`/blog/${3}`}>slug:3 </Link>
        <Link href={`/blog/${4}`}>slug:4 </Link>
     
      </div>
    </div>
  );
};

export default Blog;