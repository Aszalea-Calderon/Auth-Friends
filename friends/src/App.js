import "./App.css";
import Nav from "./components/Nav";
import SplashPage from "./components/SplashPage";
import { BrowserRouter as Router } from "react-router-dom";
import Friends from "./components/Friends";

function App() {
  return (
    <Router>
      <div className="App">
        <Friends />
        <Nav />
        <SplashPage />
      </div>
    </Router>
  );
}

export default App;
