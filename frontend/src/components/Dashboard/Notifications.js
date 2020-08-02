import React, { useRef, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import Popover from '@material-ui/core/Popover'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';

import { getOrder } from '../../store/mdules/order/actions'

const useStyles = makeStyles((theme) => ({
  list: {
    width: 300,
  },
}));

function Notifications() {
  const dispatch = useDispatch()
  const classes = useStyles();
  const ref = useRef(null)
  const [isOpen, setIsOpen] = useState(false)

  const id = useSelector(state => state.users.id)
  const showOrde = useSelector(state => state.order.showOrdes)
  const quantity = useSelector(state => state.order.legt)


  const handleOpen = () => {
    setIsOpen(true)
  }
  const handleClose = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    if (id) {
      dispatch(getOrder(id))
    }
    // eslint-disable-next-line
  }, [id, dispatch])

  return (
    <>
      <IconButton color="inherit" ref={ref} onClick={handleOpen}>
        <Badge badgeContent={quantity && quantity} color="secondary">
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <Popover
        onClose={handleClose}
        open={isOpen}
        anchorEl={ref.current}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Box p={2}>
          <Typography variant="h6" color="textPrimary">
            Notificação
          </Typography>
        </Box>
        <List>
          {showOrde && showOrde.map((or, key) => (
            or && or !== ''
              ?
              <>
                <ListItem className={classes.list} key={or.id}>
                  <ListItemAvatar>
                    <Avatar>
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={or && or.name} secondary={or && or.address} />
                  <Link to="/pedido">
                    <Button variant="contained" color="primary" onClick={handleClose}>
                      Ver
                  </Button>
                  </Link>
                </ListItem>
              </>

              :
              ''
          ))}
        </List>
      </Popover>
    </>

  )
}

export default Notifications