import { useState, useEffect } from "react";
import { Typography } from "@mui/material";

const IntroText = () => {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (isTyping) {
        if (text.length < "Front End Web Developer".length) {
          setText(text + "Front End Web Developer"[text.length]);
        } else {
          setTimeout(() => {
            setIsTyping(false);
          }, 2000);
          // setIsTyping(false);
        }
      } else {
        if (text.length > 0) {
          setText(text.slice(0, -1));
        } else {
          setIsTyping(true);
        }
      }

      // Toggle cursor visibility
      setShowCursor((prevShowCursor) => !prevShowCursor);
    }, 200); // Adjust interval as needed

    return () => clearInterval(typingInterval);
  }, [isTyping, text]);

  return (
    <Typography
      variant="h5"
      component="p"
      className="intro-text"
      sx={{
        fontFamily: "cursive",
        fontWeight: 600,
        fontSize: "20px",
        letterSpacing: ".1rem",
        color: "darkgoldenrod",
        marginTop: 1,
      }}
    >
      {text}
      {showCursor && <span className="cursor">|</span>}
    </Typography>
  );
};

export default IntroText;
