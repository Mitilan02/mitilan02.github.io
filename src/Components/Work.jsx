import React, { useState }from 'react';
import { useEffect } from 'react';
import AOS from 'aos';
import anprPic from '../assets/ANPR.jpg';
import tpPic from '../assets/Tplanner.jpg';
import hcbPic from '../assets/HCBOT.jpg';

function Work() {

    useEffect(() => {
        AOS.init({ duration: 1200 }); // Customize the duration of animations
    }, []);

  const [modalActive, setModalActive] = useState(false);
  const [activeWork, setActiveWork] = useState(null);

  const works = [
    {
        topic:"Travel Planner",
        img: tpPic,
        text: "This web application project is a travel planner that uses MongoDB, HTML, CSS, JavaScript, and the Mapbox API. It allows users to find routes and distances between two places, providing detailed directions and travel time. The application features a search functionality where users can enter a location, and the system marks all nearby hotels on the map with pinpoint markers. The interface is user-friendly, displaying both driving and walking routes, and it visually integrates the directions with the Mapbox API to enhance the travel planning experience.",
      },
    {
      topic:"Number Plate Recognition System",
      img: anprPic,
      text: "This Java machine learning project leverages OpenCV to develop a car number plate recognition system. The system takes an image of a car as input and processes it through multiple stages. First, Otsu's thresholding method is applied to binarize the image, enhancing the contrast between the number plate and the background. Next, active contouring is used to accurately segment the number plate from the image. Finally, Tesseract OCR is employed to extract and predict the alphanumeric characters from the segmented number plate. This approach offers a robust solution for automated vehicle identification through number plate recognition.",
    },
    
    {
      topic:"Healthcare Chatbot",
      img: hcbPic,
      text: "This Java-based healthcare chatbot utilizing Weka's machine learning library to predict diseases from user symptoms. Key features include data handling from CSV files, a Random Forest classifier for predictions, an interactive java swing interface, and detailed outputs with precautions and disease descriptions. This project enhances user health awareness and decision-making.",
    },
  ];

  const handleWorkClick = (index) => {
    setActiveWork(index);
    setModalActive(true);
  };

  const closeModal = (e) => {
    // Close the modal only if clicking outside modal content
    if (e.target.className === 'modal') {
      setModalActive(false);
    }
  };

  return (
    <>
    <br /><br /> <br /><br />
    <h1  data-aos="fade-down" data-aos-delay="150" id='work'>Projects</h1>
      <div className={`work ${modalActive ? 'modal-active' : ''}`} id="work">
        {works.map((work, index) => (
          <div className="work-items" key={index} onClick={() => handleWorkClick(index)}>
            <div  data-aos="fade-down" data-aos-delay="250" className="work-img">
              <center><img src={work.img} alt="Project" /></center>
              <center><h2 data-aos="fade-down" data-aos-delay="50">{work.topic}</h2></center>
            </div>
          </div>
        ))}
      </div>

      {modalActive && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
          <button className="close-btn" onClick={() =>{setModalActive(false);}}>&times;</button>
            <img  data-aos="fade-right" data-aos-delay="50" src={works[activeWork].img} alt="Project" />
            <div className="work-text">
                <h2 data-aos="fade-down" data-aos-delay="350">{works[activeWork].topic}</h2>
                <p data-aos="fade-left" data-aos-delay="450">{works[activeWork].text}</p>
            </div>
          </div>
        </div>
      )}
      <center><h3 data-aos="fade-right" data-aos-delay="50"><i>Click on the images for more information...</i></h3></center>
    </>
  );
}

export default Work;
