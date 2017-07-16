import {Login} from "./routerConfig.jsx";

const Router = ReactRouter.BrowserRouter;
const Route = ReactRouter.Route;
const Link = ReactRouter.Link;
const Redirect = ReactRouter.Redirect;


/*const Home = () => (
  <div>
    <h2>Home</h2>
    <Bundle load={loadSomething}>
      {(About) => <About />}
    </Bundle>
  </div>
)
const Dashboard = (props) => (
  <Bundle load={loadSomething}>
    {(Dashboard) => <Dashboard {...props}/>}
  </Bundle>
)
const About = () => (
  <div>
    <h2>About</h2>
  </div>
)*/

const Topic = ({ match }) => { 
console.log({ match })
  return (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)}

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>
  
    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)
/* <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
        <li><Link to="/m1">M1</Link></li>
        <li><Link to="/m11">M11</Link></li>
        <li><Link to="/m111">M111</Link></li>
</ul>*/

/*
const BasicExample = () => (
  <Router>
    <div>
      <Route exact path="/" component={Login}/>
      
    </div>
  </Router>
)
export default BasicExample*/

export default class RouterConfig extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <Router>
        <div>
          <Route exact path="/" render={()=>(<Redirect to="/login" />)}/>
          <Route path="/login" component={Login}/>
          <Route path="/m" component={Topics}/>
        </div>
      </Router>
    )
  }
}