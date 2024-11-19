import { Link, useParams, useNavigate } from "react-router-dom";
import useFetch from "./useFetch";

const ArticleDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const {data: article, error, isLoading} = useFetch(`http://localhost:8000/blogs/${id}`);

    const handleDelete = () => {
        fetch(`http://localhost:8000/blogs/${id}`, {method: 'DELETE'})
        .then (() => {
            navigate('/');
        })
    }

    return ( <div className="article-details">
        <Link to="/" className="backLink">Back</Link>
        {isLoading && <p>Loding article ...</p>}
        {error && <p>{error}</p>}
        {article && (
            <article>
                <h2>{article.title}</h2>
                <p>Written by {article.author}</p>
                <div>{article.body}</div>

                <div className="actions">
                    <button onClick={handleDelete}>Delete</button>
                    <Link to={`/update/${id}`}>Update</Link>
                </div>
            </article>
        )}
    </div> );
}
 
export default ArticleDetails;