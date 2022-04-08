import './App.css';
import NavBarMain from './components/NavBarMain/NavBarMain'
import  BottomNav  from "./components/BottomNav/BottomNav";
import Footer from './components/Footer/Footer';
import ContainerRegistroLogin from './components/ContainerRegistroLogin/ContainerRegistroLogin';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { LandingPage } from './components/Pages/LandingPage';
import  HacerPregunta from './components/HacerPregunta/HacerPregunta';
import  PaginaPrincipal  from './components/PaginaPrincipal/PaginaPrincipal';
import  Profile from './components/Profile/Profile';
import Question from './components/Question/Question'
function App() {
  return (
        <Router>
          <header>
            <NavBarMain></NavBarMain>
            <BottomNav></BottomNav>
          </header>
          <main>
            
              <Switch>
                <Route path="/Register">
                  <LandingPage/>
                </Route>
                <Route path="/MakeQuestion">
                  <HacerPregunta
                  TituloPregunta="TituloPregunta"
                  CuerpoPregunta="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam natus beatae expedita dolor tenetur aut alias delectus,
                   nihil fugit repellat ratione tempore omnis ad dicta deserunt libero in ducimus dolores."
                  />
                </Route>
                <Route path="/Home">
                  <PaginaPrincipal/>
                </Route>
                <Route path="/Profile">
                  <Profile
                  Usuario="Usuario1"
                  Location="Mty"
                  FechaRegistro="27/03/2021"
                  />
                </Route>
                <Route path="/Question">
                 <Question title="Pregunta1" 
                          NumeroRespuestas="1"
                          InfoPregunta="Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                          Praesentium culpa voluptatem repellendus at optio minima 
                          nisi quasi expedita reprehenderit dicta, nemo reiciendis 
                         delectus maxime nesciunt non possimus et modi laudantium!"
                         Usuario="Usuario1"
                         Util="1"
                         NoUtil="2"
                         />
                </Route>
                <Route path="/">
                  <PaginaPrincipal/>
                </Route>
               
              </Switch>
          </main>  
          <Footer></Footer>
        </Router>
  );
}

export default App;
