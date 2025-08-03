import React from 'react'
import './project.css'
import Navbar from '../../Components/Navbar/Navbar';
import project1 from '../../assets/project1.jpg';
import project2 from '../../assets/project2.jpg';
import project3 from '../../assets/project3.jpg';

const project = () => {
  return (
    <div className='proj'>
      <Navbar />
     <h1>My Project</h1>
     <div className='project-images'>
       <img src={project1} alt="image" className='img-a' />
       <img src={project2} alt="image" className='img-b'/>
       <img src={project3} alt="image" className='img-c'/>
       </div>
      </div>
  )
}

export default project