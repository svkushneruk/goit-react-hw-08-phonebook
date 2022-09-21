import { Routes, Route } from 'react-router-dom';

import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';
import Navbar from './Navbar/Navbar';
import HomePage from 'pages/HomePage/HomePage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import ContactsPage from 'pages/ContactsPage/ContactsPage';
import NotFoundPage from 'pages/NoFoundPage/NotFoundPage';

import Container from './Container';

const App = () => {
  return (
    <Container>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route element={<PublicRoute />}>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Container>
  );
};

export default App;
