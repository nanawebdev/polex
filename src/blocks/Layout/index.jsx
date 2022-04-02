// import React, { useEffect, useState } from "react";
import React from "react";
import { NavLink } from "react-router-dom";
import Socials from "../../elements/Socials";
import SvgElement from "../../elements/SvgElement";
// import NotFinished from "../../pages/NotFinished";
import Navigation from "../Navigation";
import borderLight from "./../../assets/svg/borderLight.svg"

const lis = [
    { id: 1, title: 'Упражнения', link: '/exercises' },
    { id: 2, title: 'Теория', link: '/' }
]

export default function Layout({ children }) {
    // const [isBlocked, setIsBlocked] = useState(false)
    // const [deskWidth, setDeskWidth] = useState(null)

    // useEffect(() => {
    //     isBlocked ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto'
    //     window.addEventListener('resize', setDeskWidth(window.innerWidth))
    //     setIsBlocked(deskWidth < 768)
    //     console.log(document);
    
    // }, [deskWidth, isBlocked])

    return (
        <div className="wrapper">
            {/* {isBlocked && <NotFinished />} */}
            <div className="content">
                <header className="header">
                    <div className="center">
                        <NavLink to="/" className="logo"><h3>POLEX</h3></NavLink>
                        <Navigation lis={lis} currentclassName="navigation navigation-header" />
                        {/* <NavLink to="/account" className="button">Аккаунт</NavLink> */}
                    </div>

                    { }
                </header>

                {children}
            </div>
            <footer className="footer">
                <SvgElement
                    currentClass="top-line__svg"
                    svg={borderLight} />
                <Socials />
            </footer>
        </div>
    )
}