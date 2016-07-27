var React = require('react');
var Msg = require('./Msg');

var MsgList = React.createClass({
  render: function() {
var tableData=this.props.msg.map(function(data){
  return(
<Msg msg={data} key={data.snippet}>
  </Msg>
);
});
   return (
<div className="MsgList">
{tableData}
</div>
    );
  }
});
module.exports=MsgList;
