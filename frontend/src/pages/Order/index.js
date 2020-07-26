import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';

import AboutTeacher from './AboutTeacher'
import AboutCard from './AboutCard'

import { AddOrder } from '../../store/mdules/order/actions'

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
      width: 1200,
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
const steps = ['Professor', 'Cartão'];
function getStepContent(step, order, setOrder) {

  switch (step) {
    case 0:
      return <AboutTeacher onChange={value => setOrder(value)} order={order} />;
    case 1:
      return <AboutCard />;
    default:
      return
  }
}

export default function Course() {
  const dispatch = useDispatch()
  const user = useSelector(state => state.users.id)
  const course = useSelector(state => state.course.id)
  const teacherId = useSelector(state => state.course.teacher)

  
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [order, setOrder] = useState({
    name: '',
    data: '',
    information: 'asd',
    address: '',
    cel: '',
    user_id: user,
    teacher_id: teacherId,
    course_id: course,
  })

  const handleNext = () => {
    setActiveStep(activeStep + 1);

  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  function handleSubmit(e) {
    e.preventDefault()   
    dispatch(AddOrder(order))
  }
  return (
    <>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <>
            {activeStep === steps.length ? (
              <Button
                variant="contained"
                className={classes.button1}
                onClick={handleBack}
              >Voltar
              </Button>
            ) : (
                <>
                  {getStepContent(activeStep, order, setOrder)}
                  <div className={classes.buttons}>
                    {activeStep !== 0 && (
                      <Button onClick={handleBack} className={classes.button}>
                        Voltar
                      </Button>
                    )}
                    {activeStep === steps.length - 1 ?
                      (
                        <form onSubmit={handleSubmit}>
                          <Button
                            variant="contained"
                            className={classes.button1}
                            type="submit"
                          >
                            Finalizar
                    </Button>
                        </form>
                      ) :
                      (<Button
                        variant="contained"
                        onClick={handleNext}
                        className={classes.button}
                      >
                        Avançar
                      </Button>
                      )
                    }
                  </div>
                </>
              )}
          </>
        </Paper>
      </main>
    </>
  );
}