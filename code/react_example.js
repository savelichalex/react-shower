var Timer = React.createClass({

  getInitialState: function() {
    return {secondsElapsed: 0};
  },

  render: function() {
    return (
      <div>Seconds Elapsed: {this.state.secondsElapsed}</div>
    );
  }
});
