import Navbar from './components/Navbar/Navbar'/* 
import Information from './components/Information/Information' */
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={About} path="/about" />
          <Route component={Skills} path="/skills" />
          <Route component={Projects} path="/portfolio" />
          <Route component={Contact} path="/contact" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
