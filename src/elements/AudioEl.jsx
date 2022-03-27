import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from "@fortawesome/free-solid-svg-icons"

export default function AudioEl(props) {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = React.createRef();
  
    const playSound = () => {
      if (!isPlaying) {
        setIsPlaying(true);
        audioRef.current.play();
      } else {
        setIsPlaying(false);
      }
    };
  
    return (
      <div className='AudioEl'>
        <audio ref={audioRef}>
          <source src={props.soundsrc} type="audio/mp3" />
          <track kind="captions" {...props} />
          Your browser does not support the
          <code>audio</code> element.
        </audio>
        <button type="button" onClick={() => playSound()}>
          <FontAwesomeIcon icon={faPlay} />
        </button>
      </div>
    );
  }