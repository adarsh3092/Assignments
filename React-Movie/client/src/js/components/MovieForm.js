var React = require('react');
var MovieList = require('./MovieList');

var MovieForm = React.createClass({

  getInitialState :function(){
  return({Title:'',movieDb:[]});
  },
    titleFinding:function(e){
      this.setState({Title:e.target.value});
    },
    submitFormHeandling:function(e){
      e.preventDefault();
      this.props.handlingSubmitTitle({Title:this.state.Title});
    },
    myData:function(e){
      alert("jj");
      e.preventDefault();
      $.ajax({
        url: 'http://localhost:8080/movie/show',
        dataType: 'json',
        cache: false,
        success: function(data) {
          console.log(data);


       }.bind(this),
        error: function(xhr, status, err) {
          console.error(this.props.url, status, err.toString());
        }.bind(this)
      });

    },
    render: function() {
      return (
  <div className="MovieForm container well ">
  <form role="form" onSubmit={this.submitFormHeandling}>
  <div className="form-group">
  <input type="text" id="id1"className="form-control search-input"  value={this.state.Title}
  onChange={this.titleFinding}
   placeholder="Enter Search movie Title" />
  <input  type="submit" value="Search" className="btn btn-primary form-control btn-search"/>
  </div>
  </form>
        </div>
      );
    }

});

module.exports = MovieForm;
