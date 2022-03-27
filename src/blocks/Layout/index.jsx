import React from "react";
import { NavLink } from "react-router-dom";
import Socials from "../../elements/Socials";
import Navigation from "../Navigation";
import footerTop from "./../../assets/svg/footerTop.svg"

const lis = [
    { id: 1, title: 'Упражнения', link: '/exercises' },
    { id: 2, title: 'Теория', link: '/' }
]

export default function Layout({ children }) {
    return (
        <div className="wrapper">
            <div className="content">
                <header className="header">
                    <div class="center">
                        <NavLink to="/" class="logo"><h3>POLEX</h3></NavLink>
                        <Navigation lis={lis} currentclassName="navigation navigation-header" />
                        <NavLink to="/account" className="button">Аккаунт</NavLink>
                    </div>
                </header>
               
                {children}
            </div>
            <footer className="footer">
                <div className="top-line__svg" style={{ backgroundImage: "url(" + footerTop + ")" }}></div>
                <Socials />
            </footer>
        </div>
    )
}