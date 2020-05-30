import React from 'react'
import Container from '@material-ui/core/Container';

import logoHome from '../../assets/bg-banner.jpg'
import Search from '../../components/Search'


import './style.css'
import Card from './card'

function Home() {
 
  return (
    <div className="home">
      <img src={logoHome} alt="" />
      <Search />
      <Container fixed>
        <Card/>
        <Card/>                                   
      </Container>



    </div>

  )
}

export default Home