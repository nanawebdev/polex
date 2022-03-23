import React from "react";
import { useMatch, useParams } from "react-router-dom"
import SearchInput from "../blocks/SearchInput";
import VideoPreview from "../blocks/VideoPreview";
import { BUCKET_URL } from "../constants";
import VideoPage from "./VideoPage";

const videos = [
    {
        id: '1',
        tags: ['грамматика', 'множественное число', 'падежи'],
        videoSrc: BUCKET_URL + '/Robimy+faworki+na+t%C5%82usty+czwartek%F0%9F%A4%97.mp4'
    },
    {
        id: '2',
        tags: ['падежи'],
        videoSrc: BUCKET_URL + '/Robimy+faworki+na+t%C5%82usty+czwartek%F0%9F%A4%97.mp4'
    }
]

export default function Videos() {
    const routeMatch = useMatch("/Videos/:id")
    const paramsId = useParams().id

    function renderVideosList() {
        return videos.map(v => {
            return <li key={v.id}>
                <VideoPreview id={v.id} tags={v.tags} />
            </li>
        })
    }

    const renderVideoPage = () => {
        const videoEl = videos.find(v => v.id === paramsId)
        const videoSrc = videoEl.videoSrc
        const tags = videoEl.tags

        return <VideoPage
            videoSrc={videoSrc}
            tags={tags}
        />
    }

    return routeMatch ? (
        renderVideoPage()
    ): (
            <div className = "Videos container">
            <SearchInput data={videos} />
        <ul className="Videos__list">
        { renderVideosList() }
            </ul >
        </div >
    );
}