var React = require('react');
var MovieForm = require('./MovieForm');
var MovieList = require('./MovieList');
var MovieDataBox = require('./MovieDataBox');



var MovieBox = React.createClass({
  getInitialState:function(){
      return({data1:[]});
    },
  submitmovie:function(data)
  {
    $.ajax({
            url: 'http://www.omdbapi.com/?s='+data.Title,
            dataType: 'json',
            cache: false,
            success: function(data) {
              this.setState({data1:data.Search});
           }.bind(this),
            error: function(xhr, status, err) {
              console.error(this.props.url, status, err.toString());
            }.bind(this)
          });

    },
    render: function() {
      return (
  <div className="MovieBox">

  
  <MovieForm  handlingSubmitTitle={this.submitmovie}/>

  <MovieList data1={this.state.data1}/>

        </div>
      );
  }
});

module.exports = MovieBox;
