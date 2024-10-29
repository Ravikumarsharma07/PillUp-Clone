import { useEffect, useState } from "react";
import BlogCard from "./smallComponents/blogCard";
import { Link } from "react-router-dom";


const HomeBlogPage = () => {
    const [blogs, setBlogs] = useState([])

    useEffect( () =>{
        const fetchBlogs = async () => {
            try {
                const result = await fetch("https://pillup-clone-backend-wdo6.onrender.com/api/blogs");
                const data = await result.json();
                if(data){
                    setBlogs(data.objects);
                }
            } catch (error) {
                console.log(error);
            }                      
        }
        fetchBlogs()
    },[])
  

    return (
        <section className="w-full bg-[#d5e5ec] mt-4 sm:pb-10 pb-8">
            <img src="https://pillup.com/assets/videoElement1.svg" alt="Design" className="w-full mb-16"/>

            <h1 className="text-center p-5 text-4xl sm:text-[3.2rem] font-semibold"> Our Latest Blogs</h1>

            <div className="grid gap-5 grid-cols-1 sm:grid-cols-11 w-full sm:px-16 px-8 mt-10"> 

                
                {blogs.map((blog,index) => {
                    if (index < 2) {
                    const label = blog.label;
                    const textContent = blog.post_summary
                    const blogURL = `/blogs/${blog.label}`

                    let blogTitle
                    let blogContent
                    if(window.innerWidth < 640){
                        if(label.length > 45){
                        blogTitle = label.slice(0,45) + " ...";
                        blogContent = textContent.slice(3, 65) + "....";
                        }
                    }else{
                        blogTitle = label;
                        blogContent = textContent.slice(3,100) + "....";
                    }
                    
                    return <BlogCard key={blog.label} title={blogTitle} content={blogContent} blogURL={blogURL}/>
                }else{
                    return ""
                }
                })}
                <Link to="/blogs" className="max-sm:w-[80vw] w-max text-end  self-end font-serif text-xl sm:font-medium ">more</Link>
            </div>
        </section>

    )
}


export default HomeBlogPage;
