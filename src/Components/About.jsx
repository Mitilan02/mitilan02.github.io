import React, {useEffect} from 'react';
import profilePic from '../assets/my.jpg';
import abtPic from '../assets/About.png';
import cv from '../assets/resume.pdf'
import AOS from 'aos';
 
function About(){

    const icon = {
        color:"white",
        height:"24px",
        width: "24.8px"
    }

    useEffect(() => {
        AOS.init({ duration: 1200 }); // Customize the duration of animations
    }, []);


    return(
        <>
            <div className="about">
                <div className="text" data-aos="fade-down">
                    <div>
                        <h1>Hi,<br></br>
                        I'm <span>Mitilan Depak</span> <br></br>Web Designer<br></br> &<br></br> Java Developer<br></br>
                        </h1>
                        <a href={cv} className="dcv">Download CV</a>
                    </div>

                    <div className='ig'>
                        <ul>
                            <li><a href='https://github.com/Mitilan02' data-aos="fade-down"><i className='bx bxl-github' style={icon}></i></a></li>
                            <li><a href='https://www.instagram.com/mitil._.n/'data-aos="fade-down" data-aos-delay="250"><i className='bx bxl-instagram' style={icon}></i></a></li>
                            <li><a href='https://www.linkedin.com/in/mitilan-depak-063962239/' data-aos="fade-down" data-aos-delay="300"><i className='bx bxl-linkedin' style={icon}></i></a></li>
                            <li><a href='mailto:mitilan02@gmail.com' data-aos="fade-down" data-aos-delay="350"><i className='bx bxl-gmail' style={icon}></i></a></li>
                        </ul>
                    </div>

                </div>
                <div data-aos="fade-down" data-aos-delay="500">
                    <img src={profilePic} className='image'></img>
                </div>
            </div>
            <br></br>
            <div className='abt' id="about">
                <div className='abt-img' data-aos="fade-down" data-aos-delay="50">
                    <img src={abtPic} className='abtpic'></img>
                </div>
                <div className='abt-text' data-aos="fade-down" data-aos-delay="350">
                    <h2>I'm Mitilan Depak</h2>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;Motivated BE graduate in Computer Science and Engineering with proficiency in web development and Java programming. Solid understanding of software development principles and experience in designing and maintaining web applications. Strong problem-solving skills, collaborative mindset, and a passion for continuous learning. Seeking an entry-level position to apply technical expertise and contribute to innovative projects in a dynamic organization.</p> 
                </div>
            </div>
        </>
    )
}

export default About;