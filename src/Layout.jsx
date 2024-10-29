import Header from "./components/header/header"
import { Outlet } from "react-router-dom"

export let blogsData = []
const Layout = () => {
    const fetchBlogs = async () => {
        try {
            const result = await fetch("https://pillup-clone-backend-wdo6.onrender.com/api/blogs");
            const data = await result.json();
            if(data){
                blogsData = data.objects;
            }
        } catch (error) {
            console.log(error);
        }                      
    }
    fetchBlogs()
    return (
        <>
        <Header />
        <Outlet />
        </>
        
    )
}

export default Layout;