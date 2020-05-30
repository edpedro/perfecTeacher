import React, { Fragment, useState } from 'react'
import { useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { green } from '@material-ui/core/colors';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import AlertShow from '../../components/Alert/showUser'
import {RegisterUser} from '../../store/mdules/user/actions'
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
  radio: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
    borderColor: '#5FCF80',
  },
  alertErro: {
    color: '#FF0000',
    marginLeft: 2,
  },
}));

function RegisterForm() {
  const classes = useStyles();
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    type: 'p'
  })
  const [submitted, setSubmitted] = useState(false)
  const dispacth = useDispatch()

  function handleChange(event) {
    const { name, value } = event.target
    setUser(user => ({ ...user, [name]: value }))

  };

  function handleSubmint(event) {
    event.preventDefault()

    setSubmitted(true)

    if (user.name && user.email && user.password) {
      dispacth(RegisterUser(user))
    } else {
      dispacth(alertShowUserMessage({
        severity: 'warning',
        message: 'Favor Preencher todos campos'
      }))
    }
  }

  return (
    <Fragment>
      <AlertShow />
      <form className={classes.form} noValidate onSubmit={handleSubmint}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="name"
          label="Nome"
          name="name"
          autoComplete="name"
          autoFocus
          value={user.name}
          onChange={handleChange}
        />
        {submitted && !user.name &&
          <div className={classes.alertErro}>Favor preencher nome</div>
        }
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="email"
          label="Email"
          type="email"
          id="email"
          value={user.email}
          onChange={handleChange}
          autoComplete="current-email"
        />
        {submitted && !user.email &&
          <div className={classes.alertErro}>Favor preencher email</div>
        }
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Senha"
          type="password"
          id="password"
          autoComplete="current-password"
          value={user.password}
          onChange={handleChange}
        />
        {submitted && !user.password &&
          <div className={classes.alertErro}>Favor preencher senha</div>
        }
        <FormControlLabel
          checked={user.type === 'p'}
          onChange={handleChange}
          value="p"
          name="type"
          control={<Radio />}
          label="Professor"
          labelPlacement="start"
          className={classes.radio}
        />
        <FormControlLabel
          checked={user.type === 'a'}
          onChange={handleChange}
          value="a"
          name="type"
          control={<Radio />}
          label="Aluno"
          labelPlacement="start"
          className={classes.radio}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          className={classes.button1}
        >
          Cadastrar
          </Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Já tem Conta?
              </Link>
          </Grid>
        </Grid>
      </form>
    </Fragment>
  )
}

export default RegisterForm