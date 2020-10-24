import React from "react";
import { useEffect, useState } from 'react'
import './Nav.css'


function Nav() {

    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100){
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);


    return(
        <div className = {`nav ${show && "nav_black"}`}>
            <img
                className = "nav_logo"
                src = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
                alt = "Netflix Logo"
            ></img>
            <img
                className = "nav_avatar"
                src = "https://i.pinimg.com/originals/c0/8e/6c/c08e6c9595e03202a46a95f66578799f.png"
                alt = "Netflix Logo"
            ></img>

        </div>
    )
}

export default Nav;