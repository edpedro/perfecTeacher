import React from 'react';
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
  },
  textfield: {
    minWidth: 540,
    color: '#000000'
  },
  large: {
    width: theme.spacing(19),
    height: theme.spacing(19),
  },
  cardAct: {
    justifyContent: 'center'
  },
}));

export default function AboutForm() {
  const course = useSelector(state => state.course.update)
  const classes = useStyles();


  // function handleChange(event) {
  //   const { name, value } = event.target

  // }
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Card>
            <CardContent>
              <CardActions className={classes.cardAct}>
                <Avatar alt="Remy Sharp" src="" className={classes.large} />
              </CardActions>
              <CardActions className={classes.cardAct}>
                <Typography variant="h5" component="h2">
                  {course?.name}
              </Typography>
              </CardActions>
              <CardActions className={classes.cardAct}>
                <Typography className={classes.pos} color="textSecondary">
                  xxxxxxxxx Estrelas
              </Typography>
              </CardActions>
              <CardActions className={classes.cardAct}>
                <Typography variant="body2" component="p">
                  1 aula gratuita!
              </Typography>
              </CardActions>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Grid item xs={12}>
            <Card className={classes.root}>
              <CardContent>
                <Typography variant="h3" component="h2">
                  Finalizar pedido
                </Typography>
                <Typography variant="body2" component="h2">
                  Assinatura mensal
                </Typography>
                <CardActions>
                  <Typography variant="h2" component="h2">
                    R$80
                </Typography>
                </CardActions>
                <Typography variant="body2" component="p">
                </Typography>
                <CardActions>
                  <Typography variant="h6" component="h2">
                    Cartão de Credito
                </Typography>
                </CardActions>
                <CardActions>
                  <Typography variant="h6" component="h2">
                   Todas as informações do cartão aqui.....
                </Typography>
                </CardActions>
              </CardContent>
            </Card>
          </Grid>        
        </Grid>
      </Grid>
    </>
  );
}