import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import './style.css'

import logo from '../../assets/logo2019-1.png'
import { LogoutUser } from '../../store/mdules/user/actions'
import { isAuthenticated } from '../../authentication/auth'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    boxShadow: 'none',
  },
  appbar1: {
    backgroundColor: '#fff',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  link: {
    margin: 10,
    textDecoration: 'none',
    color: '#000000'
  },
  link1: {
    textDecoration: 'none',
    color: '#000000'
  },
  title: {
    flexGrow: 1,

  },
  button: {
    borderColor: '#5FCF80',
    color: '#5FCF80',
    margin: 10
  },
  linkButton: {
    textDecoration: 'none',
  },
  button1: {
    borderColor: '#5FCF80',
    color: '#fff',
    backgroundColor: '#5FCF80',
    '&:hover': {
      backgroundColor: '#5FCF80',
    }
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

function Header() {
  const isLogger = useSelector(state => state.users.user)
  const classes = useStyles();

  const dispatch = useDispatch()
  function handleLogout() {
    dispatch(LogoutUser())
  }

  return (
    <div className={classes.root} >
      <AppBar position="absolute" className="navbar" elevation={0} style={{ backgroundColor: '#fff' }}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to="/" color="inherit" className={classes.link}>
              <img src={logo} alt="" className="img" />
            </Link>
          </Typography>
          <Typography className={classes.nav}>
            <Link to="/" color="borderColor: '#0062cc'," className={classes.link}>
              Inicio
            </Link>
            <Link to="/professor" color="borderColor: '#0062cc'," className={classes.link}>
              Professor
            </Link>
            <Link to="/ajuda" color="inherit" className={classes.link}>
              Ajuda
            </Link>
            <Link to="/falaconosco" color="inherit" className={classes.link}>
              Fala conosco
            </Link>
          </Typography>
          {isLogger && isAuthenticated(isLogger) ?
            <div>
              <Link to="/painel" className={classes.linkButton}>
                <Button color="primary" className={classes.button}>Painel</Button>
              </Link>
              <Button variant="outlined" className={classes.button} onClick={handleLogout}>
                Sair
              </Button>
            </div>
            :
            <div>
              <Link to="/login" className={classes.linkButton}>
                <Button variant="outlined" className={classes.button}>
                  Login
                 </Button>
              </Link>
              <Link to="/register" className={classes.linkButton}>
                <Button variant="contained" className={classes.button1}>
                  Cadastre-se
                </Button>
              </Link>
            </div>

          }

        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header;