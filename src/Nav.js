import React, { useEffect, useState } from 'react';
import "./Nav.css";

function Nav() {
    const [show, handleShow] = useState(false);


    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true)
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);








    return (
        <div className={ `nav ${show && "nav__black"}`}>
            <img
                className="nav__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/1/1f/Netflix.png"
                alt="Netflix logo"
            />
            <img 
                className="nav__avatar"
                src="http://pbs.twimg.com/profile_images/2284174872/7df3h38"
                alt="Netflix Logo "
            
            />
            
        </div>
    )
}

export default Nav;
