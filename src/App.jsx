import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from './Pages/AboutPage/AboutPages'
import HomePage from './Pages/HomePage/HomePages'
import Skill from "./Pages/Skill/Skill";
import './App.css'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/skills" element={<Skill />} />
      </Routes>
    </Router>
  )
}

export default App
