import React, { useRef } from 'react';
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
  setData: React.Dispatch<
    React.SetStateAction<
      {
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
      }[]
    >
  >;
}
const AddData = ({ data, setData }: TS_PROPS | any) => {
  let ref = useRef<HTMLInputElement>(null);

  const addHandler = () => {
    console.dir(ref.current?.value);
    setData([...data, { name: ref.current?.value, id: data.length  + 1 }]);
  };
  return (
    <div>
      <input ref={ref} type='text' placeholder='' />
      <button onClick={addHandler}>add</button>
    </div>
  );
};

export default AddData;
