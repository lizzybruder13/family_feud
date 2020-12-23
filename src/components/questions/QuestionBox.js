import React, { useState } from 'react'
import AnswerBox from './AnswerBox'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'

const QuestionBox = (props) => {

  const [questionState, setQuestionState] = useState(false)

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'left',
      color: theme.palette.text.primary,
    },
    heading: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.primary,
    },
    searchresults: {
      padding: theme.spacing(1),
      textAlign: 'left',
      color: theme.palette.text.secondary,
    },
  }))
  const classes = useStyles()

  const changeQuestionState = () => {
    setQuestionState(!questionState)
  }

  return (
    <>
      <div className={classes.root}>       
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.heading}>
              <a onClick={changeQuestionState}>
                {questionState ? (
                  <h1>{props.question}</h1>
                ) : (
                  <h1>Question</h1>
                )}
              </a>
            
            </Paper>
          </Grid>
          {props.answers.map((answer, index) => (
              <Grid item xs={6}>
                <Paper className={classes.paper}>
                  <AnswerBox 
                    answer={answer} 
                    index={index + 1} 
                    // team1Score={props.team1Score}
                    // setTeam1Score={props.setTeam1Score}
                    // team2Score={props.team2Score}
                    // setTeam2Score={props.setTeam2Score} 
                    team={props.team}
                    totalScore={props.totalScore}
                    setTotalScore={props.setTotalScore}
                  />
                </Paper>
              </Grid>  
          ))}
        </Grid>
      </div>
    </>
  )
}

export default QuestionBox