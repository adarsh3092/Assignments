var React = require('react');
var Home=React.createClass({
render:function(){
return(
  <div className="Home">
  <div className="container-fluid">
  <div className="row">
  <div id="col-md-12"className="col-md-12">
    <div className="carousel slide" id="carousel-40908">
      <ol className="carousel-indicators">
        <li className="active" data-slide-to="0" data-target="#carousel-40908">
        </li>
        <li data-slide-to="1" data-target="#carousel-40908">
        </li>
        <li data-slide-to="2" data-target="#carousel-40908">
        </li>
      </ol>
      <div className="carousel-inner">
        <div className="item active">
          <img alt="Carousel Bootstrap First" src="http://lorempixel.com/output/sports-q-c-1600-500-1.jpg"/>
          <div className="carousel-caption">
            <h4>
              First Thumbnail label
            </h4>
            <p>
              Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec
              id elit non mi porta gravida at eget metus. Nullam id dolor id nibh
              ultricies vehicula ut id elit.
            </p>
            </div>
          </div>
        <div className="item">
          <img alt="Carousel Bootstrap Second" src="http://lorempixel.com/output/sports-q-c-1600-500-2.jpg" />
          <div className="carousel-caption">
            <h4>
              Second Thumbnail label
            </h4>
            <p>
              Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
            </p>
          </div>
        </div>
        <div className="item">
          <img alt="Carousel Bootstrap Third" src="http://lorempixel.com/output/sports-q-c-1600-500-3.jpg" />
          <div className="carousel-caption">
            <h4>
              Third Thumbnail label
            </h4>
            <p>
              Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
            </p>
          </div>
      </div>
      <a className="left carousel-control" href="#carousel-40908" data-slide="prev">
      <span className="glyphicon glyphicon-chevron-left"></span></a>
      <a className="right carousel-control" href="#carousel-40908" data-slide="next">
      <span className="glyphicon glyphicon-chevron-right"></span></a>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
);
}
});
module.exports=Home;
