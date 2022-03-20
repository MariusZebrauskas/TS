import React from 'react';

//imprted types
import { StatusTypes } from './Types';


// type StatusTypes = {
//   status: 'loading' | 'success' | 'error';
// };



const Status = ({ status }: StatusTypes) => {
  let message;
  if (status === 'success') {
    message = 'Data Fech Successfuly';
  } else if (status === 'error') {
    message = 'Data Fech Errorfuly';
  } else if (status === 'loading') {
    message = 'Loading';
  }
  return (
    <div>
      <h1>Status: {status}</h1>
      <h5>{message}</h5>
    </div>
  );
};

export default Status;
