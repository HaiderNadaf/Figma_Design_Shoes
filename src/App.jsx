import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Hero from "./Components/Hero";
import Shoes from "./Components/Shoes";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="contant">
        <Hero></Hero>
        <Shoes></Shoes>
      </div>
    </>
  );
}

export default App;
