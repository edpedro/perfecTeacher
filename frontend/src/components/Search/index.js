import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

import { Search } from '../../store/mdules/course/actions'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '20px 40px',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    width: 600,
    margin: 'auto',

  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },

}));

export default function SearchIconNew() {
  const history = useHistory()
  const dispacth = useDispatch()
  const classes = useStyles();
  const [data, setData] = useState({
    search: ''
  })
  
  function handleOnchange(e) {
    const { name, value } = e.target

    setData({ [name]: value })
  }
  function handleSubmit(e) {
    e.preventDefault()

    if (!data.search) {
      return
    }else{
      dispacth(Search(data))
      history.push('/search')
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Paper className={classes.root}>        
          <InputBase
            className={classes.input}
            name="search"
            placeholder="Qual matéria deseja aprender?"
            inputProps={{ 'aria-label': 'Qual matéria deseja aprender?s' }}
            onChange={handleOnchange}
          />
          <IconButton type="submit" className={classes.iconButton} >
            <SearchIcon />
          </IconButton>
        </Paper>
      </form>
    </>


  );
}