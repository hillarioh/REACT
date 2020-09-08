/* A stateless functional component is any function 
you write which accepts props and returns JSX. 
A stateless component, on the other hand, is a class 
that extends React.Component, but does not use internal 
state (covered in the next challenge). 
Finally, a stateful component is a class component that 
does maintain its own internal state. You may see 
stateful components referred to simply as components or 
React components.*/

class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Camper/>
      </div>
    );
  }
};
// change code below this line

class Camper extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return <p>{this.props.name}</p>
  }


}

Camper.defaultProps = {
  name: 'CamperBot'
}

Camper.propTypes = {
  name: PropTypes.string.isRequired
}
