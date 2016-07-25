var React = require('react');
var {Link} = require('react-router');
var Navbar=React.createClass({
render:function(){
return(
  <div>
  <div className="navbar navbar-fixed-top navbar-inverse">
     <div className="container-fluid">
         <span className="icon-bar"></span>
         <span className="icon-bar"></span>
         <span className="icon-bar"></span>
       <div className="nav-collapse collapse navbar-responsive-collapse">
         <ul className="nav navbar-nav">
         <li className="active"><Link to="/">Home</Link></li>
         <li className=""><Link to="/moviebox">Movies</Link></li>
         <li className=""><Link to="/moviedatabox">Add Movies</Link></li>
         </ul>
       </div>
     </div>
   </div>
 </div>);

}

});
module.exports=Navbar;
