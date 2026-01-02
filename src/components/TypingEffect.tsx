import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const phrases = [
  "open source contribution",
  "devops tools",
  "creating telegram bots",
  "automation tools",
  "building APIs",
  "python scripting",
];

const TypingEffect = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseDuration = 2000;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentPhrase.length) {
          setDisplayText(currentPhrase.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentPhraseIndex]);

  return (
    <div className="flex items-center justify-center gap-2 text-lg md:text-xl text-muted-foreground">
      <span className="text-foreground">I love</span>
      <span className="text-primary font-display min-w-[200px] md:min-w-[280px] text-left">
        {displayText}
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
          className="inline-block w-[2px] h-5 md:h-6 bg-primary ml-1 align-middle"
        />
      </span>
    </div>
  );
};

export default TypingEffect;
