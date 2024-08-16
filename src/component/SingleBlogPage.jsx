import { useSelector } from "react-redux";
import { useParams } from "react-router-dom"

export const SinglePage =() =>{
    const {id}=useParams();
    const post =useSelector(post=>post.blog.posts.find(el=>el.id==id));
    return (
        <>
        <section>
            <h1>
                {post.title}
            </h1>
        </section>
        <section>
            <div>
                <h1>Comments</h1>
            </div>
        </section>
        </>
    )
}

