import React from 'react'

import Dashboard from '../../components/Dashboard'
import Painel from './Painel'


export default function Panel() { 

  return (
    <div>
      <Dashboard>
        <Painel />
      </Dashboard>
    </div>
  );
}
