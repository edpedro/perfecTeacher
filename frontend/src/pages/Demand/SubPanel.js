import React, { Fragment, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { getOrder } from '../../store/mdules/order/actions'

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: 150,
    display: 'flex',
    marginBottom: 10,
    width: 700,
  },
  large: {
    width: theme.spacing(13),
    height: theme.spacing(13),
    marginLeft: 30,
  }
}))

export default function SubPanel() {
  const dispacth = useDispatch()
  const id = useSelector(state => state.users.id) 
  const showOrde = useSelector(state => state.order.showOrdes)
  const showAl = useSelector(state => state.order.showAls)
  const showProf = useSelector(state => state.order.showProfs)
  const classes = useStyles();

  useEffect(() => {
    if (id) {
      dispacth(getOrder(id))
    }

  }, [id, dispacth])

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Fragment>
      <Grid container spacing={3}>
        {showProf && showProf.map((prof, key) => {
          if (prof) {
            return (
              <Card className={classes.root} key={key}>
                <CardContent>
                  {prof && prof.image
                    ? <Avatar alt="Remy Sharp"
                      src={`http://localhost:3333/${prof.image}`}
                      className={classes.large}
                    />
                    :
                    <Avatar alt="Remy Sharp"
                      className={classes.large}
                    />
                  }
                </CardContent>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {prof && prof.name}
                  </Typography>
                  <Typography variant="body2" component="p">
                    {prof && prof.city}  {prof && prof.uf}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {prof && prof.email}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant="outlined" color="secondary">
                    Cancelar
            </Button>
                </CardActions>
              </Card>
            )
          }
        })}
        {showAl && showAl.map((al, key) => {
          if (al) {
            return (
              <Card className={classes.root} key={key}>
                <CardContent>
                  {al && al.image
                    ? <Avatar alt="Remy Sharp"
                      src={`http://localhost:3333/${al.image}`}
                      className={classes.large}
                    />
                    :
                    <Avatar alt="Remy Sharp"
                      className={classes.large}
                    />
                  }
                </CardContent>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {al && al.name}
                  </Typography>
                  <Typography variant="body2" component="p">
                    {al && al.city}  {al && al.uf}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {al && al.email}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant="outlined" onClick={handleClickOpen}>
                    Exibir
                  </Button>
                  <Button variant="outlined" color="primary">
                    Confirmar
                  </Button>
                  <Button variant="outlined" color="secondary">
                    Cancelar
                  </Button>
                </CardActions>
              </Card>
            )
          }
        })}
        <div>
          {
            showOrde && showOrde.map((or, key) => {
              if (or) {
                return (
                  <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    key={key}
                  >
                    <DialogTitle id="alert-dialog-title">{"Dados do aluno"}</DialogTitle>
                    <DialogContent style={{ width: 400 }}>
                      <DialogContentText id="alert-dialog-description" style={{ color: '#000000' }}>
                        Esta aula é para
                    </DialogContentText>
                      <DialogContentText id="alert-dialog-description">
                        {or && or.name}
                      </DialogContentText>
                      <DialogContentText id="alert-dialog-description" style={{ color: '#000000' }}>
                        Data da primeira aula
                    </DialogContentText>
                      <DialogContentText id="alert-dialog-description">
                        {or && or.data}
                      </DialogContentText>
                      <DialogContentText id="alert-dialog-description" style={{ color: '#000000' }}>
                        Seus dados de contato
                    </DialogContentText>
                      <DialogContentText id="alert-dialog-description">
                        {or && or.address}  {or && or.cel}
                      </DialogContentText>
                    </DialogContent>

                    <DialogActions>
                      <Button onClick={handleClose} color="primary">
                        Fechar
               </Button>
                    </DialogActions>
                  </Dialog>
                )
              }
            })
          }
        </div>
      </Grid>    
    </Fragment>
  );
}
