import React from 'react';
import { Link } from 'react-router-dom'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import AssignmentIcon from '@material-ui/icons/Assignment';

export default function SecondaryListItems() {
  return (
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
  )

}