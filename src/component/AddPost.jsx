import  { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../Redux/action';

const AddPost = () => {
  const [title, setTitle] = useState('');
  
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPost({ title}));
    setTitle('');
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Post Title"
        className="border p-2 mr-2"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 mt-4">
        Add Post
      </button>
    </form>
  );
};

export default AddPost;
