import React from 'react'

class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964
    };
  }
  changeColor = () => {
    this.setState({color: "blue"});
  }
render() {
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <p>
          It is a {this.state.color}
          {this.state.model}
          from {this.state.year}.
        </p>
        <button
          type="button"
          onClick={this.changeColor}
          >Change color</button>
        </div>
      );
    }
  }
  
  export default Car;

// import React from 'react'

// class Car extends React.Component {
//   constructor() {
//     super();
//     this.state = {color: "blue", make: "Suzuki"};
//   }
//   render() {
//     return <h2>I am a {this.state.color} Car of {this.state.make} company!</h2>;
//   }
// }

// export default Car;

// import React from 'react'

// class Car extends React.Component {
//   constructor() {
//     super();
//     this.state = {color: "blue"};
//   }
//   render() {
//     return <h2>I am a {this.state.color} Car!</h2>;
//   }
// }
// export default Car;

// import React from 'react';
// function Car(props) {
//     return <h2>Hi, I am a new {props.color} Car!</h2>;
//   }



// export default Car;