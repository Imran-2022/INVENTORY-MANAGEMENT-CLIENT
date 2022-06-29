import React from 'react'
import Context from './Context/Context';
import PageRoutes from './PageRoutes';

function App() {
  return (
    <Context>
      <PageRoutes />
    </Context>
  );
}

export default App;
