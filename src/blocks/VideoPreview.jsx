import React from "react";
import { NavLink } from "react-router-dom";

export default function VideoPreview({ id, tags }) {
    const renderTags = () => {
        return tags.map(v => <li key={v}>{v}</li>)
    }

    return (
        <NavLink to={`/videos/${id}`} className="VideoPreview">
            <div className="VideoPreview__image">

            </div>
            <ul>
                {renderTags()}
            </ul>
            <h3>Название видео</h3>
        </NavLink>
    )
}