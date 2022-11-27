import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import ChatPage from './Pages/ChatPage.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/chat" element={<ChatPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
