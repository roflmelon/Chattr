import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import ChatPage from './Pages/ChatPage.js';
import ProtectedRoutes from './protectedRoute';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route path="/chat" element={<ChatPage />}></Route>
          </Route>
          <Route path="/" element={<LandingPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
