import {Login, CommonMenu} from "./routerConfig.jsx";

const Router = ReactRouter.BrowserRouter;
const Route = ReactRouter.Route;
const Link = ReactRouter.Link;
const Redirect = ReactRouter.Redirect;
const withRouter = ReactRouter.withRouter; 

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

export default class RouterConfig extends React.Component {
  constructor(props){
    super(props);
    this.commonmenu = withRouter(({location})=>{
      return location.pathname === '/login' ? null : <div><CommonMenu /></div>
    });
    
  }
  render(){
    console.log("<Router> Rendering...");
    return (
      <Router>
        <div>
          <this.commonmenu />
          <Route exact path="/" render={()=>(<Redirect to="/login" />)}/>
          <Route path="/login" component={Login}/>
          <Route path="/m" component={Topics}/>
        </div>
      </Router>
    )
  }
}