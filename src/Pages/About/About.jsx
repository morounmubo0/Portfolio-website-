import './About.css';
import { FaFigma, FaHtml5, FaCss3Alt, FaReact, FaJsSquare, FaPalette} from 'react-icons/fa';
import Navbar from '../../Components/Navbar/Navbar';
import about from '../../assets/about.jpg';

const skills = [
    { name: 'Figma', level: 90, icon: <FaFigma /> },
    { name: 'HTML', level: 96, icon: <FaHtml5 /> },
    { name: 'CSS', level: 90, icon: <FaCss3Alt /> },
    { name: 'React', level: 65, icon: <FaReact /> },
    { name: 'JavaScript', level: 80, icon: <FaJsSquare /> },
    { name: 'UI/UX Design', level: 99, icon: <FaPalette /> },
];

const About = () => {
    return (
        <div className="skill-container">
            <Navbar />
            <div className="profile-section">
                <div className="avatar"
                    style={{ backgroundImage: `url(${about})` }}
                    alt="Profile Avatar"
                />
                <div className="text-content">
                    <h2>ICEDEV</h2>
                    <p className="role">UI/UX Designer & Frontend Developer</p>
                    <p className="bio">
                        Driven by a passion for crafting intuitive and visually appealing digital experiences. 
                        I blend creativity with technical expertise to bring ideas to life. With a background in both design and development, 
                        I specialize in creating seamless user interfaces that are not only aesthetically pleasing but also highly functional and user-centric.
                    </p>
                </div>
            </div>

            <h3 className="skills-heading">Skills</h3>

            <div className="badges">
                {skills.map((skill) => (
                    <span key={skill.name} className="badge">
                        {skill.icon}
                        <span style={{ marginLeft: '5px' }}>{skill.name}</span>
                    </span>
                ))}
            </div>

            <div className="skill-bars">
                {skills.map((skill) => (
                    <div key={skill.name} className="skill-bar">
                        <div className="skill-label">
                            <span>{skill.name}</span>
                            <span>{skill.level}%</span>
                        </div>
                        <div className="progress-bar">
                            <div className="progress" style={{ width: `${skill.level}%` }} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default About;