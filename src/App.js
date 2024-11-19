import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import ArticleDetails from './ArticleDetails';
import NotFound from './Notfound';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Update from './Update';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <main className="content">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/create" element={<Create/>}/>
            <Route path="/update/:id" element={<Update/>}/>
            <Route path="/articles/:id" element={<ArticleDetails/>}/>
            
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
