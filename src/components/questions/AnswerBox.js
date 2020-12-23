import React, { useState } from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'

const AnswerBox = (props) => {

  const [answerState, setAnswerState] = useState(true)

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    answer: {
      padding: theme.spacing(1),
      textAlign: 'left',
      color: theme.palette.text.primary,
    },
    score: {
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

  const changeState = () => {
    if (answerState === true) { 
      setAnswerState(!answerState)
      let score = props.totalScore
      score = score + parseInt(props.answer.score, 10)
      props.setTotalScore(score)
      
    } else {
      setAnswerState(!answerState)
    }
  }

  // if (props.team === 1) {
        
  //   let score = props.team1Score
    
  //   score = score + parseInt(props.answer.score, 10)
    
  //   props.setTeam1Score(score)
  // }
  // if (props.team === 2) {
  //   let score = props.team2Score
  //   score = score + parseInt(props.answer.score, 10)
  //   props.setTeam2Score(score)
  // }

  return (
    <>
      <a onClick={changeState}>
        {answerState ? (
          <div>
            <Grid container spacing={0}>
              <Grid item xs={12}>
                <Paper className={classes.score}>
                  <p>{props.index}</p>
                </Paper>
              </Grid>
            </Grid>
          </div>
        ) : (
            <div classeName={classes.root}>
              <Grid container spacing={0}>
                <Grid item xs={10}>
                  <Paper className={classes.answer}>
                    <p>{props.answer.answer}</p>
                  </Paper>
                </Grid>
                <Grid item xs={2}>
                  <Paper className={classes.score}>
                    <p>{props.answer.score}</p>
                  </Paper>
                </Grid>
              </Grid>
            </div>
          )}
      </a>

    </>
  )
}

export default AnswerBox