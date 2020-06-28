import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  textfield: {
    minWidth: 260,
  },
  textfield1: {
    minWidth: 550,
  },
}));

export default function ValueFrom(props) { 
  const classes = useStyles();

  function handleChange(event) {
    const { name, value } = event.target
    props.onChange({ ...props.data, [name]: value })
  }

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>

      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          {/* <TextField id="outlined-basic" 
        label="Telefone" 
        variant="outlined" 
        className={classes.textfield}/> */}
        </Grid>
        <Grid item xs={12} sm={6}>
          {/* <TextField 
        id="outlined-basic"
        label="Celular"
        variant="outlined"
        className={classes.textfield}/>        */}
        </Grid>
        <Grid item xs={12}>
          <TextField           
            label="O valor pela hora"
            variant="outlined"
            name="hourValue"
            defaultValue={props.data && props.data.hourValue}
            onChange={handleChange}
            className={classes.textfield1} />
        </Grid>
        <Grid item xs={12}>
          <TextField            
            label="indicar um valor diferente para aulas por webcam"
            variant="outlined"
            name="webValue"
            defaultValue={props.data && props.data.webValue}
            onChange={handleChange}
            className={classes.textfield1} />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField            
            label="Adicionar uma taxa de deslocamento"
            variant="outlined"
            name="offsetValue"
            defaultValue={props.data && props.data.offsetValue}
            onChange={handleChange}
            className={classes.textfield1} />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField           
            label="Propor um valor decrescente para um pacote de aulas"
            variant="outlined"
            name="packageValue"
            defaultValue={props.data && props.data.packageValue}
            onChange={handleChange}
            className={classes.textfield1} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}