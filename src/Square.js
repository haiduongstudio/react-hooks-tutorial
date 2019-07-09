import React from 'react';
import { useCountRenders } from './useCountRenders';

const Square = React.memo(({ n, onClick }) => {
  useCountRenders();
  return <button onClick={onClick}>{n}</button>;
});

export default Square;
