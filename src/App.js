import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/screens/Home';
import Profile from './components/screens/Profile';
import Signup from './components/screens/Signup';
import Login from './components/screens/Login';

function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
    </Router>
  );
}

export default App;
