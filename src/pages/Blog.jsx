import { useSelector } from 'react-redux';
import {Link as NavLink} from "react-router-dom"

const Blog = () => {
  const posts = useSelector((state) =>(state.blog.posts));


  return (
    <div className='p-3' > 
      <h1 className='text-3xl my-3 font-bold'>Our Recent Blogs</h1>
      <hr />
      <div className=' my-4 grid grid-cols-4 gap-3'>
        {posts?.map((post, index) => (
          
            <div  key={index}className='border-2 border-gray-400 rounded-md p-3'>
              <NavLink to={`/blog/${post.id}`}><h1 className='text-2xl font-bold'>{post.title}</h1></NavLink>
              <h3>{post.post.slice(0,10)}...</h3>
            </div>
          
        ))}
      </div>
    </div>
  );
};

export default Blog;
