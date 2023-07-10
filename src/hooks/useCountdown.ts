import { useEffect, useState } from "react";

interface Countdown {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const weddingDate = new Date("April 21, 2024").getTime();

export const useCountdown = () => {
  const [countdown, setCountdown] = useState<Countdown>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const now = Date.now();

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      const difference = weddingDate - now;

      setCountdown({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, [now]);

  const days = `${countdown.days.toString().padStart(2, "0")} days`;
  const hours = `${countdown.hours.toString().padStart(2, "0")} hours`;
  const minutes = `${countdown.minutes.toString().padStart(2, "0")} minutes`;
  const seconds = `${countdown.seconds.toString().padStart(2, "0")} seconds`;

  return `${days} ${hours} ${minutes} ${seconds}`;
};
