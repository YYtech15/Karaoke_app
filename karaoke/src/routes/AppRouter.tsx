import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../components/auth/Login'
import Room from '../pages/Room'
import SignIn from '../components/auth/SignIn'
import Timeline from '../pages/Timeline'


const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/room' element={<Room />}></Route>
                <Route path='/timeline' element={<Timeline />}></Route>
                <Route path='/signIn' element={<SignIn />}></Route>
            </Routes>
        </Router>
    )
}

export default AppRouter