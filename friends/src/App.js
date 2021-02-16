import "./App.css";
//Components
import Nav from "./components/Nav";
import SplashPage from "./components/SplashPage";
import Friends from "./components/Friends";

//Routing/Stores//
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";
import { fetchFriend } from "./actions/index";

///Testing//
//import AddFriend from "./components/AddFriend";

function App() {
  return (
    <>
      {/* <Router> */}
      <div className="App">
        <h1>hi</h1>
        {/* <Friends /> */}
        {/* <Nav /> */}
        {/* <SplashPage /> */}
      </div>
      {/* </Router> */}
    </>
  );
}
// const mapStateToProps = (state) => {
//   return { ...state };
// };
// const mapDispatchToProps = () => {
//   return { fetchFriend };
// };

export default App;
//connect(mapStateToProps, mapDispatchToProps)
