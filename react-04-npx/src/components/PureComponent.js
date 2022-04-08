import React from 'react';
class PureComponentReact extends React.PureComponentReact {
   
    render() {
      return <p>{this.state.someKey}</p>;
    }
  }
  
  export default PureComponentReact;
  