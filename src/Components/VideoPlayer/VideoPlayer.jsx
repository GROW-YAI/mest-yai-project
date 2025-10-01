import React, { useRef, useEffect, useState } from 'react';
import './VideoPlayer.css';
import video from '../../Assets/bamboo-socks-video.mp4'; // keep your current video import

/**
 * VideoPlayer props:
 *  - playState: boolean (open / closed)
 *  - setPlayState: function to close/open
 *  - poster (optional): string path to poster image (e.g. import poster from '../../Assets/poster.jpg')
 *
 * Usage example:
 *  import poster from '../../Assets/video-poster.jpg';
 *  <VideoPlayer playState={playState} setPlayState={setPlayState} poster={poster} />
 */
const VideoPlayer = ({ playState, setPlayState, poster = undefined }) => {
  const player = useRef(null);
  const videoRef = useRef(null);

  const [isBuffering, setIsBuffering] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [animateOpen, setAnimateOpen] = useState(false);

  // Close when clicking overlay (but not when clicking the video or controls)
  const closePlayer = (e) => {
    if (e.target === player.current) {
      setPlayState(false);
    }
  };

  // ESC key closes player
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setPlayState(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [setPlayState]);

  // Prevent background scroll while open
  useEffect(() => {
    const previous = document.body.style.overflow;
    if (playState) {
      document.body.style.overflow = 'hidden';
      // trigger entrance animation a tick after mounting for smooth transition
      requestAnimationFrame(() => setAnimateOpen(true));
    } else {
      setAnimateOpen(false);
      document.body.style.overflow = previous;
      // reset loading states when closed
      setIsBuffering(true);
      setIsLoaded(false);
    }
    return () => {
      document.body.style.overflow = previous;
    };
  }, [playState]);

  // Try to play programmatically when opened (may be blocked on some mobile browsers)
  useEffect(() => {
    if (playState && videoRef.current) {
      const p = videoRef.current.play();
      if (p && typeof p.then === 'function') {
        p.catch(() => {
          // autoplay blocked - user will need to press play
        });
      }
    }
  }, [playState]);

  // Video event handlers
  const handleLoadStart = () => {
    setIsBuffering(true);
  };
  const handleLoadedData = () => {
    setIsLoaded(true);
    // don't immediately hide buffer because the browser may still buffer
    // rely on 'playing' or 'canplay' events to clear buffering
  };
  const handleWaiting = () => {
    setIsBuffering(true);
  };
  const handlePlaying = () => {
    setIsBuffering(false);
  };
  const handleCanPlay = () => {
    setIsBuffering(false);
  };
  const handleError = () => {
    setIsBuffering(false);
    // optionally show an error UI (not implemented)
  };

  return (
    <div
      className={`video-player ${playState ? 'open' : 'hide'}`}
      ref={player}
      onClick={closePlayer}
      aria-hidden={!playState}
    >
      <div
        className={`video-wrap ${animateOpen ? 'enter' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Video player"
      >
        <button
          className="vp-close"
          aria-label="Close video"
          onClick={() => setPlayState(false)}
        >
          ×
        </button>

        {/* Loader overlay (appears while buffering/loading) */}
        <div className={`vp-loader ${isBuffering ? 'visible' : ''}`} aria-hidden={!isBuffering}>
          <div className="spinner" role="status" aria-label="Loading video"></div>
          <div className="loader-text">{!isLoaded ? 'Loading video…' : 'Buffering…'}</div>
        </div>

        <video
          ref={videoRef}
          src={video}
          poster={poster}
          controls
          playsInline
          muted
          onLoadStart={handleLoadStart}
          onLoadedData={handleLoadedData}
          onWaiting={handleWaiting}
          onPlaying={handlePlaying}
          onCanPlay={handleCanPlay}
          onError={handleError}
        />
      </div>
    </div>
  );
};

export default VideoPlayer;
