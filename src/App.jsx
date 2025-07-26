import { useDispatch, useSelector } from "react-redux"
import Navbar from "./components/Navbar"
import { useEffect } from "react"
import { getProfile} from "./store/github/githubData"
import Profile from "./components/Profile"
import Loader from "./components/Loader"
import Main from "./components/Main"

function App() {
  const dispatch = useDispatch()
  const { user } = useSelector((store) => store.github)

useEffect(() => {   
    dispatch(getProfile("bexa007"));
}, []);

  return (
    <>
      <div className="wrapper">
        {user ? (
          <div className="container">
            <Navbar />
            <Profile />
            <Main />
          </div>
        ) : <Loader />}
      </div>
    </>
  )
}

export default App
