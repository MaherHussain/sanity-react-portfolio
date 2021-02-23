import Navbar from './components/Navbar/Navbar'/* 
import Information from './components/Information/Information' */
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Particles from 'react-particles-js'
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Particles
          params={{
            particles: {
              number: {
                value: 50,
              },
              size: {
                value: 3,
              },
              shape: {
                type: "circle",
                stroke: {
                  width:6,
                  color: "#218c74",
                },
              },
            },
          }}
        />
        

        <Navbar />
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={About} path="/about" />
          <Route component={Skills} path="/skills" />
          <Route component={Portfolio} path="/portfolio" />
          <Route component={Contact} path="/contact" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
