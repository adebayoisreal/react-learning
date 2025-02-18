
import Navbar from './Navbar';
import Home from './Home';
import {Switch,BrowserRouter as Router,Route} from "react-router-dom";
import Create from './create';
import BlogDetail from './BlogDetails';
function App() {
  return (
   
    <Router>
    <div className="App">
      <Navbar/>

       <div className='content'> 
       <Switch>
        <Route exact path='/'>
        <Home/>
        </Route>
        <Route path="/create">
        <Create/>
        </Route>
        <Route path="/blogs/:id">
        <BlogDetail/>
        </Route>
       </Switch>
       </div>
    </div>
    </Router>
  );
}

export default App;
