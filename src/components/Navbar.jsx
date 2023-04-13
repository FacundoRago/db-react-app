import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';
import { AuthTypes } from '../types/AuthTypes';

const Navbar = () => {

  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext)

  const handleLogout = () => {
    dispatch({ type: AuthTypes.logout })
    navigate('/login');
  }

  return (
    <nav className="navbar navbar-expand-lg bg-info">
        <div className="container-fluid">
          <h2 className="navbar-brand mt-1">DB App</h2>
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to='/men'>
                  Men
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='/women'>
                  Women
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='/search'>
                  Search
                </NavLink>
              </li>
            </ul>
            <div className='d-flex'>
              <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
            </div>
          </div>
        </div>
      </nav>
  )
}

export default Navbar