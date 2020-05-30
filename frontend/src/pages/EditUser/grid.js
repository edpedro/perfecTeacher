import React, { Fragment } from 'react'
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
    marginTop: 15,
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
  const classes = useStyles();

  return (
    <Fragment>
      <Grid container spacing={3}>
        <Grid item xs={5}>
          <Card className={classes.grid1}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.large} />
            <CardActionArea>
              <CardContent>
                <input
                  accept="image/*"
                  className={classes.input}
                  id="contained-button-file"
                  multiple
                  type="file"
                />
                <label htmlFor="contained-button-file">
                  <Button variant="contained" color="primary" component="span">
                    Altera imagem
                  </Button>
                </label>
              </CardContent>
            </CardActionArea>
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
                id="outlined-required"
                label="Email"                
                variant="outlined"
                style={{width: 500, marginBottom:4}}
                />                
                <TextField
                required
                id="outlined-required"
                label="Senha antiga"                
                variant="outlined"
                style={{width: 500, marginBottom:4}}/>
                <TextField
                required
                id="outlined-required"
                label="Senha nova"                
                variant="outlined"
                style={{width: 500}}/>
              </CardContent>
              <CardActions style={{ marginTop: 10, marginLeft:60 }}>
                <Button size="small">Alterar</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Grid item xs={12} sm={12} className={classes.grid2}>
            <Card className={classes.root} variant="outlined">
              <CardContent>
              <Typography variant="h5" component="h2">
                  Informações
                </Typography>
              <TextField
                required
                id="outlined-required"
                label="Nome"                
                variant="outlined"
                style={{width: 300, margin: 4}}
                />                
                <TextField
                required
                id="outlined-required"
                label="Data nascimento"                
                variant="outlined"
                style={{width: 300, margin: 4}}/>
                <TextField
                required
                id="outlined-required"
                label="Endereço"                
                variant="outlined"
                style={{width: 300, margin: 4}}/>
                 <TextField
                required
                id="outlined-required"
                label="Celular"                
                variant="outlined"
                style={{width: 300, margin: 4}}/>
              </CardContent>
              <CardActions style={{ marginTop: 10, marginLeft:60 }}>
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
