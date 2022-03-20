import React from 'react';

interface TS_PROPS {
  data: {
    name: string;
    id: number;
    username: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: {
        lat: string;
        lng: string;
      };
    };
  }[];
}
const List = ({ data }: TS_PROPS) => {
  const listItems = (): JSX.Element[] => {
    return data.map((items) => {
      return (
        <div key={items.id} style={{ background: 'grey', color: 'black' }}>
          <h5>{items.name}</h5>
        </div>
      );
    });
  };

  return <div>{listItems()}</div>;
};

export default List;
