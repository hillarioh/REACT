/* State is one of the most powerful features of components 
in React. It allows you to track important data in your app 
and render a UI in response to changes in this data. If your 
data changes, your UI will change. React uses what is called 
a virtual DOM, to keep track of changes behind the scenes. 
When state data updates, it triggers a re-render of the 
components using that data - including child components 
that received the data as a prop. React updates the actual 
DOM, but only where necessary. This means you don't have 
to worry about changing the DOM. You simply declare what 
the UI should look like.*/

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};
