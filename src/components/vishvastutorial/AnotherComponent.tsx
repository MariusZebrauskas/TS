import React from 'react';

type TS = {
  addNumbers: (a: number, b: number) => void;
};

const AnotherComponent = ({ addNumbers }: TS) => {
  return <button onClick={() => addNumbers(5, 7)}>AnotherComponent</button>;
};

export default AnotherComponent;
