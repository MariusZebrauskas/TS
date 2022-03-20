import React from 'react';

type TS = {
  anotherObj: {
    name: string;
    id: number;
    sdfsdf?: string;
  }[];
};

const PersonList = ({ anotherObj }: TS) => {
  return (
    <div>
      {anotherObj.map((person) => (
        <div key={person.id}>
          <h4>{person.name}</h4>
          <h4>{person.sdfsdf}</h4>
        </div>
      ))}
    </div>
  );
};

export default PersonList;
