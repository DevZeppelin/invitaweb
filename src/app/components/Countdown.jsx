'use client'
import { useState, useEffect } from 'react';

const Countdown = ({ targetDate }) => {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(interval);
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setCountdown({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <h3 className='flex space-x-2 text-xl md:text-3xl'>     
      <div>{countdown.days} días : </div>
      <div>{countdown.hours} horas : </div>
      <div>{countdown.minutes} min : </div>
      <div>{countdown.seconds} seg </div>
    </h3>
  );
};

export default Countdown;