import React from 'react';
// import { Route, Switch } from 'react-router-dom';
import '../stylesheets/App.scss';
import Header from './Header';
import Home from './Home';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Projects from './Projects';
import Footer from './Footer';
import Contact from './Contact';
function App() {
  return (
    <div className="App">
      {/* <Switch>
        <Route exact path="/">
          <Landing />
        </Route>

        <Route exact path="/App"> */}
      <div id="outer-container">
        <Header pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
        <main id="page-wrap">
          <Home />
          <AboutMe />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </main>
      </div>
      {/* <Header /> */}

      {/* </Route> */}

      {/* <Route path="/character/:id" render={renderCharacterDetail} /> */}
      {/* </Switch> */}
    </div>
  );
}

export default App;
