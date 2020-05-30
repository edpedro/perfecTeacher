import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Avatar from '@material-ui/core/Avatar';



const useStyles = makeStyles((theme) => ({
  grid1: {
    flexGrow: 1,
    textAlign: 'center',
    marginTop: 100,
  },
  grid2: {
    textAlign: 'center',
    alignContent: 'center',
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    marginLeft: 30,
  },
}))

export default function Subpanel() {
  const classes = useStyles();
  const data = useSelector(state => state.course.adverts)

  return (
    <Fragment>
      {/* Primeira linha */}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4} className={classes.grid1}>
          <Typography variant="h5" gutterBottom>
            Criar novo anuncio
            <Link to="/course">
             <Fab color="primary" aria-label="add" style={{ margin: 4 }}>
              <AddIcon />
            </Fab>
            </Link>           
          </Typography>
        </Grid>
      </Grid>
      {/* Segunda linha */}
      <Grid container spacing={3}>
        {data && data.map((e, key) => {
          return (
            <Grid item xs={12} sm={10} key={key}>
              <Grid item xs={6} sm={12} className={classes.grid2}>
                <Card className={classes.root} variant="outlined">
                  <CardContent>
                    <Typography style={{ marginBottom: -30, marginTop: 30 }} component="p">
                      {e.title}
                    </Typography>
                    <Typography style={{ marginBottom: -30, marginTop: 30 }} component="p">
                      20/20/2020
                  </Typography>
                    <Avatar alt="Remy Sharp" className={classes.large} />
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          )
        })}
      </Grid>
    </Fragment>
  );
}
