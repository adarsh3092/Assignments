var React = require('react');
var MsgList = require('./MsgList');
var Inbox = React.createClass({
  render: function() {

   return (
<div className="Inbox">
<MsgList msg={this.props.msg} />
</div>
    );
  }
});

module.exports = Inbox;
