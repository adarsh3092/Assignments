var React=require('React');
var base64url=require('base64url');

var ModalUpdate=React.createClass({
  getInitialState:function(){

      return(
        {mid:this.props.msg.id,
        mdata:this.props.msg.raw,
        msnippet:this.props.msg.snippet
      }

      );
    },
    componentDidMount:function(){
    var html = atob(this.props.msg.raw.replace(/-/g, '+').replace(/_/g, '/'));
//var html=base64url.decode(this.props.msg.raw);
            console.log("Msg_text.."+html);
              this.myBodyData(html);
    },
    myBodyData:function(html){
 document.getElementById("bodydata").innerHTML = html;

    },
    insertData:function(e){   //ajax call
    e.preventDefault();

			 $.ajax({
    url:"http://localhost:8080/msg/",
    type:"POST",
    datatype:"json",
    data:this.state,
    success:function(data)
    {
    console.log(data);
    }.bind(this),
    error:function(err){
      console.error(err.toString());
    }.bind(this)
  });
  console.log("Insert");
  alert("Mail got Inserted in DataBase!!!")

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
    							<h4 className="modal-title" id="myModalLabel">Mail-Box</h4>
    						</div>
    						<div className="modal-body" >
                <div className="form-group" id="bodydata">
                  hello
    						</div>
                <div className="modal-footer">
                <form role="form" onSubmit={this.insertData}>

                               <button type="button" className="btn btn-default add btn-close" data-dismiss="modal" onClick={this.props.handleHideModal}>
                                 Close
                               </button>
                               <input type="submit" className="btn btn-success add" value="ADD" name="Title"/>
                    </form>
                      </div>
                </div>
    					</div>
    				</div>
    			</div>
  );
}
});

module.exports=ModalUpdate;
