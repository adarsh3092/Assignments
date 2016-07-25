var React = require('react');
var Movie = require('./Movie');

var MovieList = React.createClass({
  render: function() {
var movieData=this.props.data1.map(function(movie){
  return(
<Movie movie={movie} key={movie.imdbID}>
  </Movie>
);
});
   return (
<div className="MovieList">
{movieData}
</div>
    );
  }
});

module.exports = MovieList;
