import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Course from './pages/Course'
import Panel from './pages/Panel'
import Order from './pages/Order'
import Classes from './pages/Classe'
import Amount from './pages/Amount'
import Advertisement from './pages/Advertisement'
import EditUser from './pages/EditUser'
import Profile from './pages/Profile'
import Search from './pages/Search'

import { PrivateRoute, PublicRoute } from './authentication/PrivateRoute'

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/profile" component={Profile} />
      <Route path="/search"  component={Search} />
      <PublicRoute path="/login" component={Login} />
      <PublicRoute path="/register" component={Register} />
      <PrivateRoute path="/painel" component={Panel} />
      <PrivateRoute path="/pedido" component={Order} />
      <Route path="/course" component={Course} />
      <PrivateRoute path="/turma" component={Classes} />
      <PrivateRoute path="/valor" component={Amount} />
      <PrivateRoute path="/anuncios" component={Advertisement} />
      <PrivateRoute path="/editar" component={EditUser} />
    </Switch>
  )
}