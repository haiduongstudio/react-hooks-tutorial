import React from 'react';

const Hello = () => {
  React.useEffect(() => {
    return () => {
      console.log('unmount');
    };
  }, []);

  return <div>Hello</div>;
};

export default Hello;
