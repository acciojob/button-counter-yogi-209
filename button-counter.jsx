import React, { useState } from "react";
function ButtonCounter() {
  const [count, setCount] = useState(0);

  // Function to increment the count
  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      
      <p>Button clicked {count} times</p>
      
      
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default ButtonCounter;