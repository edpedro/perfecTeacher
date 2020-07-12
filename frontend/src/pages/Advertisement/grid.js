import React, { Fragment, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import Fab from '@material-ui/core/Fab';
import Avatar from '@material-ui/core/Avatar';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import ListIcon from '@material-ui/icons/List';

import { GetAdverts, DeleteAdverts, ShowIdAdverts } from '../../store/mdules/course/actions'

import history from '../../services/history'

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: 150
  },
  grid1: {
    flexGrow: 1,
    textAlign: 'center',
  },
  grid2: {
    textAlign: 'center',
    alignContent: 'center',    
  },
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    marginLeft: 30,
  },
}))

export default function Subpanel() {
  const dispatch = useDispatch()
  const classes = useStyles();
  const data = useSelector(state => state.course.adverts)
  const quant = useSelector(state => state.course.quant)
  const id = useSelector(state => state.users.id)
  const user = useSelector(state => state.users.user)

  useEffect(() => {
    dispatch(GetAdverts(id))
  }, [id, dispatch])

  function handleDelete(id) {
    const resl = window.confirm("Deseja deletar esse Anuncios")
    if (resl) {
      dispatch(DeleteAdverts(id))
    }
  }
  function handleUpdate(id) {

    dispatch(ShowIdAdverts(id))

    history.push("/course")
  }
  function handleCreateCourse() {

    dispatch(ShowIdAdverts())

    history.push("/course")
  }
  function handleShowProfile(id) {

    dispatch(ShowIdAdverts(id))
    history.push("/profile")

  }
  return (
    <Fragment>
      {/* Primeira linha */}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4} className={classes.grid1}>
          <Typography variant="subtitle1" gutterBottom style={{ color: '#DF0101' }}>
            Limite de 3 anuncios
          </Typography>
          {quant < 3 &&
            <Typography variant="h5" gutterBottom>
              Criar novo anuncio
                <Fab color="primary" aria-label="add" style={{ margin: 4 }} onClick={handleCreateCourse}>
                <AddIcon />
              </Fab>
            </Typography>
          }
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
                    <Typography component="p">
                      {e.title}
                    </Typography>
                    <Typography component="p">
                      {e.competence}
                    </Typography>
                    <Typography variant="button">
                      {e.matter} - {e.subMatter}
                    </Typography>
                    {user && user.image ?
                      <Avatar alt="Remy Sharp"
                        src={`http://localhost:3333/${user.image}`}
                        className={classes.large}
                       
                      />
                      :
                      <Avatar alt="Remy Sharp" src="" className={classes.large} />
                    }
                    <Button onClick={() => handleShowProfile(e.id)}>
                      <ListIcon style={{ color: "#01DF01" }} />
                    </Button>
                    <Button onClick={() => handleUpdate(e.id)}>
                      <EditIcon style={{ color: "#0040FF" }} />
                    </Button>
                    <Button onClick={() => handleDelete(e.id)}>
                      <DeleteForeverIcon style={{ color: "#DF0101" }} />
                    </Button>
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
