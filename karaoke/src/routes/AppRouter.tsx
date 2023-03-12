import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../components/auth/Login'
import Room from '../pages/Room'
import Diary from '../pages/Diary'
import Sample from '../pages/Sample'
import SampleComponent from '../pages/SampleComponet'


const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/room' element={<Room />}></Route>
                <Route path='/diary' element={<Diary />}></Route>
                <Route path='/sample' element={<Sample />}></Route>
                <Route path='/sample2' element={<SampleComponent />}></Route>
            </Routes>
        </Router>
    )
}

export default AppRouter