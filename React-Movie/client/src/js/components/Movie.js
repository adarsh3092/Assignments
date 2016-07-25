var React = require('react');

var Movie = React.createClass({
  addMyMovie:function(e){
    alert("Do you want to add Movie "+e.target.value+"?");
    $.ajax({
            url: 'http://localhost:8080/movie/insert/'+e.target.value,
            dataType: 'json',
            cache: false,
            success: function(data) {
                alert("Movie sucessfully added");
           }.bind(this),
            error: function(xhr, status, err) {
              console.error(this.props.url, status, err.toString());
            }.bind(this)
          });

  },
  render: function() {
    return (
<div className="Movie well"><div className="container-fluid">
  <div className="row">
    <div className="col-md-4">
    <img src={this.props.movie.Poster}/>
    </div>
    <div className="col-md-8">
    <div className="table-responsive">
    <table className="table">
    <thead>
<tr className="info"><td className="danger">Title</td>
<td></td><td className="info">{this.props.movie.Title}</td></tr>
    </thead>
<tbody>
<tr className="success">
<td>Year</td>
<td ></td><td>{this.props.movie.Year}</td>
</tr>
<tr className="info">
<td className="danger">Rating</td>
<td></td><td className="info">{this.props.movie.Title}</td>
</tr>
<tr><td></td>
<td><button type="button" name="Title" value={this.props.movie.imdbRating}
onClick={this.addMyMovie}
className="btn btn-primary add">ADD</button></td>
<td><button type="button" className="btn btn-success add">VIEW</button></td></tr>
</tbody>
    </table>
    </div>
  </div>

  </div>
</div>
     </div>
    );
  }
});


module.exports = Movie;
