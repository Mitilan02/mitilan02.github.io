import { useState } from 'react';

function Contact() {

    const icon = {
        color:"white",
        height:"24px",
        width: "24.8px"
    }

    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    // Function to handle the click event
    const handleClick = (e) => {
        // Prevent the default behavior of anchor link
        e.preventDefault();

        // Generate mailto link
        const mailtoLink = `mailto:mitilan02@gmail.com?subject=Contact%20from%20${encodeURIComponent(name)}&body=${encodeURIComponent(message)}`;

        // Set the href dynamically and simulate a click to send the email
        window.location.href = mailtoLink;
    };

    return (
        <div className='contact' id='contact'>
            <form>
                <h1 data-aos="fade-down" data-aos-delay="150">Contact</h1>
                <input data-aos="fade-down" data-aos-delay="150"
                    className='input'
                    placeholder='Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)} // Update state on change
                />
                <br />
                <textarea data-aos="fade-down" data-aos-delay="150"
                    className='input'
                    placeholder='Type Something...🖋️'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)} // Update state on change
                />
                <br />
                {/* Button triggers the handleClick function */}
                <div>
                        <ul className='cig'>
                            <li><a href='https://github.com/Mitilan02' data-aos="fade-down"><i className='bx bxl-github' style={icon}></i></a></li>
                            <li><a href='https://www.instagram.com/mitil._.n/'data-aos="fade-down" data-aos-delay="250"><i className='bx bxl-instagram' style={icon}></i></a></li>
                            <li><a href='https://www.linkedin.com/in/mitilan-depak-063962239/' data-aos="fade-down" data-aos-delay="300"><i className='bx bxl-linkedin' style={icon}></i></a></li>
                            <li><a data-aos="fade-down" data-aos-delay="150" href='#' className='dcv' onClick={handleClick}>Contact</a></li>
                        </ul>
                    </div>
                
            </form>
        </div>
    );
}

export default Contact;
