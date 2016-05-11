var React = require('react');
var Clock = require('Clock');

var Counter = (props) => {
  return (
    <div>
      <Clock totalSeconds={129}/>
    </div>
  )
};

module.exports = Counter;
