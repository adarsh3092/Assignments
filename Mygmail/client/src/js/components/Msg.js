      var React = require('react');
      var ModalUpdate=require('./ModalUpdate');

      var Msg = React.createClass({
        getInitialState:function(){
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

          return(<div className="Msg">
          <div className="row row1">
          <div className="col-sm-12">
          <h4>Message-Id:  {this.props.msg.id}</h4>
        <h4>Snippet:</h4><p>{this.props.msg.snippet}
        <a id="modal-519421" href="#modal-container-519421" role="button"
        data-toggle="modal" onMouseDown={this.handleShowModal}>
    <h4>  Read More....</h4></a>
        </p>



  </div>
  </div>

  {this.state.showModal?<ModalUpdate msg={this.props.msg} handleHideModal={this.handleHideModal}/>:null}

</div>);
        }

       });
       module.exports=Msg;
