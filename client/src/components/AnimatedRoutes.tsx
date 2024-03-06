import { Routes, Route, useLocation } from "react-router-dom"
import HomePage from "../pages/HomePage"
import LeaderboardPage from "../pages/LeaderboardPage"
import RegisterPage from "../pages/RegisterPage"
import UpdatesPage from "../pages/UpdatesPage"
import SubmitPage from "../pages/SubmitPage"
import { User } from "firebase/auth"

import { AnimatePresence } from 'framer-motion'

interface AnimatedRoutesProps {
    isSignedIn: boolean
    signedInUser: User|null|undefined
}

function AnimatedRoutes({isSignedIn}: AnimatedRoutesProps) {
  const location = useLocation() 

  return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/updates' element={<UpdatesPage/>}/>
            <Route path='/leaderboard' element={<LeaderboardPage/>}/>
            <Route path='/register' element={isSignedIn ? <HomePage/> : <RegisterPage/>}/>
            <Route path='/submit' element={isSignedIn ? <SubmitPage/> : <RegisterPage/>}/>
        </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes