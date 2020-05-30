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
  const classes = useStyles();

  return (
    <Fragment>
      <Grid container spacing={3} >
        <Grid item xs={5}>
          <Card className={classes.grid1} style={{marginTop:180}}> 
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.large} />
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  INFORMATICA
               </Typography>
                <Typography variant="subtitle1" color="textSecondary" component="p">
                  Desenvolvedor web
          </Typography>
                <Typography variant="h4" gutterBottom>
                  R$40/h
          </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        {/* <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid> */}
        <Grid item xs={7}>
          <Grid item xs={12} sm={12} className={classes.grid2}style={{marginTop:80}}>
            <Card className={classes.root} variant="outlined" >
              <CardContent>
                <Typography variant="h5" component="h2">
                  1 Pedidos de aulas
                </Typography>
                <Typography style={{ marginTop: 10 }} component="p">
                  FERNANDO
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  Recife - Pernambuco
                 </Typography>
              </CardContent>
              <CardActions style={{ marginTop: 10 }}>
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
                  <Typography style={{ marginTop: 10 }} component="p">
                    Grupo
                </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Data: 20/05/2020
                 </Typography>
                </CardContent>
                <CardActions style={{ marginTop: 10 }}>
                  <Button size="small">Ver Mais</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} className={classes.grid2}>
              <Card className={classes.root} variant="outlined">
                <CardContent>
                  <Typography variant="h5" component="h2">
                    1 Anúncios
                </Typography>
                  <Typography style={{ marginTop: 10 }} component="p">
                    Grupo
                </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Data: 20/05/2020
                 </Typography>
                </CardContent>
                <CardActions style={{ marginTop: 10 }}>
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
