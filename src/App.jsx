import "./App.scss";

import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Pricing from "./components/Pricing/Pricing";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <About />
      <Pricing />
      <Contact />
    </div>
  );
}

export default App;
