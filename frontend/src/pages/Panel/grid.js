import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

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
  },
  grid2: {
    marginBottom: 15,
    textAlign: 'center',

  },
}))

export default function Subpanel() {
  const user = useSelector(state => state.users.user)
  const Anunci = useSelector(state => state.course.quant)
  const classes = useStyles();

  return (
    <Fragment>
      <Grid container spacing={3} >
        <Grid item xs={5}>
          <Card className={classes.grid1} >            
            {user && user.image ?
                <Avatar alt="Remy Sharp"
                  src={`http://localhost:3333/${user.image}`}
                  className={classes.large}
                />
                :
                <Avatar alt="Remy Sharp" src="" className={classes.large}/>
              }
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  INFORMATICA
               </Typography>
                <Typography variant="subtitle1" color="textSecondary" component="p">
                  Desenvolvedor web
          </Typography>               
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={7}>
          <Grid item xs={12} sm={12} className={classes.grid2}>
            <Card className={classes.root} variant="outlined" >
              <CardContent>
                <Typography variant="h5" component="h2">
                  1 Pedidos de aulas
                </Typography>
                <Typography component="p">
                  FERNANDO
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  Recife - Pernambuco
                 </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Ver Mais</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Grid item xs={12} sm={12} className={classes.grid2}>
              <Card className={classes.root} variant="outlined">
                <CardContent>
                  <Typography variant="h5" component="h2">
                    1 Turmas
                </Typography>
                  <Typography component="p">
                    Grupo
                </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Data: 20/05/2020
                 </Typography>
                </CardContent>
                <CardActions >
                  <Button size="small">Ver Mais</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} className={classes.grid2}>
              <Card className={classes.root} variant="outlined">
                <CardContent>
                  <Typography variant="h5" component="h2">
                    {Anunci && Anunci} Anúncios
                </Typography>
                  <Typography component="p">
                    Grupo
                </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Data: 20/05/2020
                 </Typography>
                </CardContent>
                <CardActions >
                  <Button size="small">Ver Mais</Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

    </Fragment>

  );
}
