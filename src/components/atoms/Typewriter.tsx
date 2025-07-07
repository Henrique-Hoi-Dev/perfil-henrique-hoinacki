import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

interface TypewriterProps {
  strings: string[];
  className?: string;
  speed?: number;
  backSpeed?: number;
  backDelay?: number;
  loop?: boolean;
}

const Typewriter = ({
  strings,
  className = '',
  speed = 50,
  backSpeed = 50,
  backDelay = 2000,
  loop = true,
}: TypewriterProps) => {
  const el = useRef<HTMLSpanElement>(null);
  const typed = useRef<Typed | null>(null);

  useEffect(() => {
    if (el.current) {
      typed.current = new Typed(el.current, {
        strings,
        typeSpeed: speed,
        backSpeed,
        backDelay,
        loop,
        showCursor: true,
        cursorChar: '|',
        autoInsertCss: true,
      });
    }

    return () => {
      if (typed.current) {
        typed.current.destroy();
      }
    };
  }, [strings, speed, backSpeed, backDelay, loop]);

  return <span ref={el} className={className} />;
};

export default Typewriter;
