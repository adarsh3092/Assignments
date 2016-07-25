var React=require('React');
var ModalUpdate=React.createClass({
  getInitialState:function(){
    return({title:this.props.movie.Title,year:''});
  },
  onUpdatebutton:function(e){
    e.preventDefault();
    this.setState({year:e.target.value});
    console.log(this.state.year);
  },
  handlingUpdate:function(e){   //ajax call
    e.preventDefault();

			 $.ajax({
    url:"http://localhost:8080/movie/update/"+this.props.movie.Title+"/"+this.state.year,
    type:"PUT",
    datatype:"json",
    success:function(data)
    {

    console.log(data);
    }.bind(this),
    error:function(err){
      console.error(err.toString());
    }.bind(this)

  });
  console.log("Updated");
  alert("Movie got Updated in DataBase!!!")

  },
render:function(){
  return(
    <div className="modal fade" id="modal-container-519421" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    				<div className="modal-dialog">
    					<div className="modal-content">
    						<div className="modal-header">
    							<button type="button" className="close" data-dismiss="modal"
                  aria-hidden="true" onClick={this.props.handleHideModal}>x
    							</button>
    							<h4 className="modal-title" id="myModalLabel">Update Movie</h4>
    						</div>
    						<div className="modal-body" >
                <form role="form" onSubmit={this.handlingUpdate}>
                              <div className="form-group">
                              <input type="text" id="id1"className="form-control update-input-input"  value={this.props.movie.Title}
                               placeholder=" Movie Title" /><br/>
                               <input type="text" id="id1"className="form-control update-input-input" onChange={this.onUpdatebutton}
                               name="year" value={this.state.year}placeholder="Enter  Movie Year" /><br/>
                               <button type="button" className="btn btn-default add btn-close" data-dismiss="modal" onClick={this.props.handleHideModal}>
                                 Close
                               </button>
                               <input type="submit" className="btn btn-success add" value="Save Changes" name="Title"/></div>
                    </form>
    						</div>
    					</div>
    				</div>
    			</div>
  );
}
});

module.exports=ModalUpdate;
