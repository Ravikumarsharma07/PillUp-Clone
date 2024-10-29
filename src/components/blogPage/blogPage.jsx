
import { useEffect } from "react";
import BlogPageHero from "./components/BlogPageHero";
import BlogContainer from "./components/BlogsContainer";

const BlogPage = () => {
    useEffect(()=>{
        window.scrollTo({top:0 , behavior:"smooth"})
    },[])
    
    return (
        <>
        <BlogPageHero />
        <BlogContainer />
        </>
    )
}
export default BlogPage; 