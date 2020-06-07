import React, { Fragment, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';

import { Upload } from '../../store/mdules/user/actions'

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  large: {
    margin: 'auto',
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
  grid1: {
    flexGrow: 1,
    textAlign: 'center',
    marginTop: 70
  },
  grid2: {
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    display: 'none',
  },
}))

export default function Subpanel() {
  const user = useSelector(state => state.users.user) 
 
  const dispatch = useDispatch()
  const classes = useStyles();
  const [upload, setUpload] = useState('')

  function handleChange(event) {
    setUpload(event.target.files)
  };

  function handleSubmint(event) {
    event.preventDefault()

    const formData = new FormData()
    formData.append('file', upload[0])

    dispatch(Upload(formData, user.id))
  
  }

  return (
    <Fragment>
      <Grid container spacing={3}>
        <Grid item xs={5}>
          <Card className={classes.grid1}>

            {user && user.image ?
              <Avatar alt="Remy Sharp"
                src={`http://localhost:3333/${user.image}`}
                className={classes.large} />
              :
              <Avatar alt="Remy Sharp" src="" className={classes.large} />
            }
            <form onSubmit={handleSubmint}>
              <CardActionArea>
                <CardContent>
                  <input
                    className={classes.input}
                    id="contained-button-file"
                    type="file"
                    onChange={handleChange}
                  />
                  <label htmlFor="contained-button-file">
                    <Button variant="contained" color="primary" component="span">
                      imagem
                  </Button>
                  </label>
                </CardContent>
              </CardActionArea>
              <div>
                <Button type="submit" variant="contained">
                  Alterar
                </Button>
              </div>
            </form>
          </Card>
        </Grid>


        {/* <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid> */}
        <Grid item xs={7}>
          <Grid item xs={12} sm={12} className={classes.grid2}>
            <Card className={classes.root} variant="outlined">
              <CardContent>
                <Typography variant="h5" component="h2">
                  Alterar senha
                </Typography>
                <TextField
                  required                
                  label="Email"
                  variant="outlined"
                  style={{ width: 500, marginBottom: 4 }}
                />
                <TextField
                  required                
                  label="Senha antiga"    
                  variant="outlined"           
                  style={{ width: 500, marginBottom: 4 }} />
                <TextField
                  required                
                  label="Senha nova"
                  variant="outlined"
                  style={{ width: 500 }} />
              </CardContent>
              <CardActions style={{ marginLeft: 60 }}>
                <Button size="small">Alterar</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Grid item xs={12} sm={12}>
              <Card className={classes.root} variant="outlined">
                <CardContent>
                  <Typography variant="h5" component="h2">
                    Informações
                </Typography>
                  <TextField
                    required                  
                    label="Nome"
                    variant="outlined"
                    style={{ width: 250, margin: 4 }}
                  />
                  <TextField
                    required                  
                    label="Data nascimento"
                    variant="outlined"
                    style={{ width: 250, margin: 4 }} />
                  <TextField
                    required        
                    label="Endereço"
                    variant="outlined"
                    style={{ width: 250, margin: 4 }} />
                  <TextField
                    required             
                    label="Celular"
                    variant="outlined"
                    style={{ width: 250, margin: 4 }} />
                </CardContent>
                <CardActions style={{ marginTop: 10, marginLeft: 60 }}>
                  <Button size="small">Validar</Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

    </Fragment>

  );
}
