import React from 'react';

type TS = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

const Button = ({ handleClick }: TS) => {
  return <button onClick={(event) => handleClick(event,3)}>Button</button>;
};

export default Button;
