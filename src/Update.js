import { useParams, useNavigate } from "react-router-dom";
import useFetch from "./useFetch";
import { useEffect, useState } from "react";

const Update = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('')

    const { id } = useParams();
    const navigate = useNavigate();
    const {data: article, error, isLoading} = useFetch(`http://localhost:8000/blogs/${id}`);
    const [updateIsLoading, setUpdateIsLoafing] = useState(false)

    useEffect(() => {
        if (article === null) {return}
        setTitle(article.title);
        setBody(article.body);
        setAuthor(article.author);
    }, [article])

    const handleSubmit = (e) => {
        setUpdateIsLoafing(true)
        e.preventDefault();
        const article = {title, body, author}
        
        fetch(`http://localhost:8000/blogs/${id}`, {
            method: 'PATCH',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(article)
        }).then(() => {
            setUpdateIsLoafing(false)
            console.log('Successfuly Updated');
            navigate('/')
        })
    }

    return ( <div className="update">
        <h2>Update article</h2>
        {error && <div>{error}</div>}
        {isLoading && <p>Loading ...</p>}
        {article && <form onSubmit={handleSubmit}>
            <label>Article title</label>
            <input 
                type="text" 
                required
                value={title}
                placeholder="Choose a title..."
                onChange={(e) => setTitle(e.target.value)}
            />

            <label>Article body</label>
            <textarea  
                value={body}
                required
                placeholder="Choose a body..."
                onChange={(e) => setBody(e.target.value)}
            ></textarea>

            <label>Article author</label>
            <select
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
            >
                <option value="mario">Mario</option>
                <option value="yoshi">Yoshi</option>
            </select>

            {!updateIsLoading && <button type="submit">Update article</button>}
            {updateIsLoading && <button type="submit" disabled>Updating article...</button>}
        </form>}
    </div> );
}
 
export default Update;