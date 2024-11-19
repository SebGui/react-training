import { useState } from "react";
import {useNavigate} from 'react-router-dom';

const Create = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('mario')
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        setIsLoading(true)
        e.preventDefault();
        const article = {title, body, author}
        
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(article)
        }).then(() => {
            setIsLoading(false)
            console.log('Successfuly added');
            navigate('/')
        })
    }

    return ( <div className="create">
        <h2>Add a new article</h2>
        <form onSubmit={handleSubmit}>
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

            {!isLoading && <button type="submit">Add article</button>}
            {isLoading && <button type="submit" disabled>Adding article...</button>}
        </form>
    </div> );
}
 
export default Create;