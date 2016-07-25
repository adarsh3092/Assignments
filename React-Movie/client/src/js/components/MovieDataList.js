var React = require('react');
var MovieData = require('./MovieData');

var MovieDataList = React.createClass({
  render: function() {
var movieData=this.props.data1.map(function(movie){
  return(
<MovieData movie={movie} key={movie.imdbID}>
  </MovieData>
);
});
   return (
<div className="MovieDataList">
{movieData}
</div>
    );
  }
});

module.exports = MovieDataList;
