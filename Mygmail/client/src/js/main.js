var React = require('react');
var ReactDOM = require('react-dom');
var Inbox=require('./components/Inbox');
var msg=require('./msg.json');
var Navbar=require('./components/Navbar');
var Main=React.createClass({
render:function(){
  //console.log(JSON.stringify(msg));
return(<div className="Main">
<Navbar />
        <Inbox msg={this.props.msg} />
</div>

          );
            }
          });
ReactDOM.render(<Main msg={msg}/>
,document.getElementById('app'));
