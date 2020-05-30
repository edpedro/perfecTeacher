import React, { Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


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
}))

export default function Subpanel() {
  const classes = useStyles();

  return (
    <Fragment>
      <Grid container spacing={3}>
        {/* <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid> */}
        <Grid item xs={7}>
          <Grid item xs={12} sm={12} className={classes.grid2}>
            <Card className={classes.root} variant="outlined">
              <CardContent>
                <Typography variant="h5" component="h2">
                  Pedido de aula
                </Typography>
                <Typography style={{ marginTop: 10 }} component="p">
                  FERNANDO
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  Aula Individual
                 </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  Pe - Recife
                 </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  81 - 9999-8888
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
                    Pedido de aula
                </Typography>
                  <Typography style={{ marginTop: 10 }} component="p">
                    Fernando
                </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Aula em Grupo
                 </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Pe - Recife
                 </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    81 - 9999-8888
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
