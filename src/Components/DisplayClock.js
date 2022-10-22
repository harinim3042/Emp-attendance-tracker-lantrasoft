import React, { useState, useEffect } from 'react';

function DisplayClock() {
  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 30000);
  }, []);
  return (
    <>
      <div className=" mt-n1 py-2">
        {dateState.toLocaleDateString('en-GB', {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
        
        })}
       <hr/>
        {dateState.toLocaleString('en-US', {
          hour: 'numeric',
          minute: 'numeric',
          hour12: true,
        })}
      </div>
    </>
  );
}

export default DisplayClock;
