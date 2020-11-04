import React from 'react'
import Profile from './Profile'

const App = () => {
  return (
    <div>
      <div style={{ fontSize: '25px' }}>Props:</div>
      <Profile
        name='Abcd'
        education='Software Engineering'
        age={21}
      ></Profile>

      <Profile
        name='Def'
        education='Electrical Engineering'
        age={23}
      ></Profile>

      <Profile
        name='Ghi'
        education='Civil Engineering'
        age={25}
      ></Profile>

      <Profile
        name='Jkl'
        education='Electronics Engineering'
        age={18}
      ></Profile>
    </div>
  )
}

export default App;
