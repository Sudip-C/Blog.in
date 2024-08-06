import { useSelector } from 'react-redux';
import { Slate, Editable, withReact } from 'slate-react';
import { createEditor } from 'slate';
import { withHistory } from 'slate-history';
import { useMemo } from 'react';

const Blog = () => {
  const posts = useSelector((state) => state.blog.posts);
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);

  return (
    <div>
      <h2>Blog Posts</h2>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            <h3>{post.title}</h3>
            <Slate editor={editor} value={post.content} onChange={() => {}}>
              <Editable readOnly />
            </Slate>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
