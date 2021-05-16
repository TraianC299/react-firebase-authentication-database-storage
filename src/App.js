import './App.css';
import SignUp from './components/SignUp';
import { AuthProvider } from './contexts/AuthContext';
import {useAuth} from "./contexts/AuthContext"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from './components/Home';
import LogIn from './components/LogIn';
import PrivateRoute from './components/PrivateRoute';
import ForgotPassword from "./components/ForgotPassword"
import UpdateProfile from './components/UpdateProfile';


function App() {

  const {currentUser} = useAuth()
  
  return (
    <Router>
      <AuthProvider>
      <Switch>
        <PrivateRoute exact path="/" component={Home}></PrivateRoute>
        <Route path="/signUp" component={SignUp}></Route>
        <Route path="/logIn" component={LogIn}></Route>
        <Route path="/forgotPassword" component={ForgotPassword}></Route>
        <PrivateRoute path="/updateProfile" component={UpdateProfile}></PrivateRoute>
      </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
