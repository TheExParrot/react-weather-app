import { Link } from 'react-router-dom'
import './Navbar.css'

import logo from './logo.png'

const Navbar = () => {
	return (
    <header>
        <div className="container">
            <Link to="/">
                <img src={logo} className="App-logo" alt="logo" />
            </Link>
        </div>
    </header>
	)
}

export default Navbar