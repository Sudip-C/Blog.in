import  { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../Redux/action';

const AddPost = () => {
  const [title, setTitle] = useState('');
  const [post,setPost] = useState('');
  
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPost( {id:Math.random()*100,title,post}));
    setTitle('');
    setPost('')
    
  };

  return (
    <form onSubmit={handleSubmit}className='form w-4/5 mx-auto my-5 flex flex-col'>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add your Title"
        className="border p-2 my-5"
      />
      <textarea 
      rows="4" cols="50"
      value={post}
      onChange={e=> setPost(e.target.value)}
      placeholder='write your post...'
      className='border-2 border-gray-200 p-2  '
      />
      <button type="submit" className="bg-blue-500 text-white w-1/5 p-2 mt-4">
        Add Post
      </button>
    </form>
  );
};

export default AddPost;
