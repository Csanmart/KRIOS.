import { useEffect, useState } from "react";

function Preloader({ onFinish }) {
  const [letters, setLetters] = useState("");

  useEffect(() => {
    const name = "KRIOS";
    let index = 0;

    const typing = setInterval(() => {
      index++;
      setLetters(name.slice(0, index));

      if (index === name.length) {
        clearInterval(typing);

        setTimeout(() => {
          onFinish();
        }, 1000);
      }
    }, 300);

    return () => clearInterval(typing);
  }, [onFinish]);

  return (
    <div className="preloader">
      <h1>{letters}<span>.</span></h1>
      <p>INDEPENDENT STREETWEAR</p>
      <div className="loader-line"></div>
    </div>
  );
}

export default Preloader;