import Navbar from '../Components/Navbar/Navbar'
import './HomePage.css'
import image_bg from '../../assets/image_bg.png' 
const HomePage = () => {

  return (
   
    <section id='hero'>
       <Navbar />
        <div className='hero'>
          <div className='hero1'>
            <img src={image_bg} alt="image" className="bg" />
            <div className='hero2'>
          <h1>Hi, I'm <span className='introName'> ICEDEV.</span><br /> A UI/UX Designer and a Frontend Developer.</h1>
          <p>A creative frontend developer who turns ideas into interactive experiences. I blend clean code with a spark of design to build websites that work and wow.
             When I'm not coding, I'm sketching UI concepts, exploring new tech tools, or Impacting and Teaching.</p>
          <button className='btn'>Contact Me</button>
            </div> 

          </div>
         
        </div>
        {/* Background image */}
    </section>
  )
}

export default HomePage