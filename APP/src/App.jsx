import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { AuthProvider } from './contexts/AuthContext';
import HomePage from './pages/HomePage';
import TaskPage from './pages/TaskPage';
import NewFormPage from './pages/newFormPage';
import ProfilePage from './pages/profilePage';
import ProtectedRoutes from './ProtectedRoutes';





function App() {
  return (
    <>
    <AuthProvider>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/login' element={<LoginPage/>}></Route>
            <Route path='/register' element={<RegisterPage/>}></Route>

            <Route element={<ProtectedRoutes/>}>
                  <Route path='/tasks' element={<TaskPage/>}></Route>
                  <Route path='/newTask' element={<NewFormPage/>}></Route>
                  <Route path='/editTask/:id' element={<NewFormPage/>}></Route>
                  <Route path='/profile' element={<ProfilePage/>}></Route>
            </Route>
            
          </Routes>
        </BrowserRouter>
    </AuthProvider>
     
    </>
  )
}

export default App
