import { useEffect, useState } from "react";

const messages = [
  "Collecting wishes...",
  "Reading mentions...",
  "Building memories..."
];

function BootScreen({ onComplete }) {

  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {

      setProgress((prev) => {

        if (prev >= 100) {

          clearInterval(interval);

          setTimeout(() => {
            onComplete();
          }, 400);

          return 100;
        }

        return prev + 4;
      });

    }, 70);

    return () => clearInterval(interval);

  }, [onComplete]);

  useEffect(() => {

    const msgInterval = setInterval(() => {

      setMessageIndex((prev) =>
        (prev + 1) % messages.length
      );

    }, 900);

    return () => clearInterval(msgInterval);

  }, []);

  return (
    <div className="boot-screen">

      <div className="boot-glow"></div>

      <div className="scanner-ring">

        <div className="scanner-inner">
          {progress}%
        </div>

      </div>

      <h2 className="boot-text">
        {messages[messageIndex]}
      </h2>

    </div>
  );
}

export default BootScreen;