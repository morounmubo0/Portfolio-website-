import './ServicePage.css'
import Navbar from '../../Components/Navbar/Navbar'
import image3 from '../../assets/image3.png'
import image1 from '../../assets/image1.png'

const ServiceCard = ({ title, description, imgSrc, btnClass }) => (
  <section className="service-card">
    <div className="left">
      <div className="text-block">
        <h3>{title}</h3>
        <p>{description}</p>
        <button className={btnClass}>Learn More</button>
      </div>
    </div>
    <div className="right">
      <div className="image-placeholder">
        <img src={imgSrc} alt={title} />
      </div>
    </div>
  </section>
)

const ServicePage = () => {
  return (
    <div className="servicePage">
      <Navbar />
      <h1>Services</h1>
      <div className="cards">
        <ServiceCard
          title="UI/UX Design"
          description="Crafting intuitive and visually appealing user interfaces that enhance user experience and meet business goals."
          imgSrc={image3}
          btnClass="btn3"
        />
        <ServiceCard
          title="Web Development"
          description="Building responsive and scalable web applications using modern technologies to deliver seamless user experiences."
          imgSrc={image1}
          btnClass="btn-1"
        />
      </div>
    </div>
  )
}

export default ServicePage
