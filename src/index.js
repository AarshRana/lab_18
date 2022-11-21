import React from 'react';
import ReactDOM from 'react-dom/client';
import './mysass.scss';

const Header = () => {
  return (
    <>
      <h1>Hello Style!</h1>
      <p>Add a little style!.</p>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header />);



// import React from 'react';
// import Book from './Book.js'
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import Library from './Library';
// import reportWebVitals from './reportWebVitals';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<new/>)

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Library/>)

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Book/>)

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Book title='Atomic Habits'/>)













// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './App.css';

// const Header = () => {
//   const myStyle = {
//     color: "white",
//     backgroundColor: "DodgerBlue",
//     padding: "10px",
//     fontFamily: "Sans-Serif"
//   };
//   return (
//     <>
//       <h1 className="bigblue">Hello Style!</h1>
//       <p>Add a little style!</p>
//     </>
//   );
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Header />);


// import React from 'react';
// import ReactDOM from 'react-dom/client';
// const Header = () => {
//   const myStyle = {
//     color: "white",
//     backgroundColor: "DodgerBlue",
//     padding: "10px",
//     fontFamily: "Sans-Serif"
//   };
//   return (
//     <>
//       <h1 style={myStyle}>Hello Style!</h1>
//       <p>Add a little style!</p>
//     </>
//   );
// }


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Header />);


// import React from 'react';
// import ReactDOM from 'react-dom/client';


// function CSS_test() {
//    return (
//     <>
//       <h1 style={{color: "red"}}>Hello Style!</h1>
//       <p>Add a little style!</p>
//     </>
//   );
// }


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<CSS_test />);


// import React from 'react';
// import ReactDOM from 'react-dom/client';

// function MissedGoal() {
//   return <h1>MISSED!</h1>;
// }

// function MadeGoal() {
//   return <h1>Goal!</h1>;
// }

// function Goal(props) {
//   const isGoal = props.isGoal;
//   if (isGoal===true) {
//     return <MadeGoal/>;
//   }
//   return <MissedGoal/>;
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Goal isGoal={true} />);



// import React from 'react';
// import ReactDOM from 'react-dom/client';

// function Football() {
//   const shoot = (a, b) => {
//     alert(b.type);
//     alert(a);
// }
//   return (
//     <button onClick={(event) => shoot("Goal!", event)}>Take the shot!</button>
//   );
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Football />);

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// //import './App.css';
// import App from './App.js' 
// import Book from './Book.js'
// import Library from './Library.js'

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//     <Library />
// )
// root.render(
    // <App/>
//     <div className="App">
//     <table>
//     <tr>
//       <th>Col1</th>
//       <th>Col2</th>
//       <th>Col3</th>
//     </tr>
//     <tr>
//       <td>Row1</td>
//       <td>Row2</td>
//       <td>Row3</td>
//     </tr>
//     <tr>
//       <td>Row1</td>
//       <td>Row2</td>
//       <td>Row3</td>
//     </tr>
//     <tr>
//       <td>Row1</td>
//       <td>Row2</td>
//       <td>Row3</td>
//     </tr>
//     <tr>
//       <td>Row1</td>
//       <td>Row2</td>
//       <td>Row3</td>
//     </tr>
//     </table>
//   </div>
// );

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// //import './App.css'; 
// //import Car from './Car.js';

// function Car() {
//   return <h2>I am a Car!</h2>;
// }
// function Garage() {
//   return (
//     <>
//       <h1>Who lives in my Garage?</h1>
//       <Car />
//     </>
//   );
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Garage />);


// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './App.css'; 
// import Car from './Car.js';



// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Car color="red"/>);

// import React from 'react';
// function Car() {
//     return <h2>Hi, I am a new Car!</h2>;
//   }

// import React from 'react';

// class Car extends React.Component {
//   render() {
//     return <h2>Hi, I am a Car!</h2>;
// }
// }
// export default Car;



//export default Car;
// import React from 'react';
// import ReactDOM from 'react-dom/client';

// function Car() {
//   return <h2>Hi, I am a Maruti Car!</h2>;
// }


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Car />);
// import React from 'react';
// import ReactDOM from 'react-dom/client';

// class Car extends React.Component {
//   render() {
//     return <h2>Hi, I am a Car!</h2>;
//   }
// }




// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Car />);
// import React from 'react';
// import ReactDOM from 'react-dom/client';

// const myelement = 
//   <table>
//     <tr>
//       <th>Name</th>
//     </tr>
//     <tr>
//       <td>John</td>
//     </tr>
//     <tr>
//       <td>Elsa</td>
//     </tr>
//   </table>
  


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myelement);
// import React from 'react';
// import ReactDOM from 'react-dom/client';

// const myFirstElement = <h1>Hello React!</h1>

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myFirstElement);
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
