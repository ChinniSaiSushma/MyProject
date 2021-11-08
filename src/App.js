import logo from './logo.svg';
import './App.css';
import Pulse from './pages/Pulse';
import { Switch,Route, Link,NavLink } from 'react-router-dom';
import Home from './pages/Home';
import { useRef, useState ,React} from 'react'
import Illegal from './pages/Illegal';
import Tasks from './pages/Tasks';
import {useLocation,useHistory ,Redirect} from 'react-router-dom'
import PageNotFound from './pages/PageNotFound';
import DSU from './pages/DSU';
import Messages from './pages/Messages';
import More from './pages/More';

function App(props) {

  let location=useLocation()
  let history=useHistory()
  // console.log(location)
  console.log(useRef())
  // console.log(React.createRef())
  const[isLoggedIn,setIsLoggedIn]=useState(false)

  const changeState = (val) =>
  {
    setIsLoggedIn(val,()=>
    {
      
    setIsLoggedIn(isLoggedIn(val))
   
    })
  }
 
  return (
   <div>
     

<nav hidden={(location.pathname == "/" || location.pathname == "/illegal")  || ( location.pathname !== "/dsu" && location.pathname !== "/msg" && location.pathname !== "/more" &&location.pathname !== "/home" && location.pathname !== "/tasks")}>

<ul>
 <img className="logo" src="./assets/images/logo.png" alt="no img" />
<li><NavLink to="/home" activeClassName="active" className="linkColor">Home</NavLink></li>
<li><NavLink to="/dsu" activeClassName="active" className="linkColor">Daily Status Update</NavLink></li>
<li><NavLink to="/tasks" activeClassName="active" className="linkColor">Tasks</NavLink></li>
<li><NavLink to="/msg" activeClassName="active" className="linkColor">Messages</NavLink></li>
<li><NavLink to="/more" activeClassName="active" className="linkColor">More</NavLink></li>
<Link  className="logOut" to="/"> LogOut </Link>
</ul>

</nav>


<Switch>
 
  <Route path="/" exact component={()=><Pulse state={changeState}/>}/>
  <Route path="/home" component={()=><Home loggedIn={isLoggedIn}/>}/>
  <Route path="/dsu" component={()=><DSU loggedIn={isLoggedIn}/>}/>
  <Route path="/tasks" component={()=><Tasks loggedIn={isLoggedIn}/>}/>
  <Route path="/msg" component={()=><Messages loggedIn={isLoggedIn}/>}/>
  <Route path="/more" component={()=><More loggedIn={isLoggedIn}/>}/>
  <Route path="/illegal" component={()=><Illegal loggedIn={isLoggedIn}/>}/>
  <Route  component={PageNotFound}/>
  {/* <Redirect to="/"/> */}
  
</Switch>






   </div>
  );
}

export default App;
