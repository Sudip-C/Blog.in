import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home"
import { About } from "../pages/About"
import  Blog  from "../pages/Blog"
import AddPost from "./AddPost"

const AllRoutes =()=>{
    return(
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/blog" element={<Blog/>} />
            <Route path="/create" element={<AddPost/>}/>
        </Routes>
    )
}
export default AllRoutes