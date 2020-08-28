import React from 'react';
// import React, { useState, useEffect } from 'react';
// import { Route, Switch } from 'react-router-dom';
import '../stylesheets/App.scss';
import Header from './Header';
import Landing from './Landing';

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

      <main className="main"></main>
      {/* </Route> */}

      {/* <Route path="/character/:id" render={renderCharacterDetail} /> */}
      {/* </Switch> */}
    </div>
  );
}

export default App;
