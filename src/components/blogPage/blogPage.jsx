
import { useEffect } from "react";
import BlogPageHero from "./components/BlogPageHero";
import BlogContainer from "./components/BlogsContainer";

const BlogPage = () => {
    useEffect(()=>{
        window.scrollTo({top:0 , behavior:"instant"})
    },[])
    
    return (
        <>
        <BlogPageHero />
        <BlogContainer />
        </>
    )
}
export default BlogPage; 