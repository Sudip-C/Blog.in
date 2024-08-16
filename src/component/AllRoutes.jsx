import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home"
import { About } from "../pages/About"
import  Blog  from "../pages/Blog"
import AddPost from "./AddPost"
import { SinglePage } from "./SingleBlogPage"

const AllRoutes =()=>{
    return(
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<AddPost/>} />
            <Route path="/blog" element={<Blog/>} />
            <Route path="/create" element={<AddPost/>}/>
            <Route path="/blog/:id" element={<SinglePage/>}/>
        </Routes>
    )
}
export default AllRoutes