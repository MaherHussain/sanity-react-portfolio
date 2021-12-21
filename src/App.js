import Navbar from './components/Navbar/Navbar' 
import React,{useState} from 'react' 
import {BrowserRouter,Route,Switch} from 'react-router-dom'

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function App() {
  const [expanded, isExpanded] = useState(false);

  const openMenu = () => {
    const LinksCon = document.querySelector(".links-con");
    LinksCon.style.width = "200px";
    LinksCon.style.display = "block";
    LinksCon.style.paddingLeft = "50px";
    LinksCon.style.transtion = "width 3s"; 
    isExpanded(!expanded);
  };

  const closeMenu = () => {
    const LinksCon = document.querySelector(".links-con");
    LinksCon.style.width = "0px";
    LinksCon.style.display = "none";
    LinksCon.style.paddingLeft = "0px";
    LinksCon.style.transtion = "width 3s";
    isExpanded(!expanded);
  };
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar
          openMenu={openMenu}
          closeMenu={closeMenu}
          expanded={expanded}
          isExpanded={isExpanded}
        />
        <div className="content"  onClick={expanded ? closeMenu : undefined}>
          <Switch>
            <Route component={Home} path="/" exact />
            <Route component={About} path="/about" />
            <Route component={Skills} path="/skills" />
            <Route component={Portfolio} path="/portfolio" />
            <Route component={Contact} path="/contact" />
          </Switch>
         
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
