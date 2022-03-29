import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <nav className="navbar">
      <div>
        <Link to="/">Home</Link>
        <Link to="/builds">Builds</Link>
        <Link to="/cases">Cases</Link>
        <Link to="/keycaps">Keycaps</Link>
        <Link to="/switches">Switches</Link>
      </div>
    </nav>
  )
}

export default Navbar
