import { Link } from "react-router-dom"
import mlbLogo from '../../public/mlbLogo.png'
function Navbar() {
    return (
        <header>
            <nav>
                <img src={mlbLogo} alt="Major League Baseball Logo" className="nav-logo" />
                <div className="nav-links">
                    <Link to={'/'}>Home</Link>
                    <Link to={'/homeruns'}>Home Runs</Link>
                    <Link to={'/hits'}>Hits</Link>
                    <Link to={'/years'}>Years</Link>
                    <Link to={'/hof'}>Hall of Fame</Link>
                </div>
            </nav>
        </header>
    )
}

export default Navbar