import React from 'react';
import { Link } from 'react-router-dom'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';



export const mainListItems = (
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
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Configuração</ListSubheader>
    <Link to="/editar" style={{ textDecoration: 'none', color: '#000' }}>
      <ListItem button>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Editar conta" />
      </ListItem>
    </Link>
  </div>
);