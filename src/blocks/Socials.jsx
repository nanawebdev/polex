import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTelegram } from '@fortawesome/free-brands-svg-icons'

export default function Socials() {

    return (
        <ul className="socials">
            <li>
                <a href="https://www.youtube.com/channel/UCDtQC29FioPUW1L3e1r5OCA">
                    <FontAwesomeIcon icon={faYoutube} />
                    <span>Наш youtube</span>
                </a>
            </li>

            <li>
                <a href="/">
                    <FontAwesomeIcon icon={faInstagram} />
                    <span>Наш instagram</span>
                </a>
            </li>

            <li>
                <a href="https://t.me/polishlesons">
                    <FontAwesomeIcon icon={faTelegram} />
                    <span>Наш telegram </span>
                </a>
            </li>
        </ul>
    )
}