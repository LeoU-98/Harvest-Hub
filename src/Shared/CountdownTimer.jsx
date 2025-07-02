// Reusable Components

// CountdownTimer.jsx
import { useEffect, useState } from "react";
import propTypes from "prop-types";

export const CountdownTimer = ({ endTime }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(endTime) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        d: Math.floor(difference / (1000 * 60 * 60 * 24)),
        h: Math.floor((difference / (1000 * 60 * 60)) % 24),
        m: Math.floor((difference / 1000 / 60) % 60),
        s: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <div className="flex gap-1 font-bold text-green-800">
      {timeLeft.d}d<span>:</span>
      {timeLeft.h}h<span>:</span>
      {timeLeft.m}m<span>:</span>
      {timeLeft.s}s
    </div>
  );
};

CountdownTimer.propTypes = { endTime: propTypes.string };
