import { Link } from "react-router-dom"

export default function Navbar() {

  return(
    <nav>
      <Link to="home">Home page</Link>
      <Link to="team">Team</Link>
      <Link to="contact">Contact</Link>
    </nav>

  )
}