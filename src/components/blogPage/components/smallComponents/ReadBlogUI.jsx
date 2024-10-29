import { useParams } from "react-router-dom";
import { blogsData } from "../../../../Layout";
import { Link } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useRef } from "react";


const ReadBlogUI = () => {
 
    const {blogID} = useParams();
    const blogReadPage = useRef();
    useEffect(()=>{
        window.scrollTo({top:0, behavior:"smooth"})
    },[])

    return(
        <section ref={blogReadPage} className="h-max w-full bg-slate-100 py-10 px-4 sm:px-20 absolute top-0 z-50">
            <Link to="/Blogs"><CloseIcon className=" absolute top-4 right-4 sm:right-10 scale-125" /></Link>
            <h3 className="text-3xl sm:text-5xl text-orange-400 text-center mb-10">{blogID}</h3>
            {blogsData.map((blog)=>{
                if(blog.label === blogID){
                    return <p className="text-xl sm:leading-8 sm:px-10" key={blog.label} dangerouslySetInnerHTML={{__html:blog.post_body}}></p>
                }else{
                    return ""
                }
            })}
        </section>
    )
}


export default ReadBlogUI;

