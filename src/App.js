import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home/Home';
import Notfound from './components/Notfound/Notfound';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Detail from './components/Home/Detail/Detail';
import Login from './components/Login/Login/Login';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Services from './components/Home/Services/Services';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
           <Route exact path="/">
             <Home></Home>
          </Route>
           <Route path="/home">
             <Home></Home>
          </Route>
           <Route path="/services">
             <Services></Services>
          </Route>
           <Route path="/login">
             <Login></Login>
          </Route>
          <PrivateRoute path="/detail/:serviceId">
             <Detail></Detail>
          </PrivateRoute>
           <Route exact path="*">
             <Notfound></Notfound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
