import { useState } from 'react';

import { Button } from 'components';
import { useBearStore } from 'store';
import { RouterView } from 'router';

import viteLogo from '/vite.svg';
import reactLogo from './assets/react.svg';

import './App.css';

const App = (): JSX.Element => {
  const [count, setCount] = useState(0);
  const bears = useBearStore((state) => state.bears);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button
          type="button"
          onClick={() => {
            console.log('111');
            setCount((count) => count + 1);
          }}
        >
          count is {count}
          bears are {bears}
        </button>
        <Button />
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>

      <RouterView />
    </>
  );
};

export default App;
