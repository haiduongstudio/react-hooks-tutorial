import React, { useState } from 'react';
import { useFetch } from './useFetch';

const App = () => {
  const [count, setCount] = useState(0);
  const { data } = useFetch(
    'https://raw.githubusercontent.com/ajzbc/kanye.rest/master/quotes.json'
  );
  const computeLongestWord = (arr) => {
    if (!arr) {
      return [];
    }
    console.log('Computing longest world');
    let longestWorld = '';
    JSON.parse(arr).forEach(sentence =>
      sentence.split(' ').forEach(word => {
        if (word.length > longestWorld.length) {
          longestWorld = word;
        }
      })
    );
    return longestWorld;
  };

  return (
    <div>
      <div>count: {count}</div>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <div>{computeLongestWord(data)}</div>
    </div>
  );
};

export default App;
