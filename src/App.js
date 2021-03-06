import React, { useState, useCallback, useEffect } from 'react';
import Hello from './Hello';
import Square from './Square';

const App = () => {
  const [count, setCount] = useState(0);
  const favoriteNums = [7, 21, 37];

  const increment = useCallback(
    n => {
      setCount(c => c + n);
    },
    [setCount]
  );

  return (
    <div>
      <Hello increment={increment} />
      <div>count: {count}</div>
      {favoriteNums.map(n => {
        return <Square onClick={() => increment(n)} n={n} key={n} />;
      })}
    </div>
  );
};

export default App;
