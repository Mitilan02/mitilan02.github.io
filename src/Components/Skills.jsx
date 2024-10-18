import skillPic from '../assets/skills.png';
import { useEffect } from 'react';
import AOS from 'aos';

function Skills(){

    const java = {
        width : "80%"
    }

    const html = {
        width : "95%"
    }

    const css = {
        width : "85%"
    }

    const js = {
        width : "70%"
    }

    const icon = {
        color:"#00ffef",
    }

    useEffect(() => {
        AOS.init({ duration: 1200 }); // Customize the duration of animations
    }, []);


    return(
        <>
            <div className='skills' id='skills'>
                <div className='skill-text'>
                    <h2 data-aos="fade-down" data-aos-delay="250">Professional Skills</h2>
                    <p data-aos="fade-down" data-aos-delay="350">Without sharpen your weapon; standing on the battlefield would not increase your chance of winning</p>

                    <div className="skill" data-aos="fade-right">
                        <div className="skill-info">
                            <div className="skill-name">
                                <span className="skill-icon">
                                    <i className='bx bxl-java' style={icon}></i>
                                </span>
                                &nbsp;JAVA
                            </div>
                            <span>80%</span>
                        </div>
                        <div className="progress-bar">
                            <div className="progress" style={java}></div>
                        </div>
                    </div>
                    <div className="skill" data-aos="fade-right" data-aos-delay="250">
                        <div className="skill-info">
                            <div className="skill-name">
                                <span className="skill-icon">
                                    <i className='bx bxl-html5' style={icon}></i>
                                </span>
                                &nbsp;Html5
                            </div>
                            <span>95%</span>
                        </div>
                        <div className="progress-bar">
                            <div className="progress" style={html}></div>
                        </div>
                    </div>
                    <div className="skill" data-aos="fade-right" data-aos-delay="250">
                        <div className="skill-info">
                            <div className="skill-name">
                                <span className="skill-icon">
                                    <i className='bx bxl-css3' style={icon}></i>
                                </span>
                                &nbsp;CSS3
                            </div>
                            <span>85%</span>
                        </div>
                        <div className="progress-bar">
                            <div className="progress" style={css}></div>
                        </div>
                    </div>
                    <div className="skill" data-aos="fade-right" data-aos-delay="250">
                        <div className="skill-info">
                            <div className="skill-name">
                                <span className="skill-icon">
                                    <i className='bx bxl-javascript' style={icon}></i>
                                </span>
                                &nbsp;JS
                            </div>
                            <span>70%</span>
                        </div>
                        <div className="progress-bar">
                            <div className="progress" style={js}></div>
                        </div>
                    </div>    
                </div>
                <div data-aos="fade-left" data-aos-delay="350">
                    <img src= {skillPic}></img>
                </div>
            </div>
        </>
    );
}

export default Skills;