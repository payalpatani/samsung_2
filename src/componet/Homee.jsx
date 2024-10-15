import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import { Link } from 'react-router-dom';

export default function Homee() {
  const yourtext = [
    ["Frontend Developer", "#ff9800"],
    ["Web Developer", "#4caf50"],
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState(yourtext[0][0]);
  const [color, setColor] = useState(yourtext[0][1]);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 150;
    const delayAfterTyping = 2000;

    const typingInterval = setInterval(() => {
      if (!isDeleting) {
        if (letterIndex < currentWord.length) {
          setText((prev) => prev + currentWord[letterIndex]);
          setLetterIndex((prev) => prev + 1);
        } else {
          setTimeout(() => setIsDeleting(true), delayAfterTyping);
        }
      } else {
        if (letterIndex > 0) {
          setText((prev) => prev.slice(0, -1));
          setLetterIndex((prev) => prev - 1);
        } else {
          const nextIndex = (index + 1) % yourtext.length;
          setIndex(nextIndex);
          setCurrentWord(yourtext[nextIndex][0]);
          setColor(yourtext[nextIndex][1]);
          setIsDeleting(false);
        }
      }
    }, typingSpeed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [letterIndex, isDeleting, currentWord, index, yourtext]);

  return (
    <div className="home-container">
      <div className="content">
        <h2 className="name">PAYAL PATANI</h2>
        <h3 className="typing-text">
          I'm <span style={{ color: color }}>{text}</span>
        </h3>

        {/* LinkedIn और GitHub आइकॉन */}
        <div className="social-icons">
          <a href="http://www.linkedin.com/in/payal-patani-9b8617307" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin" aria-hidden="true"></i>
          </a>
          <a href="https://github.com/payalpatani" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github" aria-hidden="true"></i>
          </a>
        </div>  

        <div className="button-container">
          <Link to={"/about"}>
            <button className="btn btn-outline-light me-2">Learn More</button>
          </Link>
          <Link to={"/contact"}>
            <button className="btn btn-outline-light">Contact Me</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
