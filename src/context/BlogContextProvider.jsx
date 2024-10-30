import { useState, useEffect } from "react";
import BlogContext from "./blogContext";



const BlogContextProvider = ({ children }) => {

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
    <BlogContext.Provider value={{blogs}}>
    {children}
    </BlogContext.Provider>
    )
};

export default BlogContextProvider;
