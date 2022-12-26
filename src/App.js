import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { LandingPage, ErrorPage, RegisterPage } from './pages';
import { StatsPage, UserProfilePage, AllNotes, AddNote, Layout } from './pages/profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<AllNotes />} />
          <Route path='add-note' element={<AddNote />} />
          <Route path='user-profile' element={<UserProfilePage />} />
          <Route path='stats' element={<StatsPage />} />
        </Route>
        <Route path='landing' element={<LandingPage />} />
        <Route path='register' element={<RegisterPage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <ToastContainer position='top-center' />
    </Router>
  );
}

export default App;
