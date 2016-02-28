var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var Home = require('./components/home');
var Main = require('./components/main');
// var Login = require('./components/login');
// var Signup = require('./components/signup');
// var Member = require('./components/member');

module.exports = (
  <Router history={ReactRouter.hashHistory}>
    <Route path="/" component={Home}>
      <IndexRoute component={Main} />
      <Route path="/:title" component={Main} />
    {/* <Route path="login" component={Login} /> */}
    {/* <Route path="signup" component={Signup} /> */}
    </Route>
    {/* <Route path="/member" component={Member}> */}
    {/* </Route> */}
  </Router>
);
