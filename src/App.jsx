import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage/HomePages';
import About from './Pages/About/About'
import ServicePage from './Pages/Service/ServicePage'
import Project from './Pages/Project/project'
import './App.css'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </Router>
  )
}
export default App;