import { auth } from "../config/firebase"

function LogoutBtn() {
  const logout = () => {
    try {
      auth.signOut()
      console.log("loggedOut")
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <button onClick={logout} className="btn btn-outline-danger">Logout</button>
  )
}

export default LogoutBtn