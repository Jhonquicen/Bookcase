import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LectorAllBooks from './Componentes/paginas/LectorAllBooks';
import NewBook from './Componentes/paginas/NewBook';
import NavBar from './Componentes/navegacion/NavBar';
import Dashboard from './Componentes/paginas/Dashboard';
import ShowBook from './Componentes/paginas/ShowBook';
import LoginRegistro from './Componentes/LoginRegistro/LoginRegistro';
import AdminAllBooks from './Componentes/admin/AdminAllBooks';
import ActualizarBook from './Componentes/admin/ActualizarBook';
import './App.css';
import Login from './Componentes/LoginRegistro/Login';
import SearchBooks from './Componentes/paginas/SearchBooks';
import ShowBookAdmin from './Componentes/admin/ShowBookAdmin';

const App = () => {
  return(
    <div>
      <BrowserRouter>
          <NavBar/>
        <Switch>
          <Route path="/" exact render={() => <Dashboard/>}/>
          <Route path="/lector" render={() => <LectorAllBooks/>}/>
          <Route path="/Admin" render={() => <AdminAllBooks/>}/>
          <Route path="/bookcase/editar/:id" exact render={() => <ActualizarBook/>}/>
          <Route path="/LogReg" render={() => <LoginRegistro/>}/>
          <Route path="/Login" render={() => <Login/>}/>
          <Route path="/new" render={() => <NewBook/>}/>
          <Route path="/bookcase/:id" render={()=><ShowBook/>} />
          <Route path="/newAdmin/:id"  render={()=><ShowBookAdmin/>} />
          <Route path="/search" render={()=><SearchBooks/>} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;
