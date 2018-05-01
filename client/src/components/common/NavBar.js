import React from 'react'
import {Link} from 'react-router-dom'

const Header  = () => (

    <div className='header'>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <Link to='/' style={{textDecoration:'none'}} className='navbar-brand'>Home</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01"
                    aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to='/create' style={{textDecoration:'none'}} className='nav-link'>Create</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/about' style={{textDecoration:'none'}} className='nav-link'>About</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>

)
export default Header
