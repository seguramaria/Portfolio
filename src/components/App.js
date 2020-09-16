import React from 'react';
import { Route, Switch } from 'react-router-dom';
import projectsFromApi from '../data/projects.json';
import '../stylesheets/App.scss';
import Header from './Header';
import Home from './Home';
import AboutMe from './AboutMe';
import Skills from './Skills';
import ProjectsList from './ProjectsList';
import Footer from './Footer';
import Contact from './Contact';
import ProjectModal from './ProjectModal';
import PageNotFound from './PageNotFound';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: projectsFromApi,
    };
    this.renderProjectModal = this.renderProjectModal.bind(this);
  }

  renderProjectModal(props) {
    const routeId = parseInt(props.match.params.id);
    const project = this.state.projects.find((project) => {
      return project.id === routeId;
    });
    console.log(project);
    if (project.id === routeId) {
      return <ProjectModal project={project} />;
    } else {
      return <PageNotFound />;
    }
  }

  render() {
    return (
      <>
        <div className="App">
          <div id="outer-container">
            <Header
              pageWrapId={'page-wrap'}
              outerContainerId={'outer-container'}
            />
          </div>
          <main id="page-wrap">
            <Home />
            <AboutMe />
            <Skills />

            <ProjectsList projects={this.state.projects} />
            <Switch>
              <Route path="/project/:id" render={this.renderProjectModal} />
            </Switch>
            <Contact />
            <Footer />
          </main>
        </div>
      </>
    );
  }
}
export default App;
