import React from 'react';
type TS = {
  number: number;
  message: string;
  isLogedIn: boolean;
};
const Greet = ({ number, message, isLogedIn }: TS) => {
  return (
    <div>
      welcome {number} {message} {isLogedIn ? 'Marius957' : 'user'}
    </div>
  );
};

export default Greet;
