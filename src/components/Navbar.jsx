import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Navbar({ user, handleLogout }) {
  return (
    <nav className="navbar navbar-expand-lg mb-3" style={{ borderBottom: '.2px solid black' }}>
      <div className="container">
        <Link className="navbar-brand" to="/">BUTİK</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-link" to="/">Ana Sayfa</NavLink>
            <NavLink className="nav-link" to="/products">Ürünler</NavLink>
            <NavLink className="nav-link" to="/about">Hakkımızda</NavLink>
            <NavLink className="nav-link" to="/contact">İletişim</NavLink>
            {
              user ? (
                <> 
                  <NavLink className="nav-link" to="/fav">Sepet</NavLink>
                  <button className="nav-link" onClick={handleLogout}>Logout({user.name})</button>
                </>
              ) : (
                <NavLink className="nav-link" to="/login">Login</NavLink>
              )
            }
            <h4></h4>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
