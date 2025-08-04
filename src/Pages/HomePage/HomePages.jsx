import Navbar from '../../Components/Navbar/Navbar'
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
          <h1>Hi, I'm <span className='introName'> ICEDEV</span> - a UI/UX Designer and a Frontend Developer</h1>
          <p>
I'm a passionate UI/UX designer and frontend developer dedicated to crafting intuitive and visually appealing digital experiences. My mission is to bridge the gap between design and technology, creating seamless user journeys that drive engagement and achieve business goals.

          </p>
          <button className='btn1'>Learn More</button>
            </div> 

          </div>
         
        </div>
        {/* Background image */}
    </section>
  )
}

export default HomePage

