import React, {useEffect} from 'react';
import AOS from 'aos';

function Footer(){

    useEffect(() => {
        AOS.init({ duration: 1200 }); // Customize the duration of animations
    }, []);

    return(
        <>
            <div>
                <footer className='end'>
                    <h1>&copy; Mitilan Depak. All rights reserved.</h1>
                </footer>
            </div>
        </>
    )

}

export default Footer;