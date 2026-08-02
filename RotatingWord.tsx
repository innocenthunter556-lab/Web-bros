"use client";

import { useEffect, useState } from "react";

interface RotatingWordProps {
  words: string[];
  interval?: number;
}

export default function RotatingWord({ words, interval = 2400 }: RotatingWordProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [words.length, interval]);

  return (
    <span className="relative inline-block" style={{ minWidth: "13ch" }}>
      <span
        key={index}
        className="inline-block text-brass"
        style={{ animation: "fadeSlideIn 0.55s cubic-bezier(.16,1,.3,1)" }}
      >
        {words[index]}
      </span>
    </span>
  );
}
