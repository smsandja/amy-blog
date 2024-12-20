import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contact from './Contact';
import PostDetails from './PostDetails';
import CreatePost from './CreatePost';
import NotFound from './NotFound';

function App() {
  
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/posts">
            <CreatePost />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/posts/:id">
            <PostDetails />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        
      </div>
    </div>
    </Router>
  );
}

export default App;
