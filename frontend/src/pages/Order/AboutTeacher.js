import React from 'react';
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
  },
  textfield: {
    minWidth: 540,
  },
  large: {
    width: theme.spacing(19),
    height: theme.spacing(19),
  },
  cardAct: {
    justifyContent: 'center'
  },
}));

export default function AboutForm(props) {
  const user = useSelector(state => state.users.user)
  const course = useSelector(state => state.course.update)
  const classes = useStyles();


  function handleChange(event) {
    const { name, value } = event.target
    props.onChange({ ...props.order, [name]: value })
  }
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
                  Marque sua aula
                </Typography>
                <Typography variant="body2" component="h2">
                  e comece seu aprendizado com {course?.name}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  Conte a {course?.name} o que você deseja aprender em suas aulas
                </Typography>
                <TextField
                  className={classes.textfield}
                  defaultValue={`Olá ${course?.name}, Eu me chamo ${user?.name} e procuro um professor de Programação para mim. Eu gostaria de ter aulas na sua ou na minha casa O ideal é que a primeira aula seja o mais rápido possível Isso te convém? Caso não seja a melhor data, podemos combinar para um outro dia. Pode entrar em contato comigo, para que possamos combinar os últimos detalhes da aula? Um ótimo dia e até breve, ${course?.name}`}
                  multiline
                  rows={6}
                  variant="outlined"
                  name="information"
                  onChange={handleChange}
                />
                <CardActions>
                  <Typography variant="h6" component="h2">
                    Para quem é esta aula?
                </Typography>
                </CardActions>
                <TextField variant="outlined"
                  placeholder="Nome(a)"
                  className={classes.textfield}
                  name="name"
                  onChange={handleChange}
                />
                <CardActions>
                  <Typography variant="h6" component="h2">
                    Data da primeira aula
                </Typography>
                </CardActions>
                <TextField
                  variant="outlined"
                  placeholder="Data para inicio"
                  name="data"
                  onChange={handleChange}
                />
                <CardActions>
                  <Typography variant="h6" component="h2">
                    Seus dados de contato
                </Typography>
                </CardActions>
                <TextField
                  style={{ marginRight: 2 }}
                  variant="outlined"
                  placeholder="Seu endereço"
                  name="address"
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  placeholder="Celular"
                  name="cel"
                  onChange={handleChange}
                />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}