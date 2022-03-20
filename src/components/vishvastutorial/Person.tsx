import React from 'react';

type TS = {
  personName: {
    first: string;
    last: string;
  };
};

const Person = ({ personName }: TS) => {
  return (
    <div>
      {personName.first} and {personName.last}
    </div>
  );
};

export default Person;
