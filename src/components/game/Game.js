import React, { useState } from 'react'
import QuestionBox from '../questions/QuestionBox'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Score from '../teams/Score'
import { questions } from './Questions'


const Game = () => {

  const [team1Score, setTeam1Score] = useState(0)
  const [team2Score, setTeam2Score] = useState(0)
  const [totalScore, setTotalScore] = useState(0)
  const [team, setTeam] = useState(1)
  const [index, setIndex] = useState(0)

  // let { index } = useParams()
  // let nextIndex = String(parseInt(index, 10) + 1)
  // let nextHREF = '/game/' + nextIndex

 npm 

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      padding: theme.spacing(5)
    },
    teamScore: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'left',
      color: theme.palette.text.primary,
    },
    score: {
      padding: theme.spacing(2),
      textAlign: 'center'
    },
    searchresults: {
      paddingLeft: theme.spacing(20),
      textAlign: 'left',
      color: theme.palette.text.secondary,
    },
  }))
  const classes = useStyles()

  const chooseTeam = () => {
    if (team === 1) {
      setTeam(2)
    }
    if (team === 2) {
      setTeam(1)
    }
  }

  const assignPoints = () => {
    if (team === 1) {
      setTeam1Score(team1Score + totalScore)
      setTotalScore(0)
    }
    if (team === 2) {
      setTeam2Score(team2Score + totalScore)
      setTotalScore(0)
    }
  }

  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <h1>Family Feud</h1>
            </Paper>
          </Grid>

          <Grid item xs={2}>

            <Paper className={classes.paper}>
              <div className={classes.teamScore}>
                <Grid container spacing={1}>
                  <Grid item xs={8}>
                    <Button onClick={chooseTeam}>Team 1:</Button>
                  </Grid>
                  <Grid item xs={4}>

                    <Paper className={classes.score}>
                      <Score score={team1Score} />
                    </Paper>

                  </Grid>
                </Grid>
              </div>
            </Paper>

          </Grid>
          <Grid item xs={2}>

            <Paper className={classes.paper}>
              <div className={classes.teamScore}>
                <Grid container spacing={1}>
                  <Grid item xs={8}>
                    <Button onClick={chooseTeam}>Team 2:</Button>
                  </Grid>
                  <Grid item xs={4}>

                    <Paper className={classes.score}>
                      <Score score={team2Score} />
                    </Paper>

                  </Grid>
                </Grid>
              </div>
            </Paper>

          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paper}>
              <p>It is Team {team}'s turn.</p>
            </Paper>
          </Grid>
          <Grid item xs={2}>

            <Paper className={classes.paper}>
              <div className={classes.teamScore}>
                <Grid container spacing={1}>
                  <Grid item xs={8}>
                    <Button onClick={assignPoints}>TotalScore:</Button>
                  </Grid>
                  <Grid item xs={4}>

                    <Paper className={classes.score}>
                      <Score score={totalScore} />
                    </Paper>

                  </Grid>
                </Grid>
              </div>
            </Paper>

          </Grid>

          <div className={classes.searchresults}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <QuestionBox
                    question={questions[index].question}
                    answers={questions[index].answers}
                    // team1Score={team1Score}
                    // setTeam1Score={setTeam1Score}
                    // team2Score={team2Score}
                    // setTeam2Score={setTeam2Score}
                    team={team}
                    totalScore={totalScore}
                    setTotalScore={setTotalScore}
                  />
                </Paper>
              </Grid>
              <Grid item spacing={3}>
              {index !== 10 ? (
                <Button variant='contained' onClick={changeIndex}>
                Next Round
          </Button>
              ) : (
                <Button variant='contained' disabled>
                  Next Round
            </Button>
              )}
                
              </Grid>
            </Grid>
          </div>
        </Grid>
      </div>
    </>
  )
}

export default Game