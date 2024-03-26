import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./screens/Auth/Login";
import Chat from "./screens/Dashboard/Chat";
// import PersonalTasks from "./screens/Profile/PersonalTasks";
import AuthContextProvider from "./context/AuthContext";
import Dashboard from "./screens/Dashboard/Dashboard";
import Ambassadors from "./screens/Dashboard/Ambassadors";
import DashboardLayout from "./screens/Dashboard/components/DashboardLayout";
import AmbassadorDetails from "./screens/Dashboard/AmbassadorDetails";
import TaskCreate from "./screens/Dashboard/TaskCreate";
import AllTasks from "./screens/Dashboard/AllTasks";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Profile from "./screens/Profile/Profile";
import { Toaster } from "sonner";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AuthContextProvider>
          <Toaster />
          <Router>
            <Routes>
              <Route path="/admin/login" element={<Login role={"Admin"} />} />
              <Route
                path="/lead-ambassador/login"
                element={<Login role={"Lead"} />}
              />
              <Route
                path="/sub-ambassador/login"
                element={<Login role={"Sub"} />}
              />
              <Route path="/dashboard" element={<DashboardLayout />}>
                <Route path="" element={<Dashboard />} />
                <Route path="ambassadors" element={<Ambassadors />} />
                <Route path="tasks/create" element={<TaskCreate />} />
                <Route path="tasks" element={<AllTasks />} />
                <Route
                  path="ambassadors/:email"
                  element={<AmbassadorDetails />}
                />
                <Route path="profile" element={<Profile />} />
              </Route>

              <Route
                path="/dashboard/personal/ambassadors/chat"
                element={<Chat />}
              />

              {/* <Route path="/tasks/all" element={<ViewTasks />} /> */}
              {/* <Route path="/tasks/personal/all" element={<PersonalTasks />} /> */}
            </Routes>
          </Router>
        </AuthContextProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
