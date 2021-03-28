import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './components/Cards/Cards';
import Technologies from './components/Technologies/Technologies';

function App() {
  return (
    <div className="App container">
     <h1>Kenji Arakaki</h1>
     <h4>Front-end Developer</h4>
     <hr />
     <p>
        Empecé a dar mis primeros pasos como <br/>
        Front-end Dev en el 2019, encarando algunos proyectos de desarrollo de páginas <br/>
        webs, e iniciando mi formación en la UTN, complementando también con diferentes <br/>
        cursos online en distintas plataformas. <br/>
     </p>
     <hr />
     <Technologies/>
     <Cards/>
    </div>
  );
}

export default App;
