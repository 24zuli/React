
import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter as Router , Route,Routes as Switch, Link} from 'react-router-dom';
import Home from './Home';
import About from'./About';
import SimpleCounter from'./SimpleCounter';
import CounterLimit from './CounterLimit';
import CounterHooks from'./CounterHooks';


/*function App() {
  return (
    <div>
    <h1>Welcome to React</h1>
    <Header/>
    <Footer/>
    </div>
  );
}
function Header() {
  return (
    <h1>Welcome to Header</h1>
    
  );
}
function Footer() {
  return (
    <h1>Welcome to Footer</h1>
  );
}
  */
//ReactDom.render(<App/>,document.getElementById('root'));

/*class App extends React.Component{
  /*
  render(){
    return(
      <div>
        <h1>Hello1</h1>
        {this.props.firstname}
        {this.props.secondname}
      </div>
    )
  }*/

    class App extends React.Component {
      constructor() {
        super();
        this.state = {
          count: 0,
        };
      }
    
      render() {
        return (
          <div>
            <Router>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/SimpleCounter">SimpleCounter</Link>
                </li>
                <li>
                  <Link to="/CounterLimit">CounterLimit</Link>
                </li>
                <li>
                  <Link to="/CounterHooks">CounterHooks</Link>
                </li>
              </ul>
              <Switch>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/SimpleCounter" element={<SimpleCounter />} />
                <Route path="/CounterLimit" element={<CounterLimit />} />
                <Route path="/CounterHooks" element={<CounterHooks />} />
              </Switch>
            </Router>
    
            
          </div>
         
        );
      }
    }
    
    export default App;
      
      
   

  /*
function App(props){
  return (
    <div>
    <Router>
    <Link to ='./SimpleCounter'>SimpleCounter</Link>
    <Switch>
    <Route path='/SimpleCounter' component={SimpleCounter}/>
    </Switch>
    </Router>
    </div>
  );
  }*/


