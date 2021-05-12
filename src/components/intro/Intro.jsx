import "./Intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Web Developer", "Designer", "Photographer", "Twitch Streamer"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="images/Me.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hey There, I'm</h2>
          <h1>Chris Curry</h1>
          <h3>
            I am a... <span ref={textRef}></span>
          </h3>
        </div>
        {/* <a href="#portfolio">
          <img src="images/rightarrow.png" alt="" />
        </a> */}
      </div>
    </div>
  );
}