import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 20,
  },
  paper: {
    padding: theme.spacing(2),
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Fragment>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              <Grid container spacing={2} >
                <Grid item>
                  <ButtonBase className={classes.image}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.large} />
                  </ButtonBase>
                </Grid>
                <Grid item xs={6} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subtitle1">
                        Fernando
                </Typography>
                      <Typography variant="body2" gutterBottom>
                      Programação Web Para Designers - Php, Js, Css E Html. Formando Em Eng Da Computação Com Empresa Na Area De Desenvolvimento De Software A 3 Anos
                </Typography>                     
                    </Grid>
                    <Grid item>
                      <Typography variant="body2">
                        Recife (Pernambuco)
                </Typography>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1" style={{ cursor: 'pointer' }}>Ver mais</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          {/*  */}
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              <Grid container spacing={2} >
                <Grid item>
                  <ButtonBase className={classes.image}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.large} />
                  </ButtonBase>
                </Grid>
                <Grid item xs={6} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subtitle1">
                        Fernando
                </Typography>
                      <Typography variant="body2" gutterBottom>
                      Programação Web Para Designers - Php, Js, Css E Html. Formando Em Eng Da Computação Com Empresa Na Area De Desenvolvimento De Software A 3 Anos
                </Typography>                     
                    </Grid>
                    <Grid item>
                      <Typography variant="body2">
                        Recife (Pernambuco)
                </Typography>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1" style={{ cursor: 'pointer' }}>Ver mais</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Fragment>

  );
}