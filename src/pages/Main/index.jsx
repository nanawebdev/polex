import React from "react";
import { faBullhorn } from "@fortawesome/free-solid-svg-icons"
import { faYoutube } from "@fortawesome/free-brands-svg-icons"
import { faTelegram } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import borderLight from "./../../assets/svg/borderLight.svg"
import { NavLink } from "react-router-dom";
import SvgElement from "../../elements/SvgElement";

export default function Main() {

    return (
        <main className="main">
            <div className="main__top">
                <h1>Уроки <br /> польского <br /> с носителем</h1>
            </div>

            <section className="main__benefits">
                <ul className="center">
                    <li>
                        <FontAwesomeIcon icon={faBullhorn} />
                        <h3>препод носитель</h3>
                        <p>Научит не только языку, но и расскажет фишечки культуры</p>
                    </li>

                    <li>
                        <FontAwesomeIcon icon={faYoutube} />
                        <h3>youtube канал</h3>
                        <p>Отрабатывай произношение, просто включив видео</p>
                    </li>

                    <li>
                        <FontAwesomeIcon icon={faTelegram} />
                        <h3>telegram чат</h3>
                        <p>Будь в курсе выходящих видео и общайся в нашем чате</p>
                    </li>
                </ul>
                <SvgElement currentClass="bottom-line__svg" svg={borderLight} />
          
            </section>

            <section className="main__promo promo">
                <div className="center">

                    <div className="main__title">
                        <div className="promo__svgs"></div>
                        <div>
                            <h2>Добро пожаловать <br /> на наш сайт</h2>
                            <p>Сейчас, он находится в стадии разработки. </p>
                            
                            <p>Мы очень стараемся, чтобы
                                создать для вас удобную платформу для изучения языка.
                            </p>
                            <p>Но вы уже можете пользоваться некоторыми возможностями и давать
                                обратную связь
                            </p>

                            <NavLink to="/exercises">упражнения</NavLink>
                        </div>
                    </div>
                </div>
               
            </section>

        </main >
    )
}

