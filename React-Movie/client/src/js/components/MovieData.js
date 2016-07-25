var React = require('react');
var ModalUpdate=require('./ModalUpdate');
var MovieData = React.createClass({
  deleteMovieData:function(e){
    console.log(e.target.value);
    alert(e.target.value);
    $.ajax({
            url: 'http://localhost:8080/movie/delete/'+e.target.value,
            dataType: 'json',
            cache: false,
            type:'DELETE',
            success: function(data) {
                alert("Deleted sucessfully!!!");
           }.bind(this),
            error: function(xhr, status, err) {
              console.error(this.props.url, status, err.toString());
            }.bind(this)
          });
  },getInitialState:function(){

    return({showModal:false});
  },
  handleShowModal:function(){
    console.log("show modal");
    this.setState({showModal:true});
  },
  handleHideModal:function(){
      this.setState({showModal:false});
  },
  render: function() {
    return (
<div className="MovieData well">
<div className="container-fluid">
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
<td></td><td className="info">{this.props.movie.imdbRating}</td>
</tr>
<tr><td></td>
<td><button type="button" className="btn btn-danger add"
name="Title"value={this.props.movie.Title}
onClick={this.deleteMovieData}>DELETE</button></td>
<td><a id="modal-519421" href="#modal-container-519421" role="button"
 className="btn btn-primary add" data-toggle="modal" onMouseDown={this.handleShowModal}>UPDATE</a>
 {this.state.showModal?<ModalUpdate movie={this.props.movie} handleHideModal={this.handleHideModal}/>:null}
 </td>
 </tr>
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


module.exports = MovieData;
