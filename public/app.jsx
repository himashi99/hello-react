/* Static componenet that displays message */
var GreeterMessage = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Some h1</h1>
        <p>Some paragraph</p>
      </div>
    );
  }
});

/* Static componenet that displays form */
var GreeterForm = React.createClass({
  render: function() {
    return (
      <form onSubmit={this.onButtonClick}>
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
  /* function gets fired when user clicks submit */
  /* e.preventDefault stops page from refreshing */
  onButtonClick: function(e){
    e.preventDefault();
    console.log("hi");
    var nameRef = this.refs.name
    var name = nameRef.value;
    nameRef.value="";

    /* if empty string is inputted, state does not get updated */
    if (typeof name === 'string' && name.length > 0) {
      this.setState({
        name: name /* name state = name variable */
      });
    }
  },

  getInitialState: function() {
    return {
      name: this.props.name
    };
  },
  render: function() {
  var name = this.state.name;
  var message = this.props.message;
    return (
      <div>
          <h1>Hello {name}!</h1>
          <p>{message + '!!!'}</p>

          <GreeterMessage/>

          {/* calls the function */}
          <form>
            <input type="text" ref="name"></input>
            <button>Set Name</button>
          </form>

          <GreeterForm/>

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
