import React from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';

import Search from '../../components/Search'
import { ShowIdAdverts } from '../../store/mdules/course/actions'

const useStyles = makeStyles((theme) => ({
  body: {
    backgroundColor: '#5FCF80',
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
    marginBottom: 4,
    textAlign: 'center',
  },
  large: {
    marginLeft: 60,
    marginTop: 30,
    width: theme.spacing(18),
    height: theme.spacing(18),
  },
  button: {
    backgroundColor: '#5FCF80',
    color: "#FFFFFF",
    padding: 8,
    width: 180,
    '&:hover': {
      backgroundColor: '#FFFFFF',
      borderColor: '#5FCF80',
      color: "#5FCF80"
    }
  },
  title: {
    color: '#5FCF80',
    fontWeight: 'bold',
    justifyItems: 'center',
    alignItems: 'center'
  },
  formControl: {
    margin: theme.spacing(1),
  },
}));


function PageSeach() {
  const getSearch = useSelector(state => state.course.search)
  const chave = useSelector(state => state.course.chave)
  const classes = useStyles();
  const dispatch = useDispatch()
  const history = useHistory()

  function handleShowProfile(id) {

    dispatch(ShowIdAdverts(id))
    history.push("/profile")

  }

  return (

    <div className={classes.body}>
      <Container maxWidth="lg" className={classes.container}>
        <div className={classes.root}>
          
          {
            getSearch === undefined || getSearch <= 0
              ?
              <>
                <Grid container wrap="nowrap" spacing={3}>
                  <Grid item xs={12}>
                    <Search />
                  </Grid>
                </Grid>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Paper className={classes.paperUn}>
                      <Grid container wrap="nowrap" spacing={2}>
                        <Grid item xs style={{ textAlign: 'center' }}>
                          <Box fontWeight="fontWeightBold" m={1}>
                            {getSearch === undefined
                              ?
                              <Typography variant="h6" >Digite no campo de buscar</Typography>
                              :
                              <Typography variant="h6" style={{ color: '#DC143C' }}>"{chave && chave}" Não encontrado </Typography>
                            }
                          </Box>
                        </Grid>
                      </Grid>
                    </Paper>

                  </Grid>
                </Grid>
              </>
              :
              <>
                <Grid container wrap="nowrap" spacing={3}>
                  <Grid item xs={12}>
                    <Search />
                  </Grid>
                </Grid>
                <Grid container spacing={3}>
                  <Grid item xs={3} style={{ textAlign: 'center' }}>
                    <Paper className={classes.paperUn}>
                      <Box fontSize={25} fontWeight="fontWeightBold" className={classes.title} mb={2}>Avaliação</Box>
                      <FormControl component="fieldset" className={classes.formControl}>
                        <FormGroup>
                          <FormControlLabel
                            control={<Checkbox style={{ color: '#5FCF80' }} />}
                            label="Todos"                            
                          />
                          <FormControlLabel
                            control={<Checkbox style={{ color: '#5FCF80' }} />}
                            label="Mais Avaliado"
                          />
                        </FormGroup>
                      </FormControl>

                    </Paper>
                    <Paper className={classes.paper}>
                      <Box fontSize={25} fontWeight="fontWeightBold" className={classes.title} mb={2}>Preço</Box>
                      <FormControl component="fieldset" className={classes.formControl}>
                        <FormGroup>
                          <FormControlLabel
                            control={<Checkbox style={{ color: '#5FCF80' }} />}
                            label="Maior Preços"
                          />
                          <FormControlLabel
                            control={<Checkbox style={{ color: '#5FCF80' }} />}
                            label="Menor Preços"
                          />
                        </FormGroup>
                      </FormControl>
                    </Paper>
                    <Paper className={classes.paperUn} style={{ marginTop: 4 }}>
                      <Box fontSize={25} fontWeight="fontWeightBold" className={classes.title} mb={2}>Nível</Box>
                      <FormControl component="fieldset" className={classes.formControl}>
                        <FormGroup>
                          <FormControlLabel
                            control={<Checkbox style={{ color: '#5FCF80' }} />}
                            label="Todos"                            
                          />
                        </FormGroup>
                      </FormControl>
                    </Paper>
                    <Paper className={classes.paper}>
                      <Box fontSize={25} fontWeight="fontWeightBold" className={classes.title} mb={2}>Localização</Box>
                      <FormControl component="fieldset" className={classes.formControl}>
                        <FormGroup>
                          <FormControlLabel
                            control={<Checkbox style={{ color: '#5FCF80' }} />}
                            label="Todos"                            
                          />
                          <FormControlLabel
                            control={<Checkbox style={{ color: '#5FCF80' }} />}
                            label="Mais Proximo"
                          />
                        </FormGroup>
                      </FormControl>
                    </Paper>
                  </Grid>
                  <Grid item xs={9}>
                    <Paper className={classes.paperUn}>
                      <Grid container wrap="nowrap" spacing={2}>
                        <Grid item xs style={{ textAlign: 'center' }}>
                          <Box fontWeight="fontWeightBold" m={1}>
                            <Typography variant="h6">{getSearch?.length} resultado{getSearch?.length > 1 ? 's' : ''} para "{chave && chave}"</Typography>
                          </Box>
                        </Grid>
                      </Grid>
                    </Paper>
                    {getSearch?.map(profile => (
                      <Paper className={classes.paperUn} key={profile.id}>
                        <Grid container wrap="nowrap" spacing={2}>
                          <Grid item>
                            <Avatar alt="Remy Sharp" src={`http://localhost:3333/${profile.image}`} className={classes.large} style={{ textAlign: 'center' }} />
                          </Grid>
                          <Grid item xs style={{ textAlign: 'center' }}>
                            <Box fontWeight="fontWeightBold" m={1}>
                              <Typography variant="h4">{profile.name}</Typography>
                            </Box>
                            <Typography variant="h6">{profile.city} - {profile.uf}</Typography>
                            <Typography variant="subtitle1">{profile.title}</Typography>
                            <Typography variant="h4">R${profile.webValue}/h</Typography>
                            <Button variant="contained" color="secondary"
                              className={classes.button}
                              onClick={() => { handleShowProfile(profile.id) }}
                            >
                              Ver perfil
                            </Button>
                          </Grid>
                        </Grid>
                      </Paper>
                    ))}
                  </Grid>
                </Grid>

              </>
          }
        </div>
      </Container>


    </div>

  )
}

export default PageSeach