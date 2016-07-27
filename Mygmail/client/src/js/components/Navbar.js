var React = require('react');
var Navbar=React.createClass({
render:function(){
return(
  <div className="Navbar">
  <nav className="navbar navbar-default">
  <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand" href="#">MYGMAILBOX</a>
    </div>
    <ul className="nav navbar-nav ">
      <li className="active"><a href="#">MailBox</a></li>
      <li><a href="#">Sent-Mail</a></li>
      <li><a href="#">About Us </a></li>
    </ul>
  </div>
</nav>
 </div>);

}

});
module.exports=Navbar;
