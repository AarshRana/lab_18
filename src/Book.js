import React from 'react'
function Book(props) {
    return (
    <h1>I'm a book {props.title}</h1>
    );
}
export default Book;





// import React from 'react'
// class Book extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       cost: "$100",
//       color: "red",
//     };
//   }
//   changeColor = () => {
//     this.setState({color: "blue"});
//   }

// function changeCost() {
//     return 
// }
// render() {
//     return (
//       <div>
//         <p>
//           The book is having a {this.state.color} color and costs {this.state.cost}.
//         </p>
//         <button type="button" onClick={this.changeColor}>Change color</button>
//       </div>
//     );
//   }
// }

// export default Book;
