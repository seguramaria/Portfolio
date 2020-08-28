import React from 'react';
// import React, { useState, useEffect } from 'react';
// import { Route, Switch } from 'react-router-dom';
import '../stylesheets/App.scss';
import Header from './Header';
import Landing from './Landing';
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
      <Header />
      <Landing />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <main className="main"></main>
      {/* </Route> */}

      {/* <Route path="/character/:id" render={renderCharacterDetail} /> */}
      {/* </Switch> */}
    </div>
  );
}

export default App;
