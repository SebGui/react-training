import { Link } from "react-router-dom";

const ArticleList = ({articles, title}) => {

    return ( <div className="article-list">
        <h1>{title}</h1>
        {articles.map((article) => (
                <div className="article-preview" key={article.id}>
                    <Link to={`/articles/${article.id}`}>
                        <h2>{article.title}</h2>
                    </Link>
                    <p>Written by : {article.author}</p>
                </div>
        ))}
    </div> );
}
 
export default ArticleList;