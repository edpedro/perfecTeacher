import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
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
  const id = useSelector(state => state.users.id)

  const dispatch = useDispatch()
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  // const Logger = useCallback(async () => {
  //   if (!isLogger) {
  //     await dispatch(LogoutUser())
  //   }

  // }, [dispatch])

  // useEffect(() => {
  //   if (!isLogger) {
   
  //   }
  // }, [isLogger, dispatch])

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  function handleLogout(event) {
    event.preventDefault()
    setAnchorEl(null);
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

          {isLogger && isAuthenticated(id) ? (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >

                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.large} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={open}
              >
                {/* <MenuItem>
              <Link to="/falaconosco" color="inherit" className={classes.link1}>
                Painel
            </Link>
              </MenuItem> */}
                <MenuItem>{isLogger && isLogger.name}</MenuItem>
                <MenuItem onClick={handleLogout}>Sair</MenuItem>
              </Menu>
            </div>
          ) : (
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
            )
          }
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header;