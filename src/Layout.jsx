import Header from "./components/header/header"
import { Outlet } from "react-router-dom"
import BlogContext from "./context/blogContext"
import BlogContextProvider from "./context/BlogContextProvider"

export let blogsData = []
const Layout = () => {

    return (
        <BlogContextProvider>
        <Header />
        <Outlet />
        </BlogContextProvider>
        
    )
}

export default Layout;