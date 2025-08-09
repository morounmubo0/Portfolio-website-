import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from '../../assets/Logo2.svg' 
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logo-container'>
          <img src={logo} alt="Logo" className="logo" />
        <h1>ICEDEV</h1>
      </div>
      
      <ul className='nav-menu'>
          <Link to="/"><li>Home</li></Link> 
          <Link to="/about"><li>About</li></Link>
          <Link to="/service"><li>Service</li></Link>
          <Link to="/project"><li>Project</li></Link>
      </ul>
          <a href="http://moromubo2004@gmail.com" className='btn'> Contact Me </a>

    </div>
  )
}

export default Navbar
