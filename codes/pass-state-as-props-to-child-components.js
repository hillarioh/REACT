/* maybe you have an App component that renders a Navbar, 
among other components. In your App, you have state that 
contains a lot of user information, but the Navbar only 
needs access to the user's username so it can display it. 
You pass that piece of state to the Navbar component as a prop.*/

class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'CamperBot'
    }
  }
  render() {
    return (
       <div>
         <Navbar name={this.state.name} />
       </div>
    );
  }
};

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div>
      <h1>Hello, my name is: {this.props.name} </h1>
    </div>
    );
  }
};
