import React from 'react';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';

export default function MainListItems() {
  const user = useSelector(state => state.users.user)

  return (
    <div>
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <Link to="/painel" style={{ textDecoration: 'none', color: '#000' }}>
          <ListItemText primary="Painel de controle" />
        </Link>
      </ListItem>
      <Link to="/pedido" style={{ textDecoration: 'none', color: '#000' }}>
        <ListItem button>
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary="Pedidos de aulas" />
        </ListItem>
      </Link>
      <Link to="/turma" style={{ textDecoration: 'none', color: '#000' }}>
        <ListItem button>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Turma" />
        </ListItem>
      </Link>
      {user && user.type === 'a' ?

        ''
        :
        <>
          <Link to="/valor" style={{ textDecoration: 'none', color: '#000' }}>
            <ListItem button>
              <ListItemIcon>
                <BarChartIcon />
              </ListItemIcon>
              <ListItemText primary="Valor" />
            </ListItem>
          </Link>
          <Link to="/anuncios" style={{ textDecoration: 'none', color: '#000' }}>
            <ListItem button>
              <ListItemIcon>
                <LayersIcon />
              </ListItemIcon>
              <ListItemText primary="Anuncios" />
            </ListItem>
          </Link>
        </>
      }
    </div>
  )
}
