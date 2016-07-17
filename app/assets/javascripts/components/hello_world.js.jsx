var HelloWorld = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Hello {this.props.title}!</h1>
      </div>
    );
  }
});
