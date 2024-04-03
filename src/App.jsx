import './App.css';
import HomePage from './pages/HomePage';
import StudentDetailsPage from './pages/StudentDetailsPage';
import UserProfilePage from './pages/UserProfilePage';
import Navbar from './components/Navbar'; // Assuming Navbar is imported from a separate component
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <Router>
      <div className='App relative z-20 pt-20'>
        <Navbar />

        <div className='pages'>
          <HomePage />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <StudentDetailsPage />
            <Route path='/students/:studentId' element={<StudentDetailsPage />} />

            <UserProfilePage />
            <Route path='/profile' element={<UserProfilePage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
