import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { LandingPage, ErrorPage, RegisterPage } from './pages';
import UserProfilePage from './pages/profile/UserProfilePage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<UserProfilePage />} />
        <Route path='landing' element={<LandingPage />} />
        <Route path='register' element={<RegisterPage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <ToastContainer position='top-center' />
    </Router>
  );
}

export default App;
