import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Technologies from './components/Technologies/Technologies';
import Buttons from './components/Buttons/Buttons';
import { BrowserRouter as Router, Route , Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Css from './pages/DibujosCss/Css';
import SideLinks from './components/SideLinks/SideLinks';
import DarkMode from './components/DarkMode/DarkMode';

function App() {
  return (
    <>
    <SideLinks />
    <DarkMode/>
    <div className="App container">
     <h1 style={styles.h1} >Kenji Arakaki</h1>
     <h4 style={styles.h4}>Front-end Developer</h4>
     <hr />
     <p style={styles.about}>
        Empecé a dar mis primeros pasos como <br/>
        Front-end Dev en el 2019, encarando algunos proyectos de desarrollo de páginas <br/>
        webs, e iniciando mi formación en UTN e-learning, complementando también con diferentes <br/>
        cursos online en distintas plataformas. <br/>
     </p>
     <hr />
     <h4 style={styles.knowledge}>Tecnologías:</h4>
     <Technologies/>
     <Router>
       <Buttons/>
        <div className="row card-content">
              <Switch>
                <Route path="/css">
                  <Css/>
                </Route>
                <Route path="/challenges">
                  <h2>Frontend Mentor</h2>
                </Route>
                <Route path="/">
                    <Home/>
                </Route>
            </Switch>
        </div>
     </Router> 

     

    </div>
    </>
  );
}

const styles = {
  h1: {
    fontSize: 50,
    marginTop: 50,
    marginBottom: 20,
  },
  h4: {
    fontSize: 30,
  },
  about: {
    fontSize: 16,
  },
  knowledge: {
    display: "flex",
    fontSize: 33,
    fontWeight: 600,
    marginTop: 40,
    marginBottom: 30,

  }
}

export default App;
