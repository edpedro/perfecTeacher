import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { alertHideUserMessage } from '../../store/mdules/alert/actions'
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: 320,
  },
}));

function AlertShow() {
  const classes = useStyles();
  const dispatch = useDispatch()
  const isShow = useSelector(state => state.alert.showMessage)
  const data = useSelector(state => state.alert.data)

  useEffect(() => {
    setTimeout(() => {
      dispatch(alertHideUserMessage())
    }, 2500)
  })

  return (
    <div className={classes.root}>
      {isShow && (
        <Alert variant="filled" severity={data.severity}>
          {data.message}
        </Alert>
      )
      }
    </div>

  );
}

export default AlertShow