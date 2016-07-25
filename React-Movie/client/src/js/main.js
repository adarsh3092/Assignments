var React = require('react');
var ReactDOM = require('react-dom');
var React = require('react');
var {render} = require('react-dom');
var {browserHistory, Route, Router, IndexRoute} =require('react-router');
var MovieDataBox = require('./components/MovieDataBox');
var MovieBox = require('./components/MovieBox');
var Navbar=require('./components/Navbar');
var Home=require('./components/Home');
var Main=React.createClass({
render:function(){
return(<div>
        <Navbar />
        {this.props.children}
      </div>
    );
}
});
ReactDOM.render
(<Router history={browserHistory}>
  <Route path="/" component={Main}>
    <IndexRoute component={Home} />
    <Route path="moviebox" component={MovieBox} />
    <Route path="moviedatabox" component={MovieDataBox} />
    </Route>
  </Router>
  ,document.getElementById('app'));
