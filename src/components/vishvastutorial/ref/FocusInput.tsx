import React, { useEffect } from 'react';

const FocusInput = () => {
  const refInput = React.useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    // on mount
    refInput.current?.focus();
  }, []);
  return (
    <div>
      <div>use ref</div>
      <input type='text' ref={refInput} />
    </div>
  );
};

export default FocusInput;
