var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router');
var Link = Router.Link

module.exports = React.createClass({
  render: function() {
    return <div className="jumbotron">
      <h1>Hello World</h1>
      <p className="lead">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit tempus elit. Nulla facilisi. Etiam eu dictum nunc. Suspendisse potenti. Nam at pulvinar justo. Aliquam erat volutpat. Donec sem massa, varius et libero eget, tristique gravida quam. In mattis fermentum massa, pretium dignissim velit finibus ut. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.
      </p>
      <p>
        <Link className="btn btn-lg btn-success" to="/signup" role="button">
          Sign Up
        </Link>
      </p>
    </div> 
  }
});
