
import { useContext } from "react";
import BlogContext from "../../../context/blogContext";
import BlogPageCard from "./smallComponents/BlogPageCard";

const BlogContainer = () => {

  const {blogs} = useContext(BlogContext)
  
  return (
    <section className="min-h-screen h-max z-10 px-4 sm:px-16">
      <div className="h-20 text-4xl font-semibold text-orange-500 font-serif tracking-widest flex items-center justify-center bg-white z-50 relative top-[-50px] rounded-xl shadow-xl">
        <h3>LATEST BLOGS</h3>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 max-sm:gap-10">
      
      {blogs.map((blog) => {
                    const label = blog.label;
                    const textContent = blog.post_body;
                    const blogURL = `/Blogs/${blog.label}`

                    let blogTitle = label;    
                    let blogContent = textContent.slice(0,400) + ".......";
                    
                    return <BlogPageCard key={blog.label} title={blogTitle} blogContent={blogContent} blogURL={blogURL}/>
                })}           
      </div>
    </section>
  );
};

export default BlogContainer;


