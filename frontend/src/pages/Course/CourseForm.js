import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';

import { GetSubjects, GetSub_Subjects } from '../../store/mdules/course/actions'

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 260,
  },
}));

export default function CourseFrom(props) {
  const classes = useStyles();
  const [novoSubject, setNovoSubject] = useState()
  const subjects = useSelector(state => state.course.subject)
  const sub_subjects = useSelector(state => state.course.sub_subject)

  const dispatch = useDispatch()
  const [checked, setChecked] = useState({
    studentClasses: true,
    webCamClasses: true,
    homeClasses: true
  });

  function handleChange(event) {
    const { name, value } = event.target

    setChecked({ ...checked, [event.target.name]: event.target.checked });
    props.onChange({ ...props.data, ...checked, [name]: value })

  }
  //Primeiro select
  function handleChangeSelect1(event) {
    const { name, value } = event.target
    //Filter, verificar ser materia e igual a sub materia
    const novoSub_subject = sub_subjects => sub_subjects.subjects_id === value;
    const novoSub = sub_subjects.filter(novoSub_subject);

    setNovoSubject(novoSub)

    props.onChange({ ...props.data, [name]: value })
  }
  //segundo select
  function handleChangeSelect2(event) {
    const { name, value } = event.target
    props.onChange({ ...props.data, [name]: value })
  }

  useEffect(() => {

    dispatch(GetSubjects())
    dispatch(GetSub_Subjects())
    
  }, [dispatch])
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Curso
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="age-native-simple">Materia</InputLabel>
            <Select
              native
              name="subjects_id"
              value={props.data ? props.data.subjects_id : ''}
              onChange={handleChangeSelect1}
            >
              <option aria-label="None" value="" />
              {subjects &&
                subjects.map((e, key) => {
                  return <option value={e.id} key={key}>{e.matter}</option>
                })
              }
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="age-native-simple">Todas as materias</InputLabel>
            <Select
              native
              name="sub_subjects_id"
              value={props.data ? props.data.sub_subjects_id : ''}
              onChange={handleChangeSelect2}
            >
              <option aria-label="None" value="" />
              {novoSubject &&
                novoSubject.map((e, key) => {
                  return <option value={e.id} key={key}>{e.subMatter}</option>
                })
              }

            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="competence"
            label="Adicione outras competências"
            fullWidth
            autoComplete="billing address-line1"
            value={props.data ? props.data.competence : ''}

            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" />}
            label="Eu posso receber o aluno em minha casa "
            name="homeClasses"
            value={props.data && props.data.homeClasses}
            checked={checked.homeClasses}
            onChange={handleChange}
          />
          <FormControlLabel
            control={<Checkbox color="secondary"

            />}
            label="Eu posso me deslocar à casa do aluno "
            name="studentClasses"
            value={props.data && props.data.studentClasses}
            checked={checked.studentClasses}
            onChange={handleChange}

          />
          <FormControlLabel
            control={<Checkbox color="secondary" />}
            label="Eu posso dar aulas por webcam "
            name="webCamClasses"
            value={props.data && props.data.webCamClasses}
            checked={checked.webCamClasses}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}