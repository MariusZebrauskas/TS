import React from 'react';

const User = () => {
  const [user, setUser] = React.useState<null | { name: string; surename: string }>(null);

  const loginHandler = (params: string) => {
    if (params === 'login') {
      setUser({
        name: 'peter',
        surename: 'pen',
      });
    } else {
      setUser(null);
    }
  };
  return (
    <div>
      <button onClick={() => loginHandler('login')}>LOGIN</button>
      <button onClick={() => loginHandler('logout')}> LOGOUT</button>
      {user ? (
        <h4>
          {user.name} {user.surename}
        </h4>
      ) : (
        <div>'sry no one in'</div>
      )}
      <h1>person {user?.name} {user === null && "guest"}</h1>
    </div>
  );
};

export default User;
