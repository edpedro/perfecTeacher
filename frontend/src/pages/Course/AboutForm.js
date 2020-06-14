import React from 'react';
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({
  textfield: {
    minWidth: 540,
  },
}));

export default function AboutForm(props) {
  const classes = useStyles();
  const user = useSelector(state => state.users.user) 
  console.log(user)
  function handleChange(event) {
    const { name, value } = event.target
    props.onChange({ ...props.data, [name]: value })
  }
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Sobre Você
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <TextField
            className={classes.textfield}
            id="outlined-multiline-static"
            label="Título para seu anúncio"
            multiline
            rows={2}
            variant="outlined"
            name="title"
            defaultValue={props.data.title}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            className={classes.textfield}
            id="outlined-multiline-static"
            label="Qual é sua metodologia"
            multiline
            rows={2}
            variant="outlined"
            name="methodology"
            defaultValue={props.data.methodology}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            className={classes.textfield}
            id="outlined-multiline-static"
            label="Apresente-se"
            multiline
            rows={2}
            variant="outlined"
            name="presentation"
            defaultValue={props.data.presentation}
            onChange={handleChange}
          />
        </Grid>
        {user.code === null && 
          <>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="city"
                name="city"
                label="Cidade"
                fullWidth
                autoComplete="billing address-level2"
                defaultValue={props.data.city}
                onChange={handleChange}
              />
            </Grid>


            <Grid item xs={12} sm={6}>
              <TextField
                id="state"
                name="state"
                label="Estado"
                fullWidth
                defaultValue={props.data.state}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="zip"
                name="code"
                label="Cep"
                fullWidth
                autoComplete="billing postal-code"
                defaultValue={props.data.code}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="country"
                name="district"
                label="Bairro"
                fullWidth
                autoComplete="billing country"
                defaultValue={props.data.district}
                onChange={handleChange}
              />
            </Grid>
          </>
        }

      </Grid>
    </React.Fragment>
  );
}