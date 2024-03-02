import { Link } from "react-router-dom"

const Home = () => {
  return (
    <>
      <div className="homeContainer" >
        <h1>Welcome to the website</h1>
        <div className="LinkContainer">
            <Link to='/login' >Login</Link>
            <Link to='/signup' >Signup</Link>
        </div>
      </div>
    </>
  )
}

export default Home
