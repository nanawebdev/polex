import React from "react"; 

export default function VideoPage({videoSrc}) {
 return (
     <div className="VideoPage container">
         <p>Название видео</p>
         <video width="400" height="200" controls>
             <source src={videoSrc} type="video/mp4"></source>
         </video>
     </div>
 )
}