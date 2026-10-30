
import { useEffect, useState } from "react";
import { launchDate } from "../config/launch";
function getTimeLeft() {
  if (!launchDate) return null;

  const difference = new Date(launchDate).getTime() - Date.now();

  if (difference <= 0) return "launched";

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

function Countdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (timeLeft === null) {
    return (
      <section className="launch" id="launch">
        <p className="eyebrow">THE FIRST DROP</p>
        <h2>PRÓXIMAMENTE</h2>
        <p>La fecha de lanzamiento se anunciará pronto.</p>
      </section>
    );
  }

  if (timeLeft === "launched") {
    return (
      <section className="launch" id="launch">
        <p className="eyebrow">THE FIRST DROP</p>
        <h2>WE ARE LIVE</h2>
        <p>KRIOS ya está aquí.</p>
      </section>
    );
  }

  const units = [
    { label: "DÍAS", value: timeLeft.days },
    { label: "HORAS", value: timeLeft.hours },
    { label: "MINUTOS", value: timeLeft.minutes },
    { label: "SEGUNDOS", value: timeLeft.seconds },
  ];

  return (
    <section className="launch" id="launch">
      <p className="eyebrow">THE FIRST DROP</p>
      <h2>CONTEO REGRESIVO</h2>

      <div className="countdown">
        {units.map((unit) => (
          <div className="countdown-unit" key={unit.label}>
            <span className="countdown-value">
              {String(unit.value).padStart(2, "0")}
            </span>

            <span className="countdown-label">{unit.label}</span>
          </div>
        ))}
      </div>

      <p>Un nuevo capítulo está por comenzar.</p>
    </section>
  );
}

export default Countdown;
