import React from 'react'
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  body: {
    backgroundColor: '#5FCF80'
  },
  root: {
    marginTop: 70,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
  },
  paperUn: {
    padding: theme.spacing(1),
  },
  large: {
    marginLeft: 60,
    marginTop: 30,
    width: theme.spacing(18),
    height: theme.spacing(18),
  },
  button: {
    borderColor: '#5FCF80',
    color: '#5FCF80',
    padding: 8,
    width: 180,
    '&:hover': {
      backgroundColor: '#5FCF80',
      color: "#FFFFFF"
    }
  },
  title: {
    color: '#5FCF80',
    fontWeight: 'bold'
  },
}));


function Profile() {
  const user = useSelector(state => state.users.user)
  const course = useSelector(state => state.course.showId)


  const classes = useStyles();
  return (
    <div className={classes.body}>
      <Container maxWidth="lg" className={classes.container}>
        <div className={classes.root}>

          {/* Primeiro card */}
          <Grid container wrap="nowrap" spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Grid container wrap="nowrap" spacing={2}>
                  <Grid item>
                    <Avatar alt="Remy Sharp"
                      src={`http://localhost:3333/${course && course.image}`}
                      className={classes.large}
                    />
                  </Grid>
                  <Grid item xs>
                    <Box fontWeight="fontWeightBold" m={1}>
                      <Typography variant="h4">{course && course.name}</Typography>
                    </Box>
                    <Typography variant="h6">{user && user.city} - {user && user.uf}</Typography>
                    <Typography variant="subtitle1">{course && course.title} - {course && course.competence}.</Typography>
                    <Typography variant="h4">R${course && course.hourValue} /h</Typography>
                    <Button variant="outlined" className={classes.button}>
                      Solicitar Aula
                 </Button>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>

          {/* Segundo card */}
          <Grid container spacing={3}>
            <Grid item xs={3} style={{ textAlign: 'center' }}>
              <Paper className={classes.paperUn}>
                <Box fontSize={25} fontWeight="fontWeightBold" className={classes.title} mb={2}>Níveis</Box>
                <Button variant="contained">Todos</Button>
              </Paper>
            </Grid>
            <Grid item xs={9}>
              <Paper className={classes.paperUn}>
                <Box fontSize={25} fontWeight="fontWeightBold" className={classes.title} mb={2}>Formação</Box>
                <Typography variant="h5" mb={2}>Estudante de Ciência da Computação dou aulas sobre programação em Java para desktop, Java para Web, PHP, Banco de dados SQL, Estrutura de Dados, entre outros</Typography>
              </Paper>
            </Grid>
            <Grid item xs={3} style={{ textAlign: 'center' }}>
              <Paper className={classes.paperUn}>
                <Box fontSize={25} fontWeight="fontWeightBold" className={classes.title} mb={2}>Aulas dadas</Box>
                <Button variant="contained">Individual</Button>
                <Button variant="contained">Em grupo</Button>
              </Paper>
            </Grid>
            <Grid item xs={9}>
              <Paper className={classes.paperUn}>
                <Box fontWeight="fontWeightBold" fontSize={20} mt={2} mb={2}>Apresentação</Box>
                <Typography variant="subtitle1" mt={2}>{course && course.presentation}</Typography>
              </Paper>
            </Grid>
            <Grid item xs={3} style={{ textAlign: 'center' }}>
              <Paper className={classes.paperUn}>
                <Box fontSize={25} fontWeight="fontWeightBold" className={classes.title} mb={2}>Matérias ensinadas</Box>
                <Button variant="contained">Programação</Button>
                <Button variant="contained">React</Button>
                <Button variant="contained">PHP</Button>
                <Button variant="contained">Java</Button>
              </Paper>
            </Grid>
            <Grid item xs={9}>
              <Paper className={classes.paperUn}>
                <Box fontSize={25} fontWeight="fontWeightBold" className={classes.title} mb={2}>Metodologia</Box>
                <Typography variant="subtitle1" mt={2}>{course && course.methodology}</Typography>
              </Paper>
            </Grid>
          </Grid>

          {/* Terceiro card */}
          <Grid container spacing={3}>
            <Grid item xs={3} style={{ textAlign: 'center' }}>
              <Paper className={classes.paper}>
                <Box fontSize={25} fontWeight="fontWeightBold" className={classes.title} mb={2}>Aulas serão</Box>
                <Button variant="contained">Casa do Aluno</Button>
                <Button variant="contained">Por webcam</Button>
              </Paper>
            </Grid>
            <Grid item xs={9}>
              <Paper className={classes.paperUn}>
                <Box fontSize={25} fontWeight="fontWeightBold" className={classes.title} mb={2}>Tarifas</Box>
                <Typography variant="subtitle1" mt={2}>Preço para aulas por webcam: R${course && course.webValue}</Typography>
                <Typography variant="subtitle1" mt={2}>Preço do deslocamneto: R${course && course.offsetValue}</Typography>
                <Typography variant="subtitle1" mt={2}>Propor um valor decrescente para pacote de aulas: R${course && course.packageValue}</Typography>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>

  )
}

export default Profile