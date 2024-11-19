import ArticleList from './ArticleList';
import useFetch from './useFetch';

const Home = () => {
    const {data:articles, isLoading, error} = useFetch('http://localhost:8000/blogs')

    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isLoading && <p>Loading ...</p>}
            {articles && <ArticleList title="All articles" articles={articles} />}
            {articles && <ArticleList title="Mario's articles" articles={articles.filter((article) => article.author === 'mario')} /> }
        </div>
    );
}
 
export default Home