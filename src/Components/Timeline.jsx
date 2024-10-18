import tlinePic from '../assets/timeline.png';
import { useEffect } from 'react';
import AOS from 'aos';

function Timeline(){

    useEffect(() => {
        AOS.init({ duration: 1200 }); // Customize the duration of animations
    }, []);

    return(
        <>
            <div className='timeline'>
                <div className='tline-img' data-aos="fade-right" data-aos-delay="250">
                    <img src={tlinePic}></img>
                </div>

                <div className='tline-text' data-aos="fade-left" data-aos-delay="350">
                    <div className='tline-items' data-aos="fade-left" data-aos-delay="250">
                        <div className='tline-icon'>
                            <i className='bx bxs-briefcase'></i>
                        </div>
                        <div className='tline-details'>
                            <p>2017 - 2018</p>
                            <h2>SSLC<span> - STAR Matric Hr. Sec. School</span></h2>
                            <p>
                                Completed my SSLC with 84.2%.
                            </p>
                        </div>
                    </div>
                    <div className='tline-items' data-aos="fade-left" data-aos-delay="250">
                        <div className='tline-icon'>
                            <i className='bx bxs-briefcase'></i>
                        </div>
                        <div className='tline-details'>
                            <p>2019 - 2020</p>
                            <h2>HSC<span> - STAR Matric Hr. Sec. School</span></h2>
                            <p>
                                Completed my HSC with 73.17%.
                            </p>
                        </div>
                    </div>
                    <div className='tline-items' data-aos="fade-left" data-aos-delay="250">
                        <div className='tline-icon'>
                            <i className='bx bxs-briefcase'></i>
                        </div>
                        <div className='tline-details'>
                            <p>2020 - 2024</p>
                            <h2>Computer Science Degree<span> - Anna University</span></h2>
                            <p>
                                Acquired bachelor's degree at Dr. Sivanthi Aditanar College<br></br> Of Engineering.<br></br>
                                Completed with a CGPA of 8.3
                            </p>
                        </div>
                    </div>
                    <div className='tline-items' data-aos="fade-left" data-aos-delay="250">
                        <div className='tline-icon'>
                            <i className='bx bxs-briefcase'></i>
                        </div>
                        <div className='tline-details'>
                            <p>2024</p>
                            <h2>Internship<span> - Codsoft</span></h2>
                            <p>
                            Web Development Internship in the duration of <br></br>July 2024 - Aug 2024.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Timeline;