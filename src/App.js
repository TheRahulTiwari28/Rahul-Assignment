import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home'
import SignIn from './components/Logins/SignIn';
import SignUp from './components/Logins/SignUp';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact>
          <Home/>
        </Route>
        <Route path='/SignIn' exact>
          <SignIn/>
        </Route>
        <Route  path='/SignUp' exact>
          <SignUp/>
        </Route>
      </Switch>
      <Redirect to='/'/>
    </Router>
    </>
  );
}

export default App;
