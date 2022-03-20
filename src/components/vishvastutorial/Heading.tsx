import React from 'react';

type TS = {
  children: string | React.ReactNode | JSX.Element;
};

const Heading = ({ children }: TS) => {
  return <div>{children}</div>;
};

export default Heading;
