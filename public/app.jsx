/* Static componenet that displays message */
var GreeterMessage = React.createClass({
  render: function() {
    var name = this.props.name;
    var message = this.props.message;
    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{message}</p>
      </div>
    );
  }
});

/* Static componenet that displays form */
/* Remember default of form submit button is to refresh browswer. e.preventDefault stops that */
var GreeterForm = React.createClass({
  onFormSubmit: function(e) {
    e.preventDefault();
    var name = this.refs.name.value;

    if (name.length > 0) {
      this.refs.name.value = "";
      this.props.onNewName(name);
    }
  },
  render: function() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type="text" ref="name"></input>
        <button>Set Name</button>
      </form>
    )
  }
});

{/* using React library */}
{/* most common React method */}
{/* takes options object as argument which defines behaviour of component*/}

{/* render method with render property = to annonymous funciton that doesn't take any aruguments */}
{/* this is all you need to define. no other functions or methods needed */}
{/* render method now expects some jsx code that gets rendered to the browswer */}
{/* render method now expects some jsx code that gets rendered to the browswer */}
var Greeter = React.createClass({
  getDefaultProps: function() {
    /* return object or properties {} */
    return {
      name: 'React',
      message: 'Default Message Prop'
    };
  },

  getInitialState: function() {
    return {
      name: this.props.name
    };
  },

  handleNewName: function(name) {
    this.setState({
      name: name /* name state = name variable */
    });
  },

  render: function() {
  var name = this.state.name;
  var message = this.props.message;
    return (
      <div>
          <GreeterMessage name={name} message={message}/>

          <GreeterForm onNewName={this.handleNewName}/>

      </div>
    );
  }
});

/* without JSX
 return React.createElement(
   'h1',
   null,
   'hello react.createElement'
 )
*/

{/* passes ReactDOM.render something to render and the location to render it to */}
{/* most commont React Dom Method is .render */}

var firstName = "Himashi";

    ReactDOM.render(
      <Greeter name={firstName} message="I am a cool message prop"/>,
      document.getElementById('app')
    );
