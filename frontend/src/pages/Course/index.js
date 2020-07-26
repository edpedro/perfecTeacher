import React, { useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AboutForm from './AboutForm'
import ValueFrom from './ValueForm'
import CourseFrom from './CourseForm'

import { AddCourse } from '../../store/mdules/course/actions'

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
    // backgroundColor: '#5FCF80'
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    marginTop: 100,
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
    borderColor: "#5FCF80"

  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
    color: '#ffff',
    backgroundColor: '#5FCF80',
    '&:hover': {
      backgroundColor: '#5FCF80',
    },
  },
  button1: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
    color: '#ffff',
    backgroundColor: '#5FCF80',
    '&:hover': {
      backgroundColor: '#5FCF80',
    },

  },
  from1: {
    marginLeft: 150
  },
}));
const steps = ['Curso', 'Sobre você', 'Valor'];
function getStepContent(step, setData, data) {

  switch (step) {
    case 0:
      return <CourseFrom onChange={value => setData(value)} data={data} />;
    case 1:
      return <AboutForm onChange={value => setData(value)} data={data} />;
    case 2:
      return <ValueFrom onChange={value => setData(value)} data={data} />;
    default:
      return
  }
}

export default function Course() {
  const user = useSelector(state => state.users.id)
  const course = useSelector(state => state.course.update) 
  const edit = course && course.id
 
  const [data, setData] = useState({
    subjects_id: '',
    sub_subjects_id: '',
    competence: '',
    homeClasses: '',
    studentClasses:'' ,
    webCamClasses: '',
    title: '',
    methodology: '',
    presentation: '',
    city: '',
    code: '',
    district: '',
    uf: '',
    packageValue: '',
    offsetValue: '',
    webValue: '',
    hourValue: '',
    user_id: user
  })

  useEffect(() => {
    if (course) {
      return setData(course)
    }
  }, [course])
 
  const dispatch = useDispatch()
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);

  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  function handleSubmit(e) {
    e.preventDefault()
    dispatch(AddCourse(data, edit))
  }
  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Cadastro do Curso
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (

              <form onSubmit={handleSubmit} className={classes.from1}>

                <Button
                  variant="contained"
                  className={classes.button1}
                  onClick={handleBack}
                >Voltar
            </Button>
                <Button
                  variant="contained"
                  className={classes.button1}
                  type="submit"
                >Finalizar
            </Button>
              </form>

            ) : (
                <React.Fragment>
                  {getStepContent(activeStep, setData, data)}
                  <div className={classes.buttons}>
                    {activeStep !== 0 && (
                      <Button onClick={handleBack} className={classes.button}>
                        Voltar
                      </Button>
                    )}
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      className={classes.button}
                    >
                      Avançar
                    </Button>
                  </div>
                </React.Fragment>
              )}
          </React.Fragment>
        </Paper>
      </main>
    </React.Fragment>
  );
}