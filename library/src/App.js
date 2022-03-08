import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Admin from './components/admin/Admin';
import Home from './components/home/Home';
import Librarian from './components/librarian/Librarian';
import Nav from './components/nav/Nav';
import Student from './components/student/Student';
import './App.css';
import Issues from './components/librarian/issues/Issues';

function App() {
  return (
    <Router>
      <div className="app">
        <Nav/>
        <Routes>
          <Route path='/student' element = {<Student/>}/>
          <Route path='/librarian' element = {<Librarian/>}/>
          <Route path='/librarian/request' element = {<Issues/>}/>
          <Route path='/admin' element = {<Admin/>}/>
          <Route path='/' element = {<Home/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
