import Navbar from "./components/Navbar"

import Footer from "./components/Footer"
import { useState } from "react"
import { User } from "firebase/auth"
import { auth } from "./config/firebase"
import AnimatedRoutes from "./components/AnimatedRoutes"



function App() {
  const [isSignedIn, setSignedIn] = useState(false)
  const [signedInUser, setSignedInUser] = useState<User|null>()

  auth.onAuthStateChanged(() => {
    if (auth.currentUser) {
      setSignedInUser(auth.currentUser)
      setSignedIn(true)
    } else {
      setSignedInUser(null)
      setSignedIn(false)
    }
  })


  return (
    <>
      <Navbar isSignedIn={isSignedIn} signedInUser={signedInUser}/>
      <div className="container text-white">
      <AnimatedRoutes isSignedIn={isSignedIn} signedInUser={signedInUser}/>
      </div>
      <Footer/>
    </>
  )
}

export default App