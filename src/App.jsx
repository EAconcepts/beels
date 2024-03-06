import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Login from './screens/Auth/Login'
import Overview from './screens/Dashboard/Overview'
import List from './screens/Dashboard/List'
import PersonalDetails from './screens/Dashboard/PersonalDetails'
import AddAmbassadors from './screens/Dashboard/AddAmbassadors'
import SubAmbassadorDetails from './screens/Dashboard/SubAmbassadorDetails'
import UserPersonalDetails from './screens/Dashboard/UserPersonalDetails'
import AmbassadorsPersonalDetails from './screens/Dashboard/AmbassadorsPersonalDetails'
import AmbassadorForm from './components/AmbassadorForm'
import SuccessModal from './components/modal/SuccessModal'
import DeleteModal from './components/modal/DeleteModal'
import Chat from './screens/Dashboard/Chat'
import MobileSideBar from './components/MobileSideBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>


      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard/overview" element={<Overview />} />
          <Route path="/dashboard/add-ambassador" element={<AddAmbassadors />} />
          <Route path="/dashboard/all" element={<List />} />
          <Route path="/dashboard/personal/overview" element={<PersonalDetails />} />
          <Route path="/dashboard/personal/user" element={<UserPersonalDetails />} />
          <Route path="/dashboard/personal/ambassadors" element={<AmbassadorsPersonalDetails />} />
          <Route path="/dashboard/personal/ambassadors/chat" element={<Chat />} />
          <Route path="/dashboard/subambassadors/details" element={<SubAmbassadorDetails />} />
         
        </Routes>
      </Router>
      {/* <Login /> */}
      {/* <Overview/> */}
      {/* <List /> */}
      {/* <AddAmbassadors /> */}
      {/* <SuccessModal /> */}
      {/* <DeleteModal /> */}
      {/* <AmbassadorsPersonalDetails /> */}
      {/* <UserPersonalDetails /> */}
      {/* <SubAmbassadorDetails /> */}
      {/* <PersonalDetails /> */}
      {/* <Chat /> */}
      {/* <MobileSideBar /> */}
      {/* <AmbassadorForm /> */}
    </>
  )
}

export default App
