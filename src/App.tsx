import React, { useState } from 'react';
import AppRouter from './router/AppRouter';
import { StatsProvider } from './utils/stats.context';

const App = () => {

  return (
    <StatsProvider>
      <AppRouter/>
    </StatsProvider>
  )
}


export default App;