import React from "react";
import "./App.css";
import CarSelector from "./components/CarSelector";
import { ChangeUsername } from "./components/ChangeUsername";
import { Register } from "./components/Register";
import { SmsApp } from "./components/SmsApp";

// 🚀 Class Based Component 🚀
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <React.Fragment>
//         <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
//           <div className="conatainer">
//             <a href="/" className="navbar-brans text-white">
//               React Hooks
//             </a>
//           </div>
//         </nav>
//       </React.Fragment>
//     );
//   }
// }

//  🚀🚀🚀🚀  Functional Component  🚀🚀🚀🚀  //

const App = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-dark bg-secondary navbar-expand-sm">
        <div className="container">
          <a href="/" className="navbar-brans text-white h3">
            React Hooks With Form Binding Naresh
          </a>
          <ul className="ml-auto font-weight-bold text-whitenpm start">
            <li>Login</li>
          </ul>
        </div>
      </nav>

      <ChangeUsername />
      <CarSelector />
      <SmsApp />
      <Register />

      <div style={{ marginBottom: 150 }}></div>
    </React.Fragment>
  );
};

export default App;
