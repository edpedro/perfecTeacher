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
  grid1: {
    flexGrow: 1,
    textAlign: 'center',
  },
  grid2: {
    marginLeft: 6,
    textAlign: 'center',
  },
}))

export default function Subpanel() {
  const classes = useStyles();

  return (
    <Fragment>
      <Grid container spacing={3}>
        {/* Primeiro        */}
        <Grid item xs={12} sm={6}>
          <Grid item xs={6} sm={12} className={classes.grid2}>
            <Card className={classes.root} variant="outlined">
              <CardContent>
                <Typography variant="h5" component="h2">
                  1 Turma - 12/04/2019
                </Typography>
                <Typography component="p">
                  1 - Fernando
                </Typography>
                <Typography variant="subtitle1" component="p">
                  2 - Fernando
                 </Typography>
                <Typography variant="subtitle1" component="p">
                  3 - Fernando
                 </Typography>
                <Typography variant="subtitle1" component="p">
                  4 - Fernando
                 </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Ver Mais</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
        {/* segundo        */}
        <Grid item xs={12} sm={6}>
          <Grid item xs={6} sm={12} className={classes.grid2}>
            <Card className={classes.root} variant="outlined">
              <CardContent>
                <Typography variant="h5" component="h2">
                  2 Turma - 12/04/2019
                </Typography>
                <Typography component="p">
                  1 - Fernando
                </Typography>
                <Typography variant="subtitle1" component="p">
                  2 - Fernando
                 </Typography>
                <Typography variant="subtitle1" component="p">
                  3 - Fernando
                 </Typography>
                <Typography variant="subtitle1" component="p">
                  4 - Fernando
                 </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Ver Mais</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
        {/* terceiro        */}
        <Grid item xs={12} sm={6}>
          <Grid item xs={6} sm={12} className={classes.grid2}>
            <Card className={classes.root} variant="outlined">
              <CardContent>
                <Typography variant="h5" component="h2">
                  3 Turma - 12/04/2019
                </Typography>
                <Typography component="p">
                  1 - Fernando
                </Typography>
                <Typography variant="subtitle1" component="p">
                  2 - Fernando
                 </Typography>
                <Typography variant="subtitle1" component="p">
                  3 - Fernando
                 </Typography>
                <Typography variant="subtitle1" component="p">
                  4 - Fernando
                 </Typography>
              </CardContent>
              <CardActions >
                <Button size="small">Ver Mais</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
        {/* Quanrto        */}
        <Grid item xs={12} sm={6}>
          <Grid item xs={6} sm={12} className={classes.grid2}>
            <Card className={classes.root} variant="outlined">
              <CardContent>
                <Typography variant="h5" component="h2">
                  4 Turma - 12/04/2019
                </Typography>
                <Typography component="p">
                  1 - Fernando
                </Typography>
                <Typography variant="subtitle1" component="p">
                  2 - Fernando
                 </Typography>
                <Typography variant="subtitle1" component="p">
                  3 - Fernando
                 </Typography>
                <Typography variant="subtitle1" component="p">
                  4 - Fernando
                 </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Ver Mais</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>

  );
}
