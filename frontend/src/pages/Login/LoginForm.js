import React, { Fragment, useState } from 'react'
import { useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import AlertShow from '../../components/Alert/showUser'
import { LoginUser } from '../../store/mdules/user/actions'
import { alertShowUserMessage } from '../../store/mdules/alert/actions'

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  button1: {
    margin: theme.spacing(3, 0, 2),
    borderColor: '#5FCF80',
    color: '#fff',
    backgroundColor: '#5FCF80',
    '&:hover': {
      backgroundColor: '#5FCF80',
    }
  },
  alertErro: {
    color: '#FF0000',
    marginLeft: 2,
  },
}));


function LoginForm() {
  const classes = useStyles();
  const [user, setUser] = useState({
    email: '',
    hasePassword: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const dispatch = useDispatch()

  function handleChange(event) {
    const { name, value } = event.target
    setUser(user => ({ ...user, [name]: value }))
  }

  function handleSubmint(event){
    event.preventDefault()

    setSubmitted(true)
    if (user.email && user.hasePassword) {
      dispatch(LoginUser(user))
    } else {
      dispatch(alertShowUserMessage({
        severity: 'warning',
        message: 'Favor Preencher todos campos'
      }))
    }
  }

  return (
    <Fragment>
      <AlertShow/>
      <form className={classes.form} noValidate onSubmit={handleSubmint}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email"
          name="email"
          autoComplete="email"
          autoFocus
          value={user.email}
          onChange={handleChange}
        />
        {submitted && !user.email &&
          <div className={classes.alertErro}>Favor preencher email</div>
        }
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="hasePassword"
          label="Senha"
          type="password"
          id="password"
          autoComplete="current-password"
          value={user.hasePassword}
          onChange={handleChange}
        />
        {submitted && !user.hasePassword &&
          <div className={classes.alertErro}>Favor preencher senha</div>
        }
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Lembra me"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          className={classes.button1}
        >
          Entrar
          </Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Esqueceu senha?
              </Link>
          </Grid>
          <Grid item>
            <Link to="/register" variant="body2">
              {"Criar conta"}
            </Link>
          </Grid>
        </Grid>
      </form>
    </Fragment>
  )
}

export default LoginForm