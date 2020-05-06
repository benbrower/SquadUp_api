import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import Account from "./Account";
import Friends from "./Friends";

function User() {
  let match = useRouteMatch();
  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
        that build on the /topics URL path. You can think of the
        2nd <Route> here as an "index" page for all topics, or
        the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:id`}>
          <Friends />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
    // <div>
    //   <h2>Users</h2>
    //   <Link to={`${match.url}/userId`}>Example topic</Link>
    //   <Route path={`${match.path}/:userId`} component={Account} />
    //   {/* <h2>Topics</h2>

    //   <ul>
    //     <li>
    //       <Link to={`${match.url}/components`}>Components</Link>
    //     </li>
    //     <li>
    //       <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
    //     </li>
    //   </ul> */}
    // </div>
  );
}
// let match = useRouteMatch();

// class User extends Component {
//   render() {
//     return <div>User: {this.props.targetUser.username}</div>;
//   }
// }
export default User;
