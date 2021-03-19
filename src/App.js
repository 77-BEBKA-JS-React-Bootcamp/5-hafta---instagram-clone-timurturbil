import Dashboard from "./component/Dashboard/DashBoard";
import "./styles.scss";
import PhotoPage from './component/PhotoPage/PhotoPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";
export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/Image" component={PhotoPage}>
          </Route>
          <Route exact path="/">
          <Dashboard />
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}
