import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';




function App() {
  return (
    <>
      <BrowserRouter>
       <Routes>
         <Route path='/' element={<h1>Home</h1>}></Route>
         <Route path='/login' element={<LoginPage/>}></Route>
         <Route path='/register' element={<RegisterPage/>}></Route>
         <Route path='/tasks' element={<h1>Tasks page</h1>}></Route>
         <Route path='/newTask' element={<h1>Create Task</h1>}></Route>
         <Route path='/editTask/:id' element={<h1>Update Task</h1>}></Route>
         <Route path='/profile' element={<h1>Profile</h1>}></Route>

       </Routes>
      </BrowserRouter>
    </>
  )
}

export default App