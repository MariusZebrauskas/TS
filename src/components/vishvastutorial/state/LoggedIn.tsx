import React from 'react';

const LoggedIn = () => {
  const [isLogedIn, setIsLoggedIn] = React.useState(false);

  const user = (param: boolean) => {
    setIsLoggedIn(param)
  };
  return (
    <div>
      <button onClick={() => user(true)}>login</button>
      <button onClick={() => user(false)}>logout</button>
      <br />
      <br />
      <br />
      <div>{isLogedIn ? 'logged in' : 'loged out'}</div>
    </div>
  );
};

export default LoggedIn;
