import { useParams } from "react-router-dom/cjs/react-router-dom";
import useFetch from "./usefetch";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const  BlogDetails = () => {
    const {id} = useParams()
    const {data : blog, error, isPending}= useFetch('http://localhost:8000/blogs/' + id)
    const history = useHistory()
    const handleClick = ()=>{
        fetch('http://localhost:8000/blogs/' + blog.id,{method:'DELETE'}).then(()=>{
            history.push('/')
        })
    }
    return (  
       <div className="blog-details">
        {isPending && <div>loadin...</div>}
        {error && <div>{error}
            </div>}
        {blog && (<article>
            <h2>{blog.title}</h2>
        <p>written by{blog.author}</p>
        <div>{blog.body}</div>
        <button onClick={handleClick}>Delete</button>
        </article>)}
         </div>
    );
}
 
export default  BlogDetails;