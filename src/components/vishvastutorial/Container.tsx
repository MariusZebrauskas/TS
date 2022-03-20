import React from 'react';

type TS = {
    styles: React.CSSProperties;
};

const Container = ({ styles }: TS) => {
  return (
    <div>
      <div style={styles}>
        <h1>Container</h1>
        <div>contetnt in container</div>
      </div>
    </div>
  );
};

export default Container;
