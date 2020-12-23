import React from 'react'
import Button from '@material-ui/core/Button';

const Home = () => {
  let team1 = ['Wossen', 'Catherine', 'Jeff', 'Josette', 'Kristi', 'Moa', 'Bryan', 'Ron']
  let team2 = ['Dave', 'Kim', 'Eddie', 'Tim', 'Kayla', 'Maria', 'John', 'Ian']

  return (
    <>
      <h1 style={{paddingLeft: '50px'}}>Welcome to Family Feud!</h1>

      <table style={{ width: '25%' }}>
        <th>
          <h1>
            <u>
              Team 1
            </u>
          </h1>
        </th>
        <th>
          <h1>
            <u>
              Team 2
            </u>
          </h1>
        </th>
        
        {team1.map((player, index) => (
            <tr>
              <td style={{ textAlign: 'center' }}>
                <h3>
                  {player}
                </h3>
              </td>
              <td style={{ textAlign: 'center' }}>
                <h3>
                  {team2[index]}
                </h3>
              </td>
            </tr>
        ))}
      </table>

      <Button variant='contained' href='/game'>
        Let's Play!
      </Button>
    </>
  )
}

export default Home