import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { alertHideUserMessage } from '../../store/mdules/alert/actions'
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: 320,
    marginTop: 80
  },
}));

function AlertShow() {
  const classes = useStyles();
  const isShow = useSelector(state => state.alert.showMessage)
  const data = useSelector(state => state.alert.data)
  const dispatch = useDispatch()

  useEffect(() => {
    setTimeout(() => {
      dispatch(alertHideUserMessage())
    }, 3500)
  }, [isShow, dispatch])

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