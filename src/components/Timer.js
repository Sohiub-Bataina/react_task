import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(interval); // Cleanup
  }, []);

  return (
    <div className="text-center mt-4">
      <h3>Timer Demo</h3>
      <p>Seconds Elapsed: {seconds}</p>
    </div>
  );
};

export default Timer;
