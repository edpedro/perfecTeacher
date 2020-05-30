import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 100
  },
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
    marginLeft: 6,
    marginBottom: 15,
    textAlign: 'center',
  },
}))

export default function Subpanel() {
  const classes = useStyles();
  const data = useSelector( state => state.course.quant)

  return (
    <Fragment>
      <Grid container spacing={3} className={classes.root}>
        <Grid item xs={4} sm={4}>
          <Grid item xs={6} sm={12} className={classes.grid2}>
            <Card className={classes.root} variant="outlined">
              <CardContent>
                <Typography variant="h5" component="h2">
                  Quantidade de Aulas
                </Typography>
                <Typography style={{ marginTop: 10 }} component="p">
                  05
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid item xs={4} sm={4}>
          <Grid item xs={6} sm={12} className={classes.grid2}>
            <Card className={classes.root} variant="outlined">
              <CardContent>
                <Typography variant="h5" component="h2">
                  Valor a Recardado
                </Typography>
                <Typography style={{ marginTop: 10 }} component="p">
                  R$ 1.500
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid item xs={4} sm={4}>
          <Grid item xs={6} sm={12} className={classes.grid2}>
            <Card className={classes.root} variant="outlined">
              <CardContent>
                <Typography variant="h5" component="h2">
                  Quantidade de Anuncios
                </Typography>
                <Typography style={{ marginTop: 10 }} component="p">
                  {data}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>

  );
}
