/* React components have several special methods that 
provide opportunities to perform actions at specific 
points in the lifecycle of a component. These are 
called lifecycle methods, or lifecycle hooks, and 
allow you to catch components at certain points in 
time. This can be before they are rendered, before 
they update, before they receive props, before they 
unmount, and so on. Here is a list of some of the main 
lifecycle methods: componentWillMount() componentDidMount() shouldComponentUpdate() componentDidUpdate() componentWillUnmount(). 
The next several lessons will cover some of the basic 
use cases for these lifecycle methods.*/

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
  console.log("puff");
  }
  render() {
    return <div />
  }
};
