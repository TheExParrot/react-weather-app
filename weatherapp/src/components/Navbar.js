import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
	return (
    <header>
        <div className="container">
            <Link to="/">
                <h1>Weather Reporter</h1>
            </Link>
        </div>
    </header>
	)
}

export default Navbar