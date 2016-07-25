var React = require('react');
var MovieDataList = require('./MovieDataList');
var MovieDataBox = React.createClass({
  getInitialState:function(){
      return({data1:[]});
    },
      componentWillMount:function(){
        //alert("helllll");
        $.ajax({
          url: 'http://localhost:8080/movie/show',
          dataType: 'json',
          cache: false,
          success: function(data) {
            this.setState({data1:data});
         }.bind(this),
          error: function(xhr, status, err) {
            console.error(this.props.url, status, err.toString());
          }.bind(this)
        });
      },
        render: function() {
        return (
    <div className="MovieDataBox">
<MovieDataList data1={this.state.data1} />
          </div>
        );
      }
});

module.exports = MovieDataBox;
