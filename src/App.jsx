import { useState } from 'react'
import './App.css'
import Login from './screens/Auth/Login'
import Overview from './screens/Dashboard/Overview'
import List from './screens/Dashboard/List'
import PersonalDetails from './screens/Dashboard/PersonalDetails'
import AddAmbassadors from './screens/Dashboard/AddAmbassadors'
import SubAmbassadorDetails from './screens/Dashboard/SubAmbassadorDetails'
import UserPersonalDetails from './screens/Dashboard/UserPersonalDetails'
import AmbassadorsPersonalDetails from './screens/Dashboard/AmbassadorsPersonalDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Login /> */}
      {/* <Overview/> */}
      {/* <List /> */}
      {/* <AddAmbassadors /> */}
      <AmbassadorsPersonalDetails />
      {/* <UserPersonalDetails /> */}
      {/* <SubAmbassadorDetails /> */}
      {/* <PersonalDetails /> */}
    </>
  )
}

export default App
