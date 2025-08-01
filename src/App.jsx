import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from './Pages/AboutPage/AboutPages'
import HomePage from './Pages/HomePage/HomePages'
import './App.css'

function App() {
 
  return (
     <Router>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/about" element={<AboutPage />}/>
      </Routes>
      </Router>
  )
}

export default App
