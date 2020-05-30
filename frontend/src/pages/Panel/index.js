import React from 'react'

import Dashboard from '../../components/Dashboard'
import Grid from './grid'


export default function Panel() { 

  return (
    <div>
      <Dashboard>
        <Grid />
      </Dashboard>
    </div>
  );
}
