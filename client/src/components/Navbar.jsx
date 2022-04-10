import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <nav className="navbar">
      <div>
        <Link to="/">Home</Link>
        <Link to="/api/builds">Builds</Link>
        <Link to="/api/cases">Cases</Link>
        <Link to="/api/keycaps">Keycaps</Link>
        <Link to="/api/switches">Switches</Link>
      </div>
    </nav>
  )
}

export default Navbar
