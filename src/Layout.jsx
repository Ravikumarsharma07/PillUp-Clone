import Header from "./components/header/header"
import { Outlet } from "react-router-dom"
import BlogContextProvider from "./context/BlogContextProvider"
import Chatbtn from "./components/homePage/homeComp/smallComponents/chatbtn"

export let blogsData = []
const Layout = () => {

    return (
        <BlogContextProvider>
        <Header />
        <Chatbtn />
        <Outlet />
        </BlogContextProvider>
        
    )
}

export default Layout;